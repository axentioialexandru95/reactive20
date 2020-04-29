import instagram from './images/instagram.png';
import instagramGreen from './images/instagram-green.png';
import facebookGreen from './images/facebook-green.png';
import facebook from './images/facebook.png';


const instagramIcons = document.querySelectorAll('.instagram img');
const facebookIcons = document.querySelectorAll('.facebook img');
const addPngHoverEffectGreen = function(els, image, replace){
    for (let i = 0; i < els.length; i++) {
        const icon = els[i];
        icon.addEventListener('mouseover', (evt) => {
            const img = evt.currentTarget
            img.setAttribute('src', replace)
        })
        icon.addEventListener('mouseleave', (evt) => {
            const img = evt.currentTarget
            img.setAttribute('src', image)
        })

    }
}

addPngHoverEffectGreen(instagramIcons, instagram, instagramGreen);
addPngHoverEffectGreen(facebookIcons, facebook, facebookGreen);
