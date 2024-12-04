window.onload = function () {
	const rainbowColors = [
		'rgb(255, 68, 68',
		'rgb(255, 193, 7',
		'rgb(255, 153, 0',
		'rgb(123, 255, 123',
		'rgb(0, 153, 255',
		'rgb(47, 43, 242',
		'rgb(199, 125, 255',
	]
	const alphaValues = [0.2, 0.4, 0.6, 0.8]
	const ctx = document.getElementById('rainbowCanvas').getContext('2d')
	for (let i = 0; i < 7; i++) {
		for (let j = 0; j < 4; j++) {
			ctx.fillStyle = `${rainbowColors[i]} , ${alphaValues[j]}`
			ctx.fillRect(i * 100 + j * 25, 0, 25, 50)
		}
	}
}
