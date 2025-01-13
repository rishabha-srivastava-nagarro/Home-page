
var bannerVideo = document.getElementById('intro-video');
var videoBtn = document.getElementById('video-action-btn');
$(function(){
    console.log('App Initialized');
})

// Pause and play the video, and change the button text
function controlVideo() {
  if (bannerVideo.paused) {
    bannerVideo.play();
    videoBtn.innerHTML = "Pause";
  } else {
    bannerVideo.pause();
    videoBtn.innerHTML = "Play";
  }
}
