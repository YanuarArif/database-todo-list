"use client";

import { ReactNode, useRef } from "react";

interface formProps {
  children: ReactNode;
  action: (formData: FormData) => Promise<void | boolean>;
  className?: string;
  onSubmit?: () => void;
}

function Form({ children, action, className, onSubmit }: formProps) {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      className={className}
      onSubmit={onSubmit}
      ref={ref}
      action={async (FormData) => {
        await action(FormData);
        ref.current?.reset();
      }}>
      {children}
    </form>
  );
}

export default Form;
