function hello() {
    let name = document.getElementById('input_name').value
	if (typeof name !== 'string' || name == "") {
		name = 'Гость'
	}
	document.getElementById('res_name').innerHTML = `Привет, ${name}!`
}
