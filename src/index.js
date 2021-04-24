import Window from './js/window';

const windowElements = document.querySelectorAll('.windows div');
const windowList = [];

window.maxZIndex = 0;

windowElements.forEach(el => {
    windowList.push(new Window(el))
});

window.addEventListener('mouseup', () => {
    windowList.forEach(win => {
        win.isGrabbed = false;
        win.el.classList.remove('is-grabbed');
    })
})

window.addEventListener('mousemove', (e) => {
    windowList.forEach(win => {
        if (win.isGrabbed) {
            win.el.style.transform = `translate3d(${e.clientX - win.grabOffset.x}px, ${e.clientY - win.grabOffset.y}px, 0)`;
        }
    })
})

window.addEventListener('resize', () => {
    windowList.forEach(win => {
        win.setWindowPosition();
    })
})