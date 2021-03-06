export default class Window {
    constructor(el) {
        this.el = el;
        this.setWindowSize()
        this.setWindowPosition()
        // Incrementing the z-index on click
        el.addEventListener('mousedown', e => {this.onClick(e)});

    }

    // Application of a z-index higher than the current highest z-index
    onClick(e) {
        console.log(e);
        this.el.style.zIndex = window.maxZIndex++;
        this.isGrabbed = true;
        this.el.classList.add('is-grabbed');

        // Computing offset between mouse and card origin
        const rectangle = this.el.getBoundingClientRect();
        this.grabOffset = {
            x: e.clientX - rectangle.x,
            y: e.clientY - rectangle.y
        }

        console.log(this.grabOffset);
    }
    
    setWindowSize() {
        // Random placement of windows, without the possibility of leaving the DOM
        let height = 300;
        let width = 300;
        this.el.style.zIndex = window.maxZIndex++;
        this.isGrabbed = false;
        this.grabOffset = {x: 0, y: 0};
        if (this.el.dataset.width && this.el.dataset.height) {
            console.log("AHAHA");
            width = this.el.dataset.width;
            height = this.el.dataset.height;
        }
        this.el.style.width = `${width}px`;
        this.el.style.height = `${height}px`;
    }

    setWindowPosition() {
        const rectangle = this.el.getBoundingClientRect();        
        this.posX = Math.random() * (window.innerWidth - rectangle.width);
        this.posY = Math.random() * (window.innerHeight - rectangle.height);
        if (this.el.dataset.initX && this.el.dataset.initY) {
            this.posX =  (this.el.dataset.initX / 100 * (window.innerWidth - rectangle.width));
            this.posY = (this.el.dataset.initY / 100 * (window.innerHeight - rectangle.height));
            this.el.style.transform = `translate3d(${this.posX}px, ${this.posY}px, 0)`;
        }
        this.el.style.transform = `translate3d(${this.posX}px, ${this.posY}px, 0)`;
    }
}