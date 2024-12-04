function operation() {
	let m = document.getElementById('input_oper_m').value
	let n = document.getElementById('input_oper_n').value
	let o = document.getElementById('input_oper_o').value
	if (m == '') {
		m = 0
	}
	if (n == '') {
		n = 0
	}
	if (o == '' || o == 'сложить') {
		o = 'сложить'
		let res = parseInt(m) + parseInt(n)
		document.getElementById('res_oper').innerHTML = res
	}
	if (o == 'вычесть') {
		let res = parseInt(m) - parseInt(n)
		document.getElementById('res_oper').innerHTML = res
	}
	if (o == 'умножить') {
		let res = parseInt(m) * parseInt(n)
		document.getElementById('res_oper').innerHTML = res
	}
	if (o == 'разделить') {
		if (n == 0) {
			alert('Деление на ноль невозможно')
		}
		let res = parseInt(m) / parseInt(n)
		document.getElementById('res_oper').innerHTML = res
	}
}
