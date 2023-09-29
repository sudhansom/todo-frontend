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
