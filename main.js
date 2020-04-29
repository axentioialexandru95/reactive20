import instagram from './images/instagram.png';
import instagramGreen from './images/instagram-green.png';
import facebookGreen from './images/facebook-green.png';
import facebook from './images/facebook.png';

$(document).ready(function () {


    const instagramIcons = document.querySelectorAll('.instagram img');
    const facebookIcons = document.querySelectorAll('.facebook img');
    const addPngHoverEffectGreen = function (els, image, replace) {
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


    const servicesContentColumnIds = document.querySelectorAll('.services__content-column h2')
    const servicesContent = document.querySelectorAll('.services__content')

    const bindData = function (els) {

        for (let i = 0; i < els.length; i++) {
            const el = els[i];
            el.addEventListener('click', (evt) => {
                const targetId = evt.currentTarget.id;
                const targetContentId = document.querySelector(`#${targetId}-content`);


                for (let k = 0; k < servicesContentColumnIds.length; k++) {
                    const service = servicesContentColumnIds[k];
                    service.classList.remove('active-service')

                }

                for (let j = 0; j < servicesContent.length; j++) {
                    const content = servicesContent[j];
                    content.classList.remove('active-content');
                }

                evt.currentTarget.classList.add('active-service')
                targetContentId.classList.add('active-content');
            })
        }
    }
    bindData(servicesContentColumnIds);

    const faqQuestion = $('.faq__question')
    const showToggle = function (els) {
        $(els).each((i, el) => {
            $(el).click((evt) => {
                const siblings = $(evt.currentTarget).siblings().find('p');
                siblings.each((i, el) => {
                    $(el).hide();
                })
                const text = $(evt.currentTarget).find('p');
                if (text.css('display') == 'block') {
                    text.fadeOut('fast');
                } else {
                    text.fadeIn('fast');
                }
                evt.stopPropagation();
            })
        })

    }
    showToggle(faqQuestion)
});