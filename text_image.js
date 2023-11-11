var textElement = document.getElementById('imageText');

function updateText() {
  var currentImage = window.getComputedStyle(document.querySelector('.frame'), null).getPropertyValue('background-image');
  console.log('Current Image:', currentImage);


  switch (true) {
    case currentImage.includes('bg1.png'):
      textElement.textContent = "Texte pour l'image 1";
      break;
    case currentImage.includes('bg2.png'):
      textElement.textContent = "Texte pour l'image 2";
      break;
    case currentImage.includes('bg3.png'):
      textElement.textContent = "Texte pour l'image 3";
      break;
    case currentImage.includes('bg4.png'):
      textElement.textContent = "Texte pour l'image 4";
      break;
    default:
      textElement.textContent = "Texte par défaut";
  }
}


updateText();