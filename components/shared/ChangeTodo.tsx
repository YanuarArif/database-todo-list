import { AiOutlineCheckCircle } from "react-icons/ai";
import Button from "../ui/Button";
import Form from "../ui/Form";
import Input from "../ui/Input";
import { changeStatus } from "@/app/actions/todoActions";

const ChangeTodo = ({ todo }) => {
  return (
    <Form action={changeStatus}>
      <Input name="inputId" value={todo.id} type="hidden" />

      <Button actionButton type="submit" text={<AiOutlineCheckCircle />} />
    </Form>
  );
};

export default ChangeTodo;
