$(document).ready(function () {
    const portfolioItems = $('.portfolio-overlay')
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
    const scrollSpyAction = function (scrollSpyContainer) {
        scrollSpyContainer.each((i, el) => {
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


    portfolioItems.each((i, el) => {
        $(el).click((evt) => {
            const target = evt.currentTarget;
            $('.underlay').fadeIn();
            $(el).find('.portfolio-content').fadeIn();
            $(el).find('ion-icon').fadeIn();
            $('html').css('overflow-y', 'hidden');
            evt.stopPropagation();
        })
        $(el).find('ion-icon').click((evt) => {
            const target = evt.currentTarget;
            $('.underlay').fadeOut();
            $(target).fadeOut();
            $(el).find('.portfolio-content').fadeOut();
            $('html').css('overflow-y', 'scroll');
            evt.stopPropagation();
        })
        $('.underlay').click((evt) => {
            const target = evt.currentTarget;
            $(target).fadeOut();
            $('.portfolio-content').fadeOut();
            $('.portfolio-content').find('ion-icon').fadeOut();
            $('html').css('overflow-y', 'scroll');
            evt.stopPropagation();
        })
    })

    $('#canvasOne').attr('width', window.innerWidth);
    $('#canvasOne').attr('height', window.innerHeight);

});
