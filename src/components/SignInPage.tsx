import React, { useState } from 'react';
import { authService } from '../services/authService';

const SignInPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!email || !password) {
        throw new Error('Please provide both email and password.');
      }
      
      await authService.login(email, password);
      // Redirect to Dashboard or perform other actions upon successful login
    } catch (error) {
      //setError(error.message)
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required  // Ensure email input is required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required  // Ensure password input is required
        />
        <button type="submit">Sign In</button>
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message if exists */}
      </form>
    </div>
  );
};

export default SignInPage;
