import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem('authToken');
    if (!token) {
      router.push('/signin'); // Redirect to sign-in if not authenticated
    } else {
      // Decode token or fetch user data (optional)
      // You can also verify the token on the backend to validate user session
      setUser({ email: 'user@example.com' }); // Example user info
    }
  }, [router]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return <h1>Welcome, {user.email}</h1>;
};

export default Dashboard;
