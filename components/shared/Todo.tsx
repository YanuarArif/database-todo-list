import ChangeTodo from "./ChangeTodo";

const Todo = ({ todo }) => {
  return (
    <div className="bg-white w-full flex items-center justify-between py-3 px-20 rounded-2xl">
      <ChangeTodo todo={todo} />
      <span className="">{todo.title}</span>
    </div>
  );
};

export default Todo;
