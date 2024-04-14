import React from 'react';

interface FormProps {
  onSubmit: (formData: any) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit, children }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data: any = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    onSubmit(data);
  };

  return <form onSubmit={handleSubmit}>{children}</form>;
};

export default Form;