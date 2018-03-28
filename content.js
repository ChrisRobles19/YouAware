
var vid = document.getElementsByTagName("video")[0];

vid.addEventListener("ended", function() {
	var now = new Date();
	var min = now.getMinutes();
	var hour = now.getHours();
	if (hour > 12) {
		hour -= 12;
		if (min < 10) {
			alert("Time: " + hour + ":0" + min);
		} else {
			alert("Time: " + hour + ":" + min);
		}
	} else {
		if (min < 10) {
			alert("Time: " + hour + ":0" + min);
		} else {
			alert("Time: " + hour + ":" + min);
		}
	}
	

	//$("body").append('<dialog>This is a dialog.<br><button>Close</button></dialog>');
	//$( "#dialog" ).dialog("open");
});