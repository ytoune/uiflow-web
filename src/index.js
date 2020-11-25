// import './index.html'
import './fix'
import 'regenerator-runtime/runtime'
import 'core-js/web'
import './style.sass'

import { app } from './app'

!(async () => {
	try {
		await app()
	} catch (x) {
		console.error(x)
	}
})()
