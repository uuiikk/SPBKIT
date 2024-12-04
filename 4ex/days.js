function getDay() {
	let day = document.getElementById('input_day').value
	if (day == '') {
		day = 1
	}
	day = parseInt(day)
	const colors = {
		1: '#ffd500',
		2: '#ff8ef9',
		3: '#c1ffc1',
		4: '#ffc107',
		5: '#0077b6',
		6: '#c77dff',
		7: '#ff4444',
	}
	const days = {
		1: 'Понедельник',
		2: 'Вторник',
		3: 'Среда',
		4: 'Четверг',
		5: 'Пятница',
		6: 'Суббота',
		7: 'Воскресенье',
	}
	document.getElementById('res_day').style.backgroundColor = colors[day]
	document.getElementById('res_day').innerHTML = days[day]
}
