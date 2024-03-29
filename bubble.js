let playground = document.querySelector('.section2');

document.addEventListener('mousemove', function (e) {
    let circle = document.createElement('span');
    circle.className = 'bubble'
    let x = e.offsetX;
    let y = e.offsetY;
    circle.style.left = x + "px";
    circle.style.top = y + "px";
    let size = Math.random() * 100;
    circle.style.width = 20 + size + "px";
    circle.style.height = 20 + size + "px";
    playground.appendChild(circle);
    setTimeout(function () {
        circle.remove();
    }, 1800);
});