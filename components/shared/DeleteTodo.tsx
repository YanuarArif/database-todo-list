import { todoType } from "@/types/todoType";
import Form from "../ui/Form";
import { deleteTodo } from "@/app/actions/todoActions";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { BsFillTrashFill } from "react-icons/bs";

const DeleteTodo = ({ todo }: { todo: todoType }) => {
  return (
    <Form action={deleteTodo}>
      <Input type="hidden" name="inputId" value={todo.id} />
      <Button actionButton text={<BsFillTrashFill />} />
    </Form>
  );
};

export default DeleteTodo;
