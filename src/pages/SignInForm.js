import { useState } from 'react';
import { useRouter } from 'next/router'; // For redirection after login

const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const router = useRouter(); // Hook for page redirection
  
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload
    
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      console.log('Login successful:', data);

      // Assuming the backend sends a JWT or session cookie, store it here
      localStorage.setItem('authToken', data.token); // Store token in localStorage (or cookies)

      // Redirect to the home page or dashboard after successful login
      router.push('/dashboard'); // Change '/dashboard' to the appropriate page you want

    } catch (error) {
      console.error('Error during login:', error);
      alert('Login failed. Please try again.');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value, // Update form data as user types
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignInForm;
