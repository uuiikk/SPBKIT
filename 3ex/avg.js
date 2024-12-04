function avg() {
	let numbString = document.getElementById('input_numb').value
	if (numbString != '') {
		let numbers = numbString.split(' ').map(digit => parseInt(digit))
		let total = numbers.reduce(
			(accumulator, currentValue) => accumulator + currentValue
		)
		document.getElementById('res_avg').innerHTML = total / numbers.length
	} else alert('Введите числа')
}
