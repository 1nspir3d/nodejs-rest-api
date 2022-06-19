import {v4} from 'uuid'
import {
	IUser,
	IDB,
	TUserPayload
} from '../types'

const db: IDB = {
}

export const getUsers = (): IDB => {
	return db
}

export const getUser = (uuid: string): IUser => {
	return db[uuid]
}

export const createUser = (payload: TUserPayload ): IUser => {
	const uuid = v4()
	const newUser = {...payload, id: uuid}

	db[uuid] = newUser

	return newUser
}

export const updateUser = (uuid: string, payload: Partial<TUserPayload>): IUser => {
	const updatedUser = {
		...db[uuid],
		...payload
	}

	db[uuid] = updatedUser

	return updatedUser
}

export const deleteUser = (uuid: string) => {
	delete db[uuid]
}
