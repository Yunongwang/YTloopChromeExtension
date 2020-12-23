//var localbool =true;



function loop(){
     
    if (!node) {
        var node = document.querySelector('.html5-video-player');
    }
    var localbool = node.querySelector('video').hasAttribute('loop');

    if (localbool) {
       node.querySelector('video').removeAttribute('loop');
    } else {
       node.querySelector('video').setAttribute('loop', '');        
    }
    localbool = node.querySelector('video').hasAttribute('loop');


  return localbool;

}

loop();