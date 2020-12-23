function updateStoredBoolean(){
    if (!node) {
        var node = document.querySelector('.html5-video-player');
    }
    var localbool =node.querySelector('video').hasAttribute('loop');
    console.log(localbool);
    return localbool;
}
updateStoredBoolean();