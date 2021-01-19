let slideIndex = 1;

function onLoad()
{
    second_img.style.display = "none";
    third_img.style.display = "none";
}

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);  
}

function showSlides(n) {

    let slides = document.getElementsByClassName("cars");
    
    if (n > slides.length) {
      slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }
  
    for (let slide of slides) {
        slide.style.display = "none";
    }   
    
    slides[slideIndex - 1].style.display = "block"; 
}