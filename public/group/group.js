$('.menu').on('click', function () {
  $('.menu__line').toggleClass('active');
  $('.gnav').fadeToggle();
  $('.day').fadeToggle();
  //上記のコードはsection追加ごとに付け足す
  $('.hero').fadeToggle();

});

if(!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
  ScrollReveal().reveal('.left', {
    duration: 1600,
    origin: 'left',
    distance: '50px',
    reset: true
  });
  ScrollReveal().reveal('.right', {
    duration: 1600,
    origin: 'right',
    distance: '50px',
    reset: true
  });
  }