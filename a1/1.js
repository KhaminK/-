document.addEventListener('mousemove', (event) => {
    const hoverEffect1 = document.getElementById('hoverEffect1');
    const hoverEffect2 = document.getElementById('hoverEffect2');

    const ellipseElements = document.querySelectorAll('.ellipse-div, .desktop-1-item, .desktop-1-inner, .desktop-1-child1, .desktop-1-child2, .desktop-1-child3');

    let isOnEllipse = false;
    ellipseElements.forEach(ellipse => {
        const rect = ellipse.getBoundingClientRect();
        if (
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom
        ) {
            isOnEllipse = true;
        }
    });

    if (!isOnEllipse) {
        hoverEffect1.style.display = 'block';
        hoverEffect2.style.display = 'block';
        hoverEffect1.style.left = `${event.clientX - 127.5}px`;
        hoverEffect1.style.top = `${event.clientY - 127.5}px`;
        hoverEffect2.style.left = `${event.clientX + 51}px`;
        hoverEffect2.style.top = `${event.clientY - 127.5}px`;
    } else {
        hoverEffect1.style.display = 'none';
        hoverEffect2.style.display = 'none';
    }
});
