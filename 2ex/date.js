function myGetDate() {
	const daysOfWeek = {
		Mon: 'Понедельник',
		Tue: 'Вторник',
		Wed: 'Среда',
		Thu: 'Четверг',
		Fri: 'Пятница',
		Sat: 'Суббота',
		Sun: 'Воскресенье',
	}
	const months = {
		Jan: 'Января',
		Feb: 'Февраля',
		Mar: 'Марта',
		Apr: 'Апреля',
		May: 'Мая',
		Jun: 'Июня',
		Jul: 'Июля',
		Aug: 'Августа',
		Sep: 'Сентября',
		Oct: 'Октября',
		Nov: 'Ноября',
		Dec: 'Декабря',
	}

	const dayOfWeek = () => {
		var date = new Date()
		date.setDate(date.getDate())
		let res = date.toString().slice(0, 3)
		return daysOfWeek[res]
	}
	const month = () => {
		var date = new Date()
		date.setDate(date.getDate())
		let res = date.toString().slice(4, 7)
		return months[res]
	}
	const dayOfMonth = () => {
		var date = new Date()
		date.setDate(date.getDate())
		let res = date.toString().slice(8, 10)
		return res
	}
	const time = () => {
		var date = new Date()
		date.setDate(date.getDate())
		let res = date.toString().slice(16, 21)
		return res
	}

	timeend = new Date()
	timeend = new Date(timeend.getFullYear() + 1, 0, 1)
	function timeNewYear() {
		today = new Date()
		today = Math.floor((timeend - today) / 1000)
		tsec = today % 60
		today = Math.floor(today / 60)
		if (tsec < 10) tsec = '0' + tsec
		tmin = today % 60
		today = Math.floor(today / 60)
		if (tmin < 10) tmin = '0' + tmin
		thour = today % 24
		today = Math.floor(today / 24)
		timestr = today + ' дня/ей '
		return timestr
	}

	const formattedDate = `${dayOfWeek()}, ${dayOfMonth()} ${month()} ${time()}`

	alert(
		'Сегодня : ' + formattedDate + '\n' + 'До нового года: ' + timeNewYear()
	)
}
