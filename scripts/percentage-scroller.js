const scroller = document.getElementById('percentage-scroller');

const updateScroll = () => {
    const scrollPixels = document.body.scrollHeight - window.innerHeight;
    scroller.style.width = `${ window.scrollY / scrollPixels * 100 }%`;
}

window.addEventListener ('scroll', () => {
    updateScroll();
});