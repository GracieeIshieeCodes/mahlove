document.addEventListener("DOMContentLoaded", () => {
    const { body } = document;
    const HEART_COUNT = 30;
    const COLORS = ['#74b9ff', '#6c5ce7', '#fdcb6e', '#55efc4', '#e056fd'];
    
    for (let i = 0; i < HEART_COUNT; i++) {
        const heartEle = document.createElement('div');
        heartEle.classList.add('heart');
        body.appendChild(heartEle);
        heartEle.style.left = Math.random() * 100 + '%';
        heartEle.style.animationDelay = Math.random() * 2 + 's';
        heartEle.style.animationDuration = Math.random() * 3 + 2 + 's';
        heartEle.style.background = changeColor();
    }
    
    function changeColor() {
        return COLORS[Math.floor(Math.random() * COLORS.length)];
    }
});
