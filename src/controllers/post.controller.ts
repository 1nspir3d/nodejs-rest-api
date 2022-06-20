import { createUser } from "../db";
import { TUserPayload } from "../types";
import { handleController } from "../utils/handleController";

export const postController = (payload: TUserPayload ) => {
	if (payload.age && payload.hobbies && payload.username) {
		const user = createUser(payload)

		return handleController(200, JSON.stringify(user))
	}

	return handleController(400, null, 'Invalid JSON')
}

