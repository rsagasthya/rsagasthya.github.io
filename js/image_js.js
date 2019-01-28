var SCALED_IMAGE_HEIGHT=500;
var IMG_WIDTH=250;

var SCALED_DOCUMENT_IMAGE_HEIGHT=250;
var DOC_IMG_WIDTH=125;

function autoScaleImage() {
	var origHeight = $("#image").height();
	var scaleFactor = SCALED_IMAGE_HEIGHT/origHeight;
	var origWidth = $("#image").width();
	var scaledWidth = origWidth * scaleFactor;
	$("#image").height(SCALED_IMAGE_HEIGHT);
	$("#image").width(scaledWidth);
	var left = (IMG_WIDTH-scaledWidth)/2;
	$("#image").css("left", left);
}

function autoScaleDocumentImage() {
	var origHeight = $("#image").height();
	var scaleFactor = SCALED_DOCUMENT_IMAGE_HEIGHT/origHeight;
	var origWidth = $("#image").width();
	var scaledWidth = origWidth * scaleFactor;
	$("#image").height(SCALED_DOCUMENT_IMAGE_HEIGHT);
	$("#image").width(scaledWidth);
	var left = (DOC_IMG_WIDTH-scaledWidth)/2;
	$("#image").css("left", left);
}