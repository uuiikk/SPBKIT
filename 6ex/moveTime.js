function changeColor() {
	const progress = document.getElementById('progress')
	const width = progress.parentElement.offsetWidth
	let widthDelta = width / 50
	let percentageOrig = 0
	let percentage = 0
	function setProgress() {
		if (percentage < 50) {
			if (percentage == 0) progress.style.backgroundColor = '#0037FF'
			if (percentage == 5) progress.style.backgroundColor = '#0E69C0'
			if (percentage == 10) progress.style.backgroundColor = '#0E69C0'
			if (percentage == 15) progress.style.backgroundColor = '#1C9B80'
			if (percentage == 20) progress.style.backgroundColor = '#2ACD40'
			if (percentage == 25) progress.style.backgroundColor = '#37FF00'
			if (percentage == 30) progress.style.backgroundColor = '#69C000'
			if (percentage == 35) progress.style.backgroundColor = '#9B8000'
			if (percentage == 40) progress.style.backgroundColor = '#CD4000'
			if (percentage == 45) progress.style.backgroundColor = '#FF0000'
			if (percentage == 50) progress.style.backgroundColor = '#FF0000'
			percentage += 1
			percentageOrig += widthDelta
			progress.style.width = percentageOrig + 'px'
		} else {
			clearInterval(intervalID)
		}
	}

	let intervalID = setInterval(setProgress, 40)
	setTimeout(() => {
		progress.style.backgroundColor = 'transparent'
		progress.style.width = 0
	}, 2500)
}
