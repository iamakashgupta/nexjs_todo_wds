"use client";

type TodoItemProps = {
  id: string;
  title: string;
  completed: boolean;
  toggleTodo: (id: string, completed: boolean) => void;
};

export default function TodoItem({
  id,
  title,
  completed,
  toggleTodo,
}: TodoItemProps) {
  return (
    <li className="flex gap-3 items-center">
      <input
        type="checkbox"
        id={id}
        defaultChecked={completed} //defaultChecked is a attribute
        onChange={(e) => toggleTodo(id, e.target.checked)}
        className="cursor-pointer peer"
      />
      <label
        htmlFor="id"
        className="peer-checked:line-through cursor-pointer peer-checked:text-slate-500"
      >
        {title}
      </label>
    </li>
  );
}
