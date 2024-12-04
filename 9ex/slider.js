let userArea = document.getElementById('userArea')
let list = document.querySelector('.list')
let items = document.querySelectorAll('.item')
let dots = document.querySelectorAll('li')
let prev = document.getElementById('prev')
let next = document.getElementById('next')
let pauseBtn = document.getElementById('pause')

let active = 0
let lengthItems = items.length - 1
let pause = false

userArea.addEventListener('click', function () {
	pauseBtn.style.display = 'flex'
	pause = !pause
	if (pause) {
		clearInterval(animateSlider)
		pauseBtn.style.backgroundImage =
			"url('https://img.icons8.com/?size=30&id=q0nxNdfpbYVl&format=png&color=000000')"
	} else {
		animateSlider = setInterval(() => {
			active++
			if (active > lengthItems) active = 0
			reloadSlider()
		}, 5000)
		pauseBtn.style.backgroundImage =
			"url('https://img.icons8.com/?size=30&id=fjx0LfGCNuZb&format=png&color=000000')"
	}
	setTimeout(() => {
		pauseBtn.style.display = 'none'
	}, 980)
})
prev.onclick = function () {
	if (active - 1 < 0) active = lengthItems
	else active -= 1
	reloadSlider()
}
next.onclick = function () {
	if (active + 1 > lengthItems) active = 0
	else active += 1
	reloadSlider()
}
let animateSlider = setInterval(() => {
	active++
	if (active > lengthItems) active = 0
	reloadSlider()
}, 5000)
function reloadSlider() {
	let checkLeft = items[active].offsetLeft
	list.style.left = -checkLeft + 'px'

	let lastActiveDot = document.querySelector('li.active')
	lastActiveDot.classList.remove('active')
	dots[active].classList.add('active')
	if (pause === false) {
		clearInterval(animateSlider)
		animateSlider = setInterval(() => {
			active++
			if (active > lengthItems) active = 0
			reloadSlider()
		}, 5000)
	}
}

dots.forEach((li, key) => {
	li.addEventListener('click', function () {
		active = key
		reloadSlider()
	})
	li.classList.add('dot')
})
