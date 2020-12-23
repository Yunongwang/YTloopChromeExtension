function updateStoredBoolean(){
    //todo add exception handling

    if (!node) {
        var node = document.querySelector('.html5-video-player');
    }
    var localbool =node.querySelector('video').hasAttribute('loop');
    return localbool;
}
updateStoredBoolean();