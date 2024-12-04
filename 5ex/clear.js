function clearContainer() {
	const parentElement = document.getElementById('container')
	while (parentElement.firstChild) {
		parentElement.removeChild(parentElement.firstChild)
	}
}
