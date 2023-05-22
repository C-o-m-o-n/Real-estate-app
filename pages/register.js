// pages/register.js

import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Register() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        router.push('/login'); // Redirect to the login page after successful registration
      } else {
        // Handle registration error here
        console.error('Registration failed');
      }
    } catch (error) {
      console.error(error);
      // Handle registration error here
    }
  };

  return (
    <div className="container">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            className="form-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            className="form-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="btn" type="submit">Register</button>
      </form>

      <style jsx>{`
        .container {
          max-width: 400px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 4px;
          background-color: #f9f9f9;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .btn {
          display: block;
          width: 100%;
          padding: 10px;
          border: none;
          border-radius: 4px;
          background-color: #4caf50;
          color: #fff;
          cursor: pointer;
        }

        .btn:hover {
          background-color: #45a049;
        }
      `}</style>
    </div>
  );
}
