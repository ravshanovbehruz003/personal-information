console.log("Portfolio ");
document.addEventListener('DOMContentLoaded', function () {
  const img = document.querySelector('.hero-image-container img');
  if (img) {
    img.onload = () => {
      console.log("Rasm ");
    };
  }
});