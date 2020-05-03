$(document).ready(function () {


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

    const scrollSpyContainer = $('.scrollspy li')
    const scrollSpyAction = function(scrollSpyContainer){
        scrollSpyContainer.each((i, el) => {
            console.log(el)
            $(el).on('click', (evt) => {
                const link = $(evt.currentTarget).find('a')
                const href = link.attr('href');
                $('html, body').animate({
                    scrollTop: $(href).offset().top
                }, 500);

            })
        })
    }
    scrollSpyAction(scrollSpyContainer)
});