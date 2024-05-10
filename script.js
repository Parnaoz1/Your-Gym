let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Increment index and reset to 0 if it exceeds the number of slides
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Set the current slide to be displayed
  slides[slideIndex - 1].style.display = "block";

  // Remove active class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Set active class to the current dot
  dots[slideIndex - 1].className += " active";

  // Call showSlides() again after 4 seconds (adjust as needed)
  setTimeout(showSlides, 4000);
}