import React, { FormEvent, ReactNode } from 'react';

interface FormProps {
  onSubmit: (formData: FormDataValues) => void;
  children: ReactNode;
}

interface FormDataValues {
  [key: string]: string | File | FileList | null;
}

const Form: React.FC<FormProps> = ({ onSubmit, children }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: FormDataValues = {};

    formData.forEach((value, key) => {
      data[key] = value as string | File | FileList | null;
    });

    onSubmit(data);
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
};

export default Form;
