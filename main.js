const settings = {
    selectors: {
        hero: '.hero',
        heroBackground: '.hero__background'

    }
}
const selectors = function (selector) { 
    return settings.selectors;
}

const getEl = function (el) { 
    return document.querySelector(el);
}
const getEls = function (el) {
    return document.querySelectorAll(el);
}

const heroBackground = getEl(selectors().heroBackground)
let heroImagesArr = heroBackground.attributes.images.value;
heroImagesArr = heroImagesArr.split(','); 

for (let i = 0; i < heroImagesArr.length; i++) {
    const image = heroImagesArr[i];
    heroBackground.style.backgroundImage = `url(${image})`;
    
}