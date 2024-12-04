const colors = {
	0: '#ffffff', // Белый
	1: '#bde0fe', // Голубой
	2: '#0077b6', // Синий
	3: '#ffd500', // Желтый
	4: '#c77dff', // Фиолетовый
	5: '#ff758f', // Красный
	6: '#fae588', // Лимонный
	7: '#3dccc7', // Бирюзовый
	8: '#e5e5e5', // Светло-серый
}

function createTable() {
	var table = document.getElementById('myTable')
	var k = parseInt(document.getElementById('input_k').value)
	var temp = ''
	var numb = 1
	table.innerHTML = ''
	for (var y = 1; y <= 30; y++) {
		var row = '<tr>'
		for (var x = 1; x <= 30; x++) {
			i = numb % k
			row += `<td style='background-color: ${colors[i]}'>` + numb + `</td>`
			numb++
		}
		temp += row + '</tr>'
	}
	table.innerHTML = temp
}
