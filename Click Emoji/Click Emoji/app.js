let closedFace = document.querySelector('.closed');
let openFace = document.querySelector('.open');

closedFace.addEventListener('click', () => {
    if (openFace.classList.contains('open')) {
        openFace.classList.add('active');
        closedFace.classList.remove('active');
    }
});

openFace.addEventListener('click', () => {
    if (closedFace.classList.contains('closed')) {
        closedFace.classList.add('active');
        openFace.classList.remove('active');
    }
});

