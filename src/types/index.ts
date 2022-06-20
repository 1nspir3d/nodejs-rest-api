export interface IUser {
	id: string
	username: string
	age: number
	hobbies: string[]
}

export interface IDB {
	[key: string]: IUser
}

export interface IResponse {
  status: number;
  payload: string | null;
  message?: string;
}


export type TUserPayload = Omit<IUser, 'id'>