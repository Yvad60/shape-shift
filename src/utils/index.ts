import type { Todo, TodoDTO } from "@/types"
import { nanoid } from "nanoid"

const TODO_API_URL = 'https://dummyjson.com/todos?limit=3'

export const fetchDefaultTodos = async () : Promise<Todo[]> =>{
  const response = await fetch(TODO_API_URL)
  const apiTodos: TodoDTO[] = (await response.json()).todos
  return apiTodos.map(todo => ({task: todo.todo, completed: false, id: nanoid()}))
}

export const loadTodosFromLocalStorage  = () : Todo[] =>{
  const todoStr = localStorage.getItem("todos")
  if (todoStr == null) return []
  return JSON.parse(todoStr) as Todo[]
}

export const saveTodosToLocalStorage  = (todos: Todo[]) =>{
  localStorage.setItem("todos", JSON.stringify(todos))
}
