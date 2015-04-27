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

	// Build a list using the H3s on the page
	var listItemHtml = $('h3').map(function() {

		var $header = $(this);
		console.log($header);
		return '\n<li><a href="#' + $header.attr('id') + '">' + $header.text() + '</a></li>';

	}).get().join('');

	$('h2').before('<div id="toc"><span>On this Page:</span><ul>' + listItemHtml + '</ul></div>');

}

// starting the script on page load
$(function() {

	// Initialize image preview
	imagePreview();

	labelCodeSamples();

	addTableOfContents();

});
