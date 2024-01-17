import type { HeadFC, PageProps } from "gatsby";
import { nanoid } from "nanoid";
import { FC, useCallback, useRef, useState } from "react";
import NewTodoForm from "../components/NewTodoForm";
import TodoList from "../components/TodoList";
import { Todo } from "../types";

const IndexPage: FC<PageProps> = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const newTodoFormRef = useRef<HTMLFormElement>(null);

  const addTodo = useCallback((todoText: string) => {

    setTodos((prev) => [...prev, { completed: false, id: nanoid(), task: todoText }]);
  }, []);

  const toggleTodo = (todoId: string) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === todoId ? { ...todo, completed: !todo.completed } : todo))
    );
  };

  const buttonSubmit = () => {
    newTodoFormRef.current?.dispatchEvent(new Event("submit", { bubbles: true }));
  };

  return (
    <main className="flex flex-col items-center text-slate-800">
      <h1 className="mt-8 text-3xl font-medium text-center">CheckMate Todo</h1>
      <p className="mt-1 text-lg text-center">
        Your Move to Master Your Tasks - Plan. Act. Conquer!
      </p>
      <div className="w-full max-w-3xl">
        <NewTodoForm handleAddTodo={addTodo} ref={newTodoFormRef} />
        <div className="flex justify-center gap-4">
          <button
            className="mt-4 bg-purple-800 px-12 py-3 font-medium text-white rounded-md active:scale-[1.01]"
            onClick={buttonSubmit}
          >
            Submit
          </button>
          <button
            v-if="todos.length === 0"
            className="mt-4 border border-purple-800 px-4 py-3 font-medium text-purple-800 rounded-md active:scale-[1.01]"
          >
            Fetch sample todos
          </button>
        </div>
        {todos.length > 0 && (
          <div className="mt-8">
            <h4 className="text-lg">Your todos</h4>
            <TodoList todos={todos} toggleTodo={toggleTodo} />
          </div>
        )}
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Check mate</title>;
