jQuery(document).ready(function ($) {

    $('#checkbox').change(function () {
        setInterval(function () {
            moveRight();
        }, 3000);
    });

    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('#slider').css({ width: slideWidth, height: slideHeight });

    $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});


//HEADER
const button = document.getElementById('hamburger');

button.addEventListener('click', () => {

    if (document.getElementById('hamburger').classList.contains('active')) {
        document.getElementById('hamburger').classList.remove('active');
        document.getElementById('mobileNav').style.display = 'none';
        document.getElementsByClassName('ham-line')[1].style.display = 'block';
        document.getElementsByClassName('ham-line')[0].style.transform = 'rotate(0deg)';
        document.getElementsByClassName('ham-line')[2].style.transform = 'rotate(0deg)';
        document.getElementsByClassName('ham-line')[2].style.marginTop = '0';
    } else {
        document.getElementById('mobileNav').style.display = 'flex';
        document.getElementById('hamburger').classList.add('active');
        document.getElementsByClassName('ham-line')[1].style.display = 'none';
        document.getElementsByClassName('ham-line')[0].style.transform = 'rotate(45deg)';
        document.getElementsByClassName('ham-line')[2].style.transform = 'rotate(-45deg)';
        document.getElementsByClassName('ham-line')[2].style.marginTop = '-10px';
    }

})



ScrollReveal({ reset: true });

ScrollReveal().reveal(".sec-1-text", {
  reset: false
});

ScrollReveal().reveal(".sec-1-img", {
  duration: 3000,
  origin: "top",
  distance: "400px",
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  rotate: {
    x: 20,
    z: -10
  }
});

ScrollReveal().reveal(".product", {
  duration: 3000,
  move: 0
});

ScrollReveal().reveal(".video", {
  duration: 2000,
  scale: 0.85
});

// ScrollReveal().reveal(".text-best-selling", {
//   delay: 100,
//   duration: 1500,
//   rotate: {
//     x: 20,
//     z: 20
//   }
// });

ScrollReveal().reveal(".text-best-selling", {
  duration: 3000,
  origin: "left",
  distance: "300px",
  easing: "ease-in-out"
});

ScrollReveal().reveal(".header-krish", {
  duration: 2000,
  origin: "bottom",
  distance: "10px",
  easing: "cubic-bezier(.37,.01,.74,1)",
  opacity: 0.3,
  scale: 0.5
});
