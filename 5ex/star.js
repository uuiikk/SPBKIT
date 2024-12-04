function createStar() {
	const container = document.getElementById('container')
	const star = document.createElement('div')
	star.className = 'star'

	// Случайный размер квадрата
	const size = Math.ceil(Math.random() * 100)
	star.style.width = `${size}px`
	star.style.height = `${size}px`

	// Случайный цвет квадрата
	const color = `hsl(${Math.floor(Math.random() * 360)}, 50%, 50%)`
	star.style.backgroundColor = color

	// Случайное положение квадрата
	const xPos = Math.floor(Math.random() * 600)
	const yPos = Math.floor(Math.random() * 600)
	star.style.marginLeft = `${xPos}px`
	star.style.marginTop = `${yPos}px`

	container.appendChild(star)
}
