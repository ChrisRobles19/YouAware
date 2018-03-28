
var vid = document.getElementsByTagName("video")[0];

vid.addEventListener("ended", function() {
	var now = new Date();
	var min = now.getMinutes();
	var hour = now.getHours();
	alert("Time: " + hour + ":" + min);

	//$("body").append('<dialog>This is a dialog.<br><button>Close</button></dialog>');
	//$( "#dialog" ).dialog("open");
});