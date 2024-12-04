function rgb() {
	let r = document.getElementById('input_r').value
	let g = document.getElementById('input_g').value
	let b = document.getElementById('input_b').value
	if (r == '') {
		r = 0
	}
	if (g == '') {
		g = 0
	}
	if (b == '') {
		b = 0
	}
	document.getElementById('res_rgb').innerHTML = `rgb(${r},${g},${b})`
	document.getElementById(
		'res_rgb'
	).style.backgroundColor = `rgb(${r},${g},${b})`
}
