function horizontalVerticalMove() {
	const imgElement = document.getElementById('car3')
	//позиция
	let originalPosition = 0
	let leftPosition = 0
	//расстояние до конца контейнера
	const rightEdgeOfContainer =
		imgElement.parentElement.offsetWidth - imgElement.offsetWidth
	//величина сдвига вправо
	let leftPositionDelta = rightEdgeOfContainer / 500
	let temp = 0

	const amplitude = 50 // амплитуда синусоиды
	const period = 5000 // период синусоиды в миллисекундах

	function calculatePosition() {
		if (temp < 500) {
			temp += 1
			leftPosition += leftPositionDelta
			imgElement.style.left = leftPosition + 'px'
		}
		// я без понятия как эта ваша высшая математика работает
		const t = Date.now() % period
		const phase = (t / period) * 2 * Math.PI
		const y = amplitude * Math.sin(phase)
		imgElement.style.top = `${y}px`
		//console.log(t, phase, y)
	}
	setTimeout(calculatePosition, 0)
	const intervalID = setInterval(calculatePosition, 20)
	setTimeout(() => {
		imgElement.style.left = originalPosition + 'px'
		imgElement.style.top = originalPosition + 'px'
		clearInterval(intervalID)
	}, 10000)
}
