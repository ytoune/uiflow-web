// @ts-nocheck

import * as streamToPromise from 'stream-to-promise'
import * as uiflow from 'uiflow'

/**
 *
 * @param {string} filename
 * @param {string} code
 * @param {string} format
 * @return {Promise<Buffer>}
 */
export const build = (filename, code, format) =>
	streamToPromise(
		uiflow.buildWithCode(filename, code, format, x => {
			throw x
		}),
	)

/**
 * @param {string} code
 */
export const buildSVG = async (code, filename = 'uiflow') =>
	new TextDecoder('utf-8').decode(await build(filename, code, 'svg'))
