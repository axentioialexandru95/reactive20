import Selectors from '../settings/selectors'

class HeaderSlider extends Selectors{
    constructor(images) {
        super();
        console.log(images)
        this.currentImage = 0;
        this.images = images;
        this.appendImages();
        this.backgroundSwitcher();
    }

    backgroundSwitcher() {
    
        const arrows = this.element('.hero__slider-arrows'); 
        console.log('arrows:', arrows)
        const next = arrows.querySelector('.next');
        const prev = arrows.querySelector('.prev');
        next.addEventListener('click', (evt) => {
            if (this.images.length - 1 === this.currentImage) {
                return;
            }
            this.currentImage++ 
            this.appendImages();
            console.log(this.images.length - 1 )
            evt.stopPropagation();
        })
        prev.addEventListener('click', (evt) => {
            if (this.currentImage === 0) {
                return;
            }

            this.currentImage = this.currentImage - 1; 
            this.appendImages();
            evt.stopPropagation();
        })
    }
    appendImages() {
        console.log('here')
        const background = this.element('.hero__background');
        background.style.backgroundImage = `url(${this.images[this.currentImage]})`;
    }


}

export default HeaderSlider;
