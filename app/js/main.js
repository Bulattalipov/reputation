let headerTopBtn = document.querySelector('.header-top__btn');
let headerBotton = document.querySelector('.header-bottom');

headerTopBtn.addEventListener('click', function(){
  headerTopBtn.classList.toggle('header-top__btn--active');
  headerBotton.classList.toggle('header-bottom--active');
});