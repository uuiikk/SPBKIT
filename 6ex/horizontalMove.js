function horizontalMove() {
	const imgElement = document.getElementById('car2')
	//позиция
	let originalPosition = 0
	let leftPosition = 0
	//расстояние до конца контейнера
	const rightEdgeOfContainer =
		imgElement.parentElement.offsetWidth - imgElement.offsetWidth
	//величина сдвига вправо
	let leftPositionDelta = rightEdgeOfContainer / 50
	let temp = 0
	function animate() {
		if (temp < 50) {
			temp += 1
			leftPosition += leftPositionDelta
			imgElement.style.left = leftPosition + 'px'
		} else {
			clearInterval(intervalID)
		}
	}
	setTimeout(animate, 0)
	const intervalID = setInterval(animate, 20)
	setTimeout(() => {
		imgElement.style.left = originalPosition + 'px'
	}, 1500)
}
