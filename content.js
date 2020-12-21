//var localbool =true;



function loop(){
    chrome.storage.sync.get('IsLooping', function(items) {
        var localbool = items.IsLooping;
     
    console.log(localbool);
    if (!node) {
        var node = document.querySelector('.html5-video-player');
    }

    if (node.querySelector('video').hasAttribute('loop')) {
        node.querySelector('video').removeAttribute('loop');
        localbool = false;
    } else {
       node.querySelector('video').setAttribute('loop', '');
        localbool = true;        
    }
    chrome.storage.sync.set({'IsLooping': localbool},function() {
        console.log('Settings saved');
      });
  
    console.log(localbool);

});
}

loop();