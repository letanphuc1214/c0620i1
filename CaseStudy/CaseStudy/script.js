// slideshow body
$(document).ready(function(){
  $('.autoplay').slick({
      speed: 3000,
        responsive: [
            {
                breakpoint: 250,
                settings: {
                    slidesToShow: 0
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 5000,
                settings: {
                    slidesToShow: 4
                }
            }
        ],
        lazyLoad: 'ondemand',
        slidesToScroll: 1,
        autoplaySpeed: 200,
        autoplay : true
    });
  
let myIndex = 0;
function carouselSlideShow(){
  let i;
  let x = document.getElementsByClassName("slideshow-image");
  for(i = 0; i < x.length; i++){
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carouselSlideShow, 3000);
}
carouselSlideShow(myIndex = 0);



// greatdeal slide1
greatdeal1 = 0;
carouselgreatdeal1(greatdeal1 = 0);
function currentDiv(n) {
  carouselgreatdeal1(greatdeal1 = n);
  }
function carouselgreatdeal1() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    greatdeal1++;
    if (greatdeal1 > x.length) { greatdeal1 = 1 }
    x[greatdeal1 - 1].style.display = "block";

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-blue", "");
      }
      dots[greatdeal1-1].className += " w3-blue";
    setTimeout(carouselgreatdeal1, 2000); // Change image every 2 seconds
}


// greatdeal slide2
greatdeal2 = 0;
carouselgreatdeal2(greatdeal2 = 0);
function currentDiv(n) {
  carouselgreatdeal2(greatdeal2 = n);
  }
function carouselgreatdeal2() {
    let i;
    let x = document.getElementsByClassName("mySlide");
    let dots = document.getElementsByClassName("dot1");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    greatdeal2++;
    if (greatdeal2 > x.length) { greatdeal2 = 1 }
    x[greatdeal2 - 1].style.display = "block";

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-blue", "");
      }
      dots[greatdeal2-1].className += " w3-blue";
    setTimeout(carouselgreatdeal2, 3000); // Change image every 3 seconds
}


    
});