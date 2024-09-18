import { TextField } from '@mui/material'
import './pages.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Loader } from '../components/Loader';
import { generateOTP } from '../utils/generateOTP';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validatePhoneNumber = (phone) => {
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validatePhoneNumber(username)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    try {
      setLoading(true);
      await generateOTP(username);
      navigate(`/otp-verification/${username}`)
    } catch (error) {
      console.error("Login failed:", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className='login-page-container'>
      <div className='login-page'>
        <h2>Login to your Account</h2>

        <form className='login-form' onSubmit={handleSubmit}>
          <TextField
            fullWidth
            id="standard-basic"
            label="Phone Number"
            variant="standard"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={!!error}
            helperText={error}
          />
          <button type='submit' className='login-button' disabled={loading}>
            {loading ? 'loggin..' : "Login"}
          </button>
        </form>
      </div>
    </main>
  );
}

export default Login;
