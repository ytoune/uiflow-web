
import { buildSVG } from './build'
import { download } from './download'

import { initCode } from './initCode'

export const app = () => {

	const screen = document.getElementById('screen')
	const input = screen.querySelector('.form textarea')
	const canvas = screen.querySelector('.canvas')

	const render = connect(input, canvas)
	input.addEventListener('input', render)
	input.value = initCode
	setTimeout(render)

	const direction = document.getElementById('direction')
	direction.addEventListener('input', setClass(direction, screen, 'vertical'))

	const downloadBtn = document.getElementById('download-btn')
	downloadBtn.addEventListener('click', startDownload(input))

}

const connect = (input, canvas) => async () => {
	try {
		canvas.innerHTML = await buildSVG(input.value)
	} catch(x) { console.error(x) }
}

const setClass = (input, screen, className) => () => {
	screen.classList[input.checked ? 'add' : 'remove'](className)
}

const startDownload = input => ev => {
	buildSVG(input.value)
		.then(xml => download(xml, 'uiflow.svg'))
	ev.preventDefault()
	return false
}
