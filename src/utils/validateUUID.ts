import { validate } from "uuid"

export const validateUUID = (uuid: string): boolean => {
	return validate(uuid)
}