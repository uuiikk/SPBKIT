var countAttempts
function calcAttempts() {
	var from = parseInt(document.getElementById('inputFrom').value)
	var to = parseInt(document.getElementById('inputTo').value)
	const minCeiled = Math.ceil(from)
	const maxFloored = Math.floor(to)
	hiddenNumber = Math.floor(
		Math.random() * (maxFloored - minCeiled + 1) + minCeiled
	)
	numbers = to - from + 1
	countAttempts = Math.ceil(Math.log2(parseFloat(numbers)))
	document.getElementById('count').innerHTML = countAttempts
	console.log('Загаданное число' + ' ' + hiddenNumber)
	console.log('Кол-во чисел' + ' ' + numbers)
	console.log('Кол-во попыток' + ' ' + countAttempts)
}
function checkAttempt() {
	var attempt = parseInt(document.getElementById('inputAttempt').value)
	if (attempt === hiddenNumber) {
		document.getElementById('minMax').innerHTML = 'Вы угадали <3'
		document.getElementById('inputAttempt').style.backgroundColor = '#B9FFBC'
		document.getElementById('count').innerHTML = countAttempts - 1
	} else if (attempt < hiddenNumber) {
		document.getElementById('resultMinMax').innerHTML = 'Больше'
		document.getElementById('inputAttempt').style.backgroundColor = '#FF9999'
		document.getElementById('count').innerHTML = countAttempts - 1
	} else if (attempt > hiddenNumber) {
		document.getElementById('resultMinMax').innerHTML = 'Меньше'
		document.getElementById('inputAttempt').style.backgroundColor = '#FF9999'
		document.getElementById('count').innerHTML = countAttempts - 1
	}
	countAttempts -= 1
	if (countAttempts == 0 && attempt !== hiddenNumber) {
		document.getElementById('minMax').innerHTML = 'Вы не угадали :('
		document.getElementById('inputAttempt').style.backgroundColor = '#FF9999'
	}

	console.log('Кол-во попыток' + ' ' + countAttempts)
	document.getElementById('inputAttempt').value = ''
}
function myOnChange() {
	document.getElementById('inputAttempt').style.backgroundColor = '#FFF'
}

function clearAll() {
	document.getElementById('inputFrom').value = ''
	document.getElementById('inputTo').value = ''
	document.getElementById('inputAttempt').value = ''
	document.getElementById('inputAttempt').style.backgroundColor = '#FFF'
	document.getElementById('count').innerHTML = ''
	document.getElementById(
		'minMax'
	).innerHTML = `Загаданное число:<span id="resultMinMax"></span>`
}
