function sumOfOddNumbers() {
	var sum = 0
	var N = parseInt(document.getElementById('inputN').value)
	var M = parseInt(document.getElementById('inputM').value)
	for (var i = N; i <= M; i++) {
		if (i % 2 !== 0) {
			sum = sum + i
		}
	}
	document.getElementById('result').innerHTML = sum
}
