$(function() {

    // slick slider
    $('.slider__items').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
    });

    $('.slick-prev').text(' ');
    $('.slick-next').text(' ');


    // 2 item active
    $('.pricing__item').hover( function() {
        $('.pricing__item').removeClass('active');
    });

    let mainItem =  $('.pricing__item:nth-child(2)');

    function checkClass() {
        if (mainItem.attr('class') !== 'active' )
        mainItem.addClass('active');
    }

    setInterval(checkClass, 10000);

    // modal 1
    const popupLinks = $('.popup-link');

    let unlock = true;


    if (popupLinks.length > 0) {
        for (let index = 0; index < popupLinks.length; index++) {
            const popupLink = popupLinks[index];
            popupLink.addEventListener('click', function(e) {
                const popupName = popupLink.getAttribute('href').replace('#', '');
                const curentPopup = document.getElementById(popupName);
                popupOpen(curentPopup);
                e.preventDefault();
            });
        }
    }

    const popupCloseIcon = $('.close-popup');
    if (popupCloseIcon.length > 0) {
        for (let index = 0; index < popupCloseIcon.length; index++) {
            const el = popupCloseIcon[index];
            el.addEventListener('click', function(e) {
                popupClose(el.closest('.popup'));
                e.preventDefault();
            });
        }
        noScroll ();
    }

    function popupOpen(curentPopup) {
        if (curentPopup && unlock) {
            const popupActive = document.querySelector('.popup.open');
            if (popupActive) {
                popupClose(popupActive, false);
            }
            curentPopup.classList.add('open');
            noScroll ();
            curentPopup.addEventListener('click', function(e) {
                if (!e.target.closest('.popup__content')) {
                    popupClose(e.target.closest('.popup'));
                }
            });
        }
    }

    function popupClose(popupActive, doUnlock = true) {
        if (unlock) {
            popupActive.classList.remove('open');
            noScroll ();
        }
    }

    // close ESC
    document.addEventListener('keydown', function(e) {
        if (e.which === 27) {
            const popupActive = document.querySelector('.popup.open');
            popupClose(popupActive);
        }
    });
    document.addEventListener('keydown', function(e) {
        if (e.which === 27) {
            const popupActive2 = document.querySelector('.popup-2__wrapper.open');
            popupClose(popupActive2);
        }
    });

    // no scroll
    function noScroll () {
        if ($('#popup').hasClass('open')) {
            document.getElementsByTagName("body")[0].style.overflow="hidden";
        } else {    
            document.getElementsByTagName("body")[0].style.overflow="visible";
        }
    }
    function noScroll2 () {
        if ($('#popup-2').hasClass('open')) {
            document.getElementsByTagName("body")[0].style.overflow="hidden";
        } else {    
            document.getElementsByTagName("body")[0].style.overflow="visible";
        }
    }

    // Modal 2
    const popupLinks2 = $('.popup-2-link');


    if (popupLinks2.length > 0) {
        for (let index = 0; index < popupLinks2.length; index++) {
            const popupLink = popupLinks2[index];
            popupLink.addEventListener('click', function(e) {
                const popupName = popupLink.getAttribute('href').replace('#', '');
                const curentPopup = document.getElementById(popupName);
                popupOpen2(curentPopup);
                e.preventDefault();
            });
        }
    }

    const popupCloseIcon2 = $('.popup-2__close');
    if (popupCloseIcon2.length > 0) {
        for (let index = 0; index < popupCloseIcon2.length; index++) {
            const el = popupCloseIcon2[index];
            el.addEventListener('click', function(e) {
                popupClose2(el.closest('.popup-2__wrapper'));
                e.preventDefault();
            });
        }
        noScroll2 ();
    }

    function popupOpen2(curentPopup) {
        if (curentPopup && unlock) {
            const popupActive2 = document.querySelector('.popup-2__wrapper.open');
            if (popupActive2) {
                popupClose2(popupActive2, false);
            }
            curentPopup.classList.add('open');
            noScroll2 ();
            curentPopup.addEventListener('click', function(e) {
                if (!e.target.closest('.popup-2')) {
                    popupClose2(e.target.closest('.popup-2__wrapper'));
                }
            });
        }
    }

    function popupClose2(popupActive2, doUnlock = true) {
        if (unlock) {
            popupActive2.classList.remove('open');
            noScroll2 ();
        }
    }

    // всплывающая подсказка
    $('.nav__link span').hide();
    $('.specialization__item-link span').hide();
    $('.specialization__box span').hide();
    $('.nav__login span').hide();


    $('.nav__link').on('click', function() {
        if ( $('span', this).css('display') == 'none' ) {
            $('span', this).show(500).delay(2000).hide(500);
        }
    });
    $('.specialization__item-link').on('click', function() {
        if ( $('span', this).css('display') == 'none' ) {
            $('span', this).show(500).delay(2000).hide(500);
        }
    });
    $('.specialization__btn').on('click', function() {
        if ( $('.specialization__box > span').css('display') == 'none' ) {
            $('.specialization__box > span').show(500).delay(2000).hide(500);
        }
    });
    $('.nav__login button').on('click', function() {
        if ( $('.nav__login span').css('display') == 'none' ) {
            $('.nav__login span').show(500).delay(1500).hide(500);
        }
    });
});