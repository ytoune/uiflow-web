/**
 * @param {string} content image/svg+xml
 */
export const download = (content, filename = 'uiflow.svg') => {
	const link = document.createElement('a')

	link.href = URL.createObjectURL(
		new Blob([content], { type: 'image/svg+xml' }),
	)

	link.download = filename

	const dls = document.querySelector('#downloads')
	if (!dls) return
	dls.appendChild(link)

	setTimeout(() => link.click())
}
