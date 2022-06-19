import { getUser, getUsers } from "../db";
import { IResponse } from "../types";
import { validateUUID } from "../utils/validateUUID";
import { handleController } from "../utils/handleController";

export const getController = (url: string): IResponse  => {
	const parsedUrl = [...url.matchAll(/^\/api\/users\/{0,1}(?<uuid>[^\/]*)$/gi)]
	
	if (parsedUrl.length === 0) {
		return handleController(404, null, 'Invalid url')
	}

	const uuid = parsedUrl[0].groups!.uuid

	if (uuid === '') {
		return handleController(200, JSON.stringify(getUsers()))
	}

	const isUuidValid = validateUUID(uuid)

	if (!isUuidValid) {
		return handleController(400, null, 'Invalid uuid')
	}

	const user = getUser(uuid)

	if (!user) {
		return handleController(404, null, "User doesn't exist")
	}
	return handleController(200, JSON.stringify(user))
}

