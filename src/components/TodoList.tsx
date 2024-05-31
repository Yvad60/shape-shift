import { FC, ReactNode } from "react";
import { Todo } from "../types";

interface Props {
  todos: Todo[];
  toggleTodo: (todoId: string) => void;
}

const TodoList: FC<Props> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.reduce((acc: ReactNode[], curr) => {
        acc.push(
          <li className="flex py-4 border-b gap-8 items-enter" key={curr.id}>
            <input
              type="checkbox"
              className="flex w-5"
              checked={curr.completed}
              onChange={() => toggleTodo(curr.id)}
            />
            <span className="self-center">{curr.task}</span>
            <button className="p-4 py-1 ml-auto bg-red-400 text-slate-100 rounded-md">
              Delete
            </button>
          </li>
        );
        return acc;
      }, [])}
    </ul>
  );
};
export default TodoList;
