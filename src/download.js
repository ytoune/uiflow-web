
export const download = (content, filename = 'uiflow.svg') => {

	const link = document.createElement('a')

	link.href = URL.createObjectURL(
		new Blob([content], {type: 'image/svg+xml'}))

	link.download = filename

	document.querySelector('#downloads').appendChild(link)

	setTimeout(() => link.click())

}
