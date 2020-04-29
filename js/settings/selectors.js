class Selectors {
    constructor() {}
    
    element(el) {
        return document.querySelector(el);
    }

    elements(els) {
        return document.querySelectorAll(els);
    }
}
export default Selectors;