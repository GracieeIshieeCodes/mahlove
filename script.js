document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.images-line');
    const imageList = container.querySelectorAll('.rolling-image');
    const basicWidth = imageList[0].offsetWidth + parseInt(getComputedStyle(imageList[0]).marginLeft) + parseInt(getComputedStyle(imageList[0]).marginRight);

    let translation = 0;
    setInterval(() => {
        translation -= basicWidth;
        container.style.transform = `translateX(${translation}px)`;
        container.style.transition = 'transform 6s linear';

        if (Math.abs(translation) >= basicWidth * imageList.length) {
            translation = 0;
            container.style.transform = `translateX(${translation}px)`;
            container.style.transition = 'none';
        }
    }, 6000);
});
