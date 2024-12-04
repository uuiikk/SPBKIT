function drawBalls() {
	const quantity = document.getElementById('quantity').value

	const canvas = document.querySelector('canvas')
	const ctx = canvas.getContext('2d')

	const width = (canvas.width = 1000)
	const height = (canvas.height = 500)

	function Ball(x, y, velx, vely, color, size) {
		this.x = x
		this.y = y
		this.velx = velx
		this.vely = vely
		this.color = color
		this.size = size
	}

	Ball.prototype.draw = function () {
		ctx.beginPath()
		ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
		ctx.fillStyle = this.color
		ctx.fill()
	}

	let balls = []
	for (let i = 0; i < quantity; i++) {
		const size = parseInt(document.getElementById('size').value)
		let ball = new Ball(
			Math.random() * (width - size * 2) + size,
			Math.random() * (height - size * 2) + size,
			Math.random() * 2,
			Math.random() * 2,
			`rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
				Math.random() * 256
			)}, ${Math.floor(Math.random() * 256)})`,
			size
		)
		balls.push(ball)
	}

	Ball.prototype.update = function () {
		if (this.x + this.size >= width || this.x - this.size <= 0) {
			this.velx = -this.velx
		}

		if (this.y + this.size >= height || this.y - this.size <= 0) {
			this.vely = -this.velx
		}

		this.x += this.velx
		this.y += this.vely
	}

	Ball.prototype.collisionDetect = function () {
		for (let j = 0; j < balls.length; j++) {
			if (!(this === balls[j])) {
				const dx = this.x - balls[j].x
				const dy = this.y - balls[j].y
				const distance = Math.sqrt(dx * dx + dy * dy)

				if (distance < this.size + balls[j].size) {
					this.color = balls[j].color =
						'rgb(' +
						Math.floor(Math.random() * 255) +
						',' +
						Math.floor(Math.random() * 255) +
						',' +
						Math.floor(Math.random() * 255) +
						')'
				}
			}
		}
	}
	function animate() {
		ctx.clearRect(0, 0, width, height)

		for (let i = 0; i < balls.length; i++) {
			balls[i].draw()
			balls[i].update()
			balls[i].collisionDetect()
		}
		requestAnimationFrame(animate)
	}
	animate()
}
