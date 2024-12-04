window.onload = function () {
	var table = document.getElementById('myTable')
	var temp = ''
	for (var y = 1; y <= 10; y++) {
		var row = '<tr>'
		for (var x = 1; x <= 10; x++) {
			row += '<td>' + x * y + '</td>'
		}
		temp += row + '</tr>'
	}
	table.innerHTML = temp
}
