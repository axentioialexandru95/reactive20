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


    const navbarResponsive = function () {

        const navbar = $('.navbar__responsive__left').find('.hamburger')
        const navbarLayout = $('.navbar__responsive__left')
        navbar.on('click', (evt) => {

            const element = navbarLayout;
            const button = $(element).find('.hamburger ')
            const icon = $(element).find('.hamburger ion-icon')
            const language = $('.navbar__responsive__right')
            const responsiveContent = $('.navbar__responsive-content');

            if (button.hasClass('is-active')) {
                responsiveContent.hide()
                $(element).animate({
                    width: '70px',
                    height: '50px'
                }, 300, function () {
                    $(element).css('position', 'relative')
                    language.fadeIn();
                    button.removeClass('is-active')
                    icon.attr('name', 'reorder-three-outline');

                    // Animation complete.
                });

            } else {
                button.addClass('is-active')
                language.hide()
                button.css('height', 'fit-content')
                $(element).css('position', 'fixed')
                $(element).animate({
                    width: '100%',
                    height: '100%'
                }, 300, function () {

                    responsiveContent.css('display', 'flex')

                    // Animation complete.
                });

            }
            icon.attr('name', 'close-outline');
            evt.stopPropagation()
        })
    }
    showToggle(faqQuestion)
    scrollSpyAction(scrollSpyContainer)
    servicesDropdown();
    navbarResponsive();

});
