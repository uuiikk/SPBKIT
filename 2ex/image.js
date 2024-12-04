var resizable = false
var im1 = document.getElementById('im1')
var im2 = document.getElementById('im2')
function resizableImage() {
	if (resizable === false) {
		document.styleSheets[0].insertRule(
			'img:hover{border: 10px solid black;}'
		)
		resizable = true
	} else {
		document.styleSheets[0].deleteRule(
			'img:hover{border: 10px solid black;}'
		)
		resizable = false
	}
}
