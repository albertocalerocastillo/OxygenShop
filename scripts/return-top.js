const returnTop = document.getElementById('iconoUp');

const goTop = () => {
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 200);
};

returnTop.addEventListener('click', goTop);