import { FormEvent, forwardRef, memo, useState } from "react";

interface Props {
  handleAddTodo: (value: string) => void;
}

const NewTodoForm = forwardRef<HTMLFormElement, Props>(({ handleAddTodo }, ref) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!value.trim()) return;
    handleAddTodo(value);
    setValue("");
  };

  return (
    <form className="flex flex-col items-center mt-10" onSubmit={handleSubmit} ref={ref}>
      <h5 className="self-start text-lg">Add new todo</h5>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="What are you working on today..."
        className="w-full px-4 py-4 mt-2 outline outline-1 rounded-xl"
      />
    </form>
  );
});
export default memo(NewTodoForm);
