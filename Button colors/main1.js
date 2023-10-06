// toggle con jquery

$(document).ready(() => {
    $("#btnQuery").click(function () { 
        $("#pQuery").toggleClass("red");
    });
});

// toggle con JS
    
var btn = document.querySelector("#btnJS");

btn.onclick = function(){
    pJS.classList.toggle("blue");
}