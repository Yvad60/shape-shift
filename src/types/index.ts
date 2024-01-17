export interface Todo {
  id: string
  task: string
  completed: boolean
}

export interface TodoDTO {
  id: string
  todo: string
  completed: boolean
  userId: number
}
