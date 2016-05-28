(function () {

    // Webguide dropdown to be open when you are on primary pages -------------------
    $('#ucsb-nav').on('shown.bs.collapse', function (e) {
        var m = new RegExp('Home -')
        if (m.test(document.title)) {
            $('#webguide-li').addClass('open');
        }
    });

    // Hamburger Icon -------------------
    $('#ucsb-nav').on('shown.bs.collapse', function (e) {
        $('#hamburger').removeClass('navbar-closed');
        $("html, body").animate({ scrollTop: 0 }, 300);
    });

    $('#ucsb-nav').on('hidden.bs.collapse', function (e) {
        $('#hamburger').addClass('navbar-closed');
    });

    // primary nav dropdown ------------------------------
    $('.dropdown').on('show.bs.dropdown', function (e) {
        //$(this).find('.dropdown-menu').first().stop(true, true).slideDown();
        $('#content.container').addClass('movedown');
    })
    $('.dropdown').on('hide.bs.dropdown', function (e) {
        if ($('#content.container').hasClass('movedown')) {
            //$(this).find('.dropdown-menu').first().stop(true, true).slideUp();
            $('#content.container').removeClass('movedown');
        }
    })


    // Caret open/close ---------------------------------
    $('a.dropdown-title').click(function (e) {
        e.preventDefault();
        if (!$(this).hasClass('active')) {
            // the element clicked was not active, but now is - 
            $('a.dropdown-title').removeClass('active');
            $(this).addClass('active');
            setIconOpened(this);
        }
        else {
            // active panel was reclicked
            $(this).removeClass('active');
            if ($(this).find('span').hasClass('opened')) {
                setIconOpened(null);
            }
            else {
                setIconOpened(this);
            }
        }
    });

    // create a function to set the open icon for the given panel
    // clearing out all the rest (activePanel CAN be null if nothing is open)
    function setIconOpened(activePanel) {
        $('.dropdown-title').find('span').addClass('closed').removeClass('opened');

        if (activePanel) {
            $(activePanel).find('span').addClass('opened').removeClass('closed');
        }
    }

}).call(this);
