$(document).ready(function () {
  const imgContainer = $('.card-img');
  const images = $('.card-img img');
  const prevButton = $('.las-angle-left');
  const nextButton = $('.las-angle-right');
  let currentIndex = 0;

  function showImage(index) {
    images.each(function (i) {
      $(this).css('display', i === index ? 'block' : 'none');
    });
  }

  function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  function showPrevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }

  prevButton.on('click', showPrevImage);
  nextButton.on('click', showNextImage);
});
