document.getElementById('hamburger').addEventListener('click', ()=> {
    const nav = document.querySelector('nav');
    let hamburgerIcon = document.getElementById('hamburger'); 
    nav.classList.toggle('open');
    document.querySelector('body').classList.toggle('stop-scrolling');

    if(nav.classList.contains('open')){
        hamburgerIcon.src = 'images/icon-close.svg';
    }else {
        hamburgerIcon.src = 'images/icon-hamburger.svg';
    }
})