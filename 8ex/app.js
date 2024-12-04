document.addEventListener('DOMContentLoaded', () => {
	const gameContainer = document.getElementById('game-container')
	const player = document.getElementById('player')
	const scoreDisplay = document.getElementById('score')
	let score = 0

	// Размеры игрового контейнера
	const containerWidth = gameContainer.clientWidth
	const containerHeight = gameContainer.clientHeight

	// Начальная позиция игрока
	let playerPosition = {
		x: 0,
		y: 0,
	}

	// Генерация объектов
	generateObjects(10)

	document.addEventListener('keydown', keyDownHandler)
	document.addEventListener('keyup', keyUpHandler)

	const keysPressed = {}

	function keyDownHandler(event) {
		keysPressed[event.code] = true
		if (keysPressed['ArrowLeft']) {
			movePlayer(-20, 0)
			player.style.transform = ' scale(1, 1)'
		}
		if (keysPressed['ArrowUp']) {
			movePlayer(0, -20)
		}
		if (keysPressed['ArrowRight']) {
			movePlayer(20, 0)
			player.style.transform = ' scale(-1, 1)'
		}
		if (keysPressed['ArrowDown']) {
			movePlayer(0, 20)
		}
		if (keysPressed['ArrowLeft'] && keysPressed['ArrowUp']) {
			movePlayer(-5, -5)
		}
		if (keysPressed['ArrowLeft'] && keysPressed['ArrowDown']) {
			movePlayer(-5, 5)
		}
		if (keysPressed['ArrowRight'] && keysPressed['ArrowUp']) {
			movePlayer(5, -5)
		}
		if (keysPressed['ArrowRight'] && keysPressed['ArrowDown']) {
			movePlayer(5, 5)
		}
	}

	function keyUpHandler(event) {
		delete keysPressed[event.code]
	}

	function movePlayer(dx, dy) {
		playerPosition.x += dx
		playerPosition.y += dy

		// Ограничиваем перемещение игрока пределами контейнера
		if (playerPosition.x < 0) playerPosition.x = 0
		if (playerPosition.x > containerWidth - player.offsetWidth)
			playerPosition.x = containerWidth - player.offsetWidth
		if (playerPosition.y < 0) playerPosition.y = 0
		if (playerPosition.y > containerHeight - player.offsetHeight)
			playerPosition.y = containerHeight - player.offsetHeight

		player.style.left = `${playerPosition.x}px`
		player.style.top = `${playerPosition.y}px`

		checkCollisions()
	}

	function generateObjects(count) {
		for (let i = 0; i < count; i++) {
			const object = document.createElement('div')
			object.className = 'object'
			object.style.left = `${Math.random() * (containerWidth - 140)}px`
			object.style.top = `${Math.random() * (containerHeight - 100)}px`
			gameContainer.appendChild(object)
		}
	}

	function checkCollisions() {
		const objects = document.querySelectorAll('.object')
		objects.forEach(object => {
			const rect1 = player.getBoundingClientRect()
			const rect2 = object.getBoundingClientRect()

			if (
				rect1.right >= rect2.left &&
				rect1.left <= rect2.right &&
				rect1.bottom >= rect2.top &&
				rect1.top <= rect2.bottom
			) {
				object.remove()
				score++
				scoreDisplay.textContent = score

				if (score === 100) {
					alert('Поздравляю Вы успешно добрались до сервиса!!!')
					location.reload()
				} else {
					const newObject = document.createElement('div')
					newObject.className = 'object'
					newObject.style.left = `${Math.random() * (containerWidth - 120)}px`
					newObject.style.top = `${Math.random() * (containerHeight - 100)}px`
					gameContainer.appendChild(newObject)
				}
			}
		})
	}
})
