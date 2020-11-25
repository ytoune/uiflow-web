import { buildSVG } from './build'
import { download } from './download'

import { initCode } from './initCode'

export const app = () => {
	const screen = document.getElementById('screen')
	if (!screen) return
	const input = screen.querySelector('.form textarea')
	const canvas = screen.querySelector('.canvas')
	if (!(input && input instanceof HTMLTextAreaElement)) return
	if (!(canvas && canvas instanceof HTMLElement)) return

	const render = connect(input, canvas)
	input.addEventListener('input', render)
	input.value = initCode
	setTimeout(render)

	const direction = document.getElementById('direction')
	if (!(direction && direction instanceof HTMLInputElement)) return
	direction.addEventListener('input', setClass(direction, screen, 'vertical'))

	const downloadBtn = document.getElementById('download-btn')
	if (!downloadBtn) return
	downloadBtn.addEventListener('click', startDownload(input))
}

/**
 * @param {HTMLTextAreaElement} input
 * @param {HTMLElement} canvas
 */
const connect = (input, canvas) => async () => {
	try {
		canvas.innerHTML = await buildSVG(input.value)
	} catch (x) {
		console.error(x)
	}
}

/**
 * @param {HTMLInputElement} input
 * @param {HTMLElement} screen
 * @param {string} className
 */
const setClass = (input, screen, className) => () => {
	screen.classList[input.checked ? 'add' : 'remove'](className)
}

/**
 * @param {HTMLTextAreaElement} input
 * @return {(ev: MouseEvent) => false}
 */
const startDownload = input => ev => {
	buildSVG(input.value).then(xml => download(xml, 'uiflow.svg'))
	ev.preventDefault()
	return false
}
