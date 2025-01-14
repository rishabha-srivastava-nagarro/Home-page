
var bannerVideo = document.getElementById('intro-video');
var videoBtn = document.getElementById('video-action-btn');
$(function(){
    console.log('App Initialized');

    $(document).on('click', '#customTab .db-more-box', function() {
      $('#customTab .db-more-box').removeClass('active');
      $('#customTab .image-container').removeClass('active');
      $(this).addClass('active');
      let tabType = $(this).attr('data-type')
      $('#customTab #' + tabType).addClass('active');
    })

    // window scroll position for header
    $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
      console.log(scroll);
      if(scroll > 100) {
        $('.header-collection').addClass('flip');
      }else{
        $('.header-collection').removeClass('flip');
      }
  });
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
