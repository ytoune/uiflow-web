
import './index.html'
import './style.sass'


const main = () => {

	const screen = document.getElementById('screen')

	const form = document.createElement('div')
	form.id = 'form'
	const canvas = document.createElement('div')
	canvas.id = 'canvas'

	const input = document.createElement('textarea')
	input.addEventListener()
	form.appendChild(input)

	screen.appendChild(form)
	screen.appendChild(canvas)

}

!(async () => {
	try {
		await main()
	} catch(x) {
		console.error(x)
	}
})()
