function createCircle() {
	const container = document.getElementById('container')
	const circle = document.createElement('div')
	circle.className = 'circle'

	// Случайный размер квадрата
	const size = Math.ceil(Math.random() * 100)
	circle.style.width = `${size}px`
	circle.style.height = `${size}px`

	// Случайный цвет квадрата
	const color = `hsl(${Math.floor(Math.random() * 360)}, 50%, 50%)`
	circle.style.backgroundColor = color

	// Случайное положение квадрата
	const xPos = Math.floor(Math.random() * 600)
	const yPos = Math.floor(Math.random() * 600)
	circle.style.marginLeft = `${xPos}px`
	circle.style.marginTop = `${yPos}px`

	container.appendChild(circle)
}
