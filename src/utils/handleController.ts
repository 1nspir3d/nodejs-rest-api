import { IResponse } from "../types"

export const handleController = (
	status: number,
	payload: string | null,
	message?: string
): IResponse => {
	return {
		status,
		payload,
		message
	}
}