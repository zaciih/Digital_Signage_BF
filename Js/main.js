$(document).ready(function(){
  $('#Carousel').on('slide.bs.carousel', function () {
    if ($('#pre_vid').hasClass("active")) {
      console.log("video 1");
      var video = $('#vid_1')
      video[0].pause();
      video[0].currentTime = 0;
      video[0].play();
      // this targets an iframe element in html to allow facebook embed autoplay
      // video.attr("src", "https://www.facebook.com/plugins/video.php?autoplay=true&href=https%3A%2F%2Fwww.facebook.com%2FRapidIT.co.uk%2Fvideos%2F263867824490815%2F&show_text=0&width=560")
    } else if ($('#pre_vid2').hasClass("active")) {
        var video = $('#vid_2')
        video[0].pause();
        video[0].currentTime = 0;
        video[0].play();
    } else if ($('#pre_vid3').hasClass("active")) {
        var video = $('#vid_3')
        video.attr("src", "https://www.youtube.com/embed/4JRkkLwdygA?autoplay=1&mute=1")
    }
  });
});
