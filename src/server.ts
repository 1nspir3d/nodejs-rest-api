import { createServer } from "http";
import { IResponse, TUserPayload } from "./types";
import * as controllers from './controllers'

export const server = createServer((req, res) => {
	let rawPayload = ''
	let payload: TUserPayload

	const sendResponse = (response: IResponse) => {
		res.statusCode = response.status
		res.end(JSON.stringify(response))
		return
	}
	res.setHeader("Content-Type", "application/json")

	req.on('data', (chunk) => {
		rawPayload += chunk
	})
	req.on('end', () => {
		switch(req.method) {
			case 'GET':
				const getRes = controllers.getController(req.url!)
				sendResponse(getRes)
				break;
			case 'POST':
				try {
					payload = JSON.parse(rawPayload)
				} catch (error) {
					const response: IResponse = {
						status: 400,
						payload: null,
						message: 'Invalid JSON'
					}
					sendResponse(response)
				}
				const postRes = controllers.postController(payload)
				sendResponse(postRes)
				break;
			case 'PUT':
				try {
					payload = JSON.parse(rawPayload)
				} catch (error) {
					const response: IResponse = {
						status: 400,
						payload: null,
						message: 'Invalid JSON'
					}
					sendResponse(response)
				}
				const putRes = controllers.putController(req.url!, payload)
				sendResponse(putRes)
				break;
			case 'DELETE':
				const deleteRes = controllers.deleteController(req.url!)
				sendResponse(deleteRes)
				break;
			default:
				sendResponse({
					status: 404,
					payload: null,
					message: 'Unknown method'
				})
				break;
		}
	})
})


