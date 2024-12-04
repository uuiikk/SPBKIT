function transparency() {
	const imgElement = document.getElementById('car1')

	//прозрачность
	let originalOpacity = 1
	imgElement.style.opacity = originalOpacity

	function animate() {
		if (originalOpacity > 0.01) {
			imgElement.style.opacity -= 0.02
			originalOpacity -= 0.02

		} else {
			clearInterval(intervalID)
		}
	}
	setTimeout(animate, 0)
	const intervalID = setInterval(animate, 20)
	setTimeout(() => {
		imgElement.style.opacity = 1
	}, 1500)
}
