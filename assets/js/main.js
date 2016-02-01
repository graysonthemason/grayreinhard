function imgClick (url) {
	$(".overlay").removeClass('hidden')
	$("#current-img").html("<img src=\""+url+"\"><i class=\"fa fa-times\"></i>")
	$("#current-img").height($(window).height()-40)
}
function hideOverlay () {
	$(".overlay").addClass('hidden')
}
