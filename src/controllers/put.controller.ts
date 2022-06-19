import { getUser, updateUser } from "../db";
import { IResponse, TUserPayload } from "../types";
import { handleController } from "../utils/handleController";
import { validateUUID } from "../utils/validateUUID";

export const putController = (url: string, payload: TUserPayload): IResponse => {
	const parsedUrl = [...url.matchAll(/^\/api\/users\/{0,1}(?<uuid>[^\/]*)$/gi)]

	if (parsedUrl.length === 0) {
		return handleController(404, null, 'Invalid url')
	}

	const uuid = parsedUrl[0].groups!.uuid

	const isUuidValid = validateUUID(uuid)

	if (!isUuidValid) {
		return handleController(400, null, 'Invalid uuid')
	}

	const user = getUser(uuid)

	if (!user) {
		return handleController(404, null, "User doesn't exist")
	}
	
	const updatedUser = updateUser(uuid, payload)

	return handleController(200, JSON.stringify(updatedUser))
}
