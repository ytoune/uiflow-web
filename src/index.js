
import './index.html'
import './style.sass'

import { app } from './app'

!(async () => {
	try {
		await app()
	} catch(x) {
		console.error(x)
	}
})()
