$(document).ready(function () {
    const portfolioItems = $('.portfolio-overlay')
    const servicesContentColumnIds = document.querySelectorAll('.services__content-column h2')

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


    const servicesDropdown = function () {

        let activeIndex = 0;
        const servicesContent = $('.services__content');
        const dropdownButtons = $('.services__buttons h2');
        const activeDropdown = $('.services__content.active-service');

        dropdownButtons.each((i, el) => {
            $(el).on('click', (evt) => {
                const element = $(evt.currentTarget).parent();
                element.addClass('active-service');
                const siblings = element.siblings();
                siblings.removeClass('active-service');
                activeIndex = i;

                // Set the content to the current active element
                servicesContent.each((i, el) => {
                    const siblings = $(el).siblings();
                    siblings.removeClass('active-content');

                    if (i == activeIndex) {
                        // Event loop will remove the classes after they were added 
                        // thus not showing the correct elements
                        setTimeout(() => {
                            $(el).addClass('active-content');
                        }, 0);
                    }

                })
            });
        })

    }

    servicesDropdown();

});
