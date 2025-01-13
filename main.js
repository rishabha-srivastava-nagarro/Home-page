
$(function(){
    console.log('App Initialized')
    var bannerVideo = $('#intro-video');
    var videoBtn = $('#video-action-btn');


    // Pause and play the video, and change the button text
    function myFunction() {
      if (bannerVideo.paused) {
        bannerVideo.play();
        videoBtn.innerHTML = "Pause";
      } else {
        bannerVideo.pause();
        videoBtn.innerHTML = "Play";
      }
    }
})
