let customerslideIndex = 0;
customerSlides();

function customerSlides() {
  let i;
  let slides = document.getElementsByClassName("customer-slides");
  let dots = document.getElementsByClassName("customer-success-dots");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  customerslideIndex++;
  if (customerslideIndex > slides.length) {customerslideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[customerslideIndex-1].style.display = "block";  
  dots[customerslideIndex-1].className += " active";
  setTimeout(customerSlides, 2000); // Change image every 2 seconds
}