//Crea un slideshow de 5 elementos 
function loadImagesToSlideShow(){
  var divSlides = document.getElementsByClassName("slideshow-container")[0];
  const slideshowroot = "./fotos/slideshow/";
  const picturesOfFestivals = ["slideshow1.jpg","slideshow2.jpg","slideshow3.jpg","slideshow4.jpg","slideshow5.jpg"]; //Si se cambia la carpeta slideshow, los nombres de las fotos tienen que tener congruencia con esta linea
  for (festival of picturesOfFestivals){
    var newDiv = document.createElement("div");
    newDiv.className = "mySlides fade";
    var imgSlide = slideshowroot+festival;
    var newImg = document.createElement("img");
    newImg.src = imgSlide;
    newImg.style.width = "100%"
    newDiv.appendChild(newImg);
    divSlides.appendChild(newDiv);
  }
  

}


  
/*
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
*/


//sizeOfDivElements es el temaño de un arreglo contàndose en logica 0 
function counterEqualsSizeOfArray(sizeOfDivElements,currentCounter){
  return ((currentCounter % sizeOfDivElements == 0)?true:false); 
}

/*Singleton class */

class SlideShowGenerator{
  static slideIndex = 0; 
  constructor(){
    if(!SlideShowGenerator.instance){
      SlideShowGenerator.instance = this;
    }
    return SlideShowGenerator.instance; 
  }
  static showSlides(){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    SlideShowGenerator.slideIndex++;
    if (SlideShowGenerator.slideIndex > slides.length) {
      SlideShowGenerator.slideIndex = 1
    }    
    slides[SlideShowGenerator.slideIndex-1].style.display = "block";  
    setTimeout(SlideShowGenerator.showSlides, 2000); // Change image every 2 seconds
  } 
}

