export interface ITodo {
  _id?: string,
  title: string,
  description: string,
  completed: boolean,
  user?: string,
}

export interface IResponse {
  success: boolean,
  message: string
}

export interface IDataResponse {
  success: boolean,
  todos: ITodo[]
}

export interface IUser {
  email: string,
  password: string,
}

export interface IResponseLogin {
  success: boolean,
  message: string,
  token: string,
  userId: string,
  userName: string,
}
