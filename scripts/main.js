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

	$('h2').before('<div id="toc"><span>On this Page:</span><ul>' + listItemHtml + '</ul></div>');

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
		'<iframe src="http://www.google.com/cse?q='
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
