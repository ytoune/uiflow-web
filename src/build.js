
import * as streamToPromise from 'stream-to-promise'
import * as uiflow from 'uiflow'

export const build = (filename, code, format) =>
	streamToPromise(
		uiflow
			.buildWithCode(
				filename, code, format, x => { throw x }))

export const buildSVG = async (code, filename = 'uiflow') =>
	new TextDecoder('utf-8').decode(
		await build(filename, code, 'svg'))
