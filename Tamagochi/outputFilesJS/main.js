"use strict";
var circleBar = new ProgressBar.Circle('#circle-container', {
    color: 'white',
    strokeWidth: 2,
    trailWidth: 10,
    trailColor: 'black',
    easing: 'easeInOut'
});
circleBar.animate(0.75, {
    duration: 1500
});
