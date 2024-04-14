import React from 'react';
import Form from './common/Form';

const SignUpPage: React.FC = () => {
  const handleSubmit = (formData: any) => {
    // Handle form submission, e.g., call registration service
    console.log('Sign up form submitted:', formData);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpPage;