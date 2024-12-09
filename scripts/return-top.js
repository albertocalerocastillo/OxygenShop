const returnTop = document.getElementById('iconoUp');

const toggleReturnTopButton = () => {
    const scrollPosition = window.scrollY;
    const scrollHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / scrollHeight) * 100;

    if (scrollPercentage > 20) {
        returnTop.style.display = 'block';
    } else {
        returnTop.style.display = 'none';
    }
};

window.addEventListener('scroll', toggleReturnTopButton);

const goTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

returnTop.addEventListener('click', goTop);

toggleReturnTopButton();