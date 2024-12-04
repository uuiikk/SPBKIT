function getInfo() {
	mes = ''
	for (i = 0; i < document.all.length; i++) {
		mes =
			mes +
			i +
			' tagName= ' +
			document.all[i].tagName +
			' id=' +
			document.all[i].id +
			'\n'
	}
	alert(mes)
}
