let changeColor = document.getElementById('startloop');
var loopStatus = true;

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);

});

function updateStatus(){
    chrome.tabs.query({active: true, currentWindow: true}, ([tab]) => {
        
        chrome.storage.sync.get('IsLooping', function(data) {
            loopStatus = data.IsLooping;
            console.log(this.loopStatus);
          });
        console.log(loopStatus);

        if (loopStatus){
            document.getElementById('loopStatus').textContent = "loop On";
        } else {
            document.getElementById('loopStatus').textContent = "loop off";
        }
    });
}

updateStatus();

changeColor.onclick = function(element) {
    chrome.tabs.executeScript(null, {file: "content.js"});
    updateStatus();
};