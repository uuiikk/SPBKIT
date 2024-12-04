function generateRandomNumbers() {
	var table = document.getElementById('myTable')
	let q = document.getElementById('quantityNumb').value
	let min = document.getElementById('minNumb').value
	let max = document.getElementById('maxNumb').value
	if (q == '') {
		q = 5
	}
	if (min == '') {
		min = 1
	}
	if (max == '') {
		max = 10
	}
	q = parseInt(q)
	min = parseInt(min)
	max = parseInt(max)
	const randomNumbers = []
	for (let i = 0; i < q; i++) {
		randomNumbers.push(Math.floor(Math.random() * (max - min + 1)) + min)
	}
	randomNumbers.sort((a, b) => a - b)
	let countRows = Math.ceil(q / 20)
	temp = ''
	i = 0
	for (var y = 1; y <= countRows; y++) {
		var row = '<tr>'
		for (var x = 0; x < 20; x++) {
			if (randomNumbers[i] != undefined) {
				row += `<td>` + randomNumbers[i] + `</td>`
				i++
			}
		}
		temp += row + '</tr>'
	}
	table.innerHTML = temp
}
