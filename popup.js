let loopButton = document.getElementById('startloop');


function updateStatus(boolvalue){
    chrome.tabs.query({active: true, currentWindow: true}, ([tab]) => {


            if (boolvalue){
                document.getElementById('loopStatus').textContent = "loop On";
            } else {
                document.getElementById('loopStatus').textContent = "loop off";
            }
        });

}

chrome.tabs.executeScript(null, {file: "checkloopstatus.js"},function(results){
    var firstScriptResult = results[0];
    console.log(firstScriptResult);
    updateStatus(firstScriptResult);
});


loopButton.onclick = function(element) {
    chrome.tabs.executeScript(null, {file: "content.js"},function(results){
        var firstScriptResult = results[0];
        console.log(firstScriptResult);
        updateStatus(firstScriptResult);

    });
    
};