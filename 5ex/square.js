function createSquare() {
	const container = document.getElementById('container')
	const square = document.createElement('div')
	square.className = 'square'

	// Случайный размер квадрата
	const size = Math.ceil(Math.random() * 100)
	square.style.width = `${size}px`
	square.style.height = `${size}px`

	// Случайный цвет квадрата
	const color = `hsl(${Math.floor(Math.random() * 360)}, 50%, 50%)`
	square.style.backgroundColor = color

	// Случайное положение квадрата
	const xPos = Math.floor(Math.random() * 600)
	const yPos = Math.floor(Math.random() * 600)
	square.style.marginLeft = `${xPos}px`
	square.style.marginTop = `${yPos}px`

	container.appendChild(square)
}
