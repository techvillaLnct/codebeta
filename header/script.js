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