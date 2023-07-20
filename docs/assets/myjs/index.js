
window.addEventListener('load', videoScroll);
window.addEventListener('scroll', videoScroll);

function myCustomFunction() {
  document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('play-button');
    const videoElement = document.getElementById('myVideo');
    const seekBar = document.querySelector('.seek-bar');
    const progressElement = document.querySelector('.seek-bar .progress');
  
    let autoplayEnabled = false;
  
    // Function to handle the play button click
    const handlePlayButtonClick = () => {
      if (videoElement.paused) {
        videoElement.play();
        playButton.style.display = 'none';
        autoplayEnabled = true;
      } else {
        videoElement.pause();
        playButton.style.display = 'block';
        autoplayEnabled = false;
      }
    };
  
    // Event listener for play button click
    playButton.addEventListener('click', handlePlayButtonClick);
  
    // Event listener for video pause
    videoElement.addEventListener('pause', () => {
      playButton.style.display = 'block';
      autoplayEnabled = false;
    });
  
    // Event listener for video time update to update progress bar
    videoElement.addEventListener('timeupdate', () => {
      const progress = (videoElement.currentTime / videoElement.duration) * 100;
      progressElement.style.width = `${progress}%`;
    });
  
    // Function to handle the scroll event
    const handleScroll = () => {
      if (!videoElement.paused && autoplayEnabled) {
        videoElement.pause();
        playButton.style.display = 'block';
        autoplayEnabled = false;
      }
    };
  
    // Event listener for scroll
    window.addEventListener('scroll', handleScroll);
  });
  
  
}


function mycarousal(){
  var multipleCardCarousel = document.querySelector("#carouselExampleControls");

  if (window.matchMedia("(min-width: 576px)").matches) {
    var carousel = new bootstrap.Carousel(multipleCardCarousel, {
      interval: false
    });
    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();
    var scrollPosition = 0;
    $("#carouselExampleControls .carousel-control-next").on("click", function () {
      if (scrollPosition < carouselWidth - cardWidth * 2.5) {
        scrollPosition += cardWidth;
        $("#carouselExampleControls .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
    $("#carouselExampleControls .carousel-control-prev").on("click", function () {
      if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        $("#carouselExampleControls .carousel-inner").animate(
          { scrollLeft: scrollPosition },
          600
        );
      }
    });
  } else {
    $(multipleCardCarousel).addClass("slide");
  }
  
}
