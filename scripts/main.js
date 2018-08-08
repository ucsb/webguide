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

/*
 * Image preview script
 * powered by jQuery (http://www.jquery.com)
 *
 * written by Alen Grakalic (http://cssglobe.com)
 *
 * for more info visit http://cssglobe.com/post/1695/easiest-tooltip-and-image-preview-using-jquery
 *
 */

this.imagePreview = function(){
	/* CONFIG */

		xOffset = 160;
		yOffset = 50;

		// these 2 variable determine popup's distance from the cursor
		// you might want to adjust to get the right result

	/* END CONFIG */
	$("a.preview").hover(function(e){
		this.t = this.title;
		this.title = "";
		var c = (this.t != "") ? "<br/>" + this.t : "";
		$("body").append("<p id='preview'><img src='"+ this.href +"' alt='Image preview' />"+ c +"</p>");
		$("#preview")
			.css("top",(e.pageY - yOffset) + "px")
			.css("left",(e.pageX + xOffset) + "px")
			.fadeIn("fast");
    },
	function(){
		this.title = this.t;
		$("#preview").remove();
    });
	$("a.preview").mousemove(function(e){
		$("#preview")
			.css("top",(e.pageY - yOffset) + "px")
			.css("left",(e.pageX + xOffset) + "px");
	});
};

function labelCodeSamples() {

	$('.highlight')
		.filter(':contains("GOOD PRACTICE")').addClass('good').end()
		.filter(':contains("BAD PRACTICE")').addClass('bad');

}

function addTableOfContents() {

	var $headers = $('h3');

	if($headers.length === 0) {

		// If there are no headers on the page, do not generate a table of
		// contents
		return;

	}

	// Build a list using the H3s on the page
	var listItemHtml = $headers.map(function() {

		var $header = $(this);
		return '\n<li><a href="#' + $header.attr('id') + '">' + $header.text() + '</a></li>';

	}).get().join('');

	$('main').prepend('<div id="toc"><span>On this Page:</span><ul>' + listItemHtml + '</ul></div>');

}

function initSearch() {

	var $searchWrapper = $('#search-wrapper');

	if($searchWrapper.length === 0) {

		// There is no wrapper in which to display the search results
		return;

	}

	var searchTerm = getQueryVariable('query');

	if(searchTerm === null || searchTerm === '') {
		$searchWrapper.html('<p>No search term was provided</p>');
		return;
	}

	$searchWrapper.html(
		'<iframe src="https://www.google.com/cse?q='
			+ encodeURIComponent(searchTerm)
			+ '&amp;cx=006455971487473204572%3A398_hnsuc6g&cof=FORID%3A11" '
			+ 'class="search-results"></iframe>');

}

// Source: https://css-tricks.com/snippets/javascript/get-url-variables/
function getQueryVariable(variable)
{
	var query = window.location.search.substring(1);
	var vars = query.split("&");

	for (var i=0;i<vars.length;i++)
	{
		var pair = vars[i].split("=");
		if(pair[0] == variable)
		{
			return pair[1];
		}
	}

	return null;
}

// starting the script on page load
$(function() {

	// Initialize image preview
	imagePreview();

	labelCodeSamples();

	addTableOfContents();

	initSearch();

});
