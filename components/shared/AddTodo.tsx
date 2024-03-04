import { create } from "@/app/actions/todoActions";
import Button from "../ui/Button";
import Form from "../ui/Form";
import Input from "../ui/Input";

const AddTodo = () => {
  return (
    <Form action={create} className="w-1/2 m-auto">
      <div className="flex">
        <Input name="input" type="text" placeholder="Tambah Tugas..." />
        <Button type="submit" text="Tambah" />
      </div>
    </Form>
  );
};

export default AddTodo;
