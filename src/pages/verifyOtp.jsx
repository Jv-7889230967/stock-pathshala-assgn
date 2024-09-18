import './pages.css';
import { useState } from 'react';
import OTPInput from '../components/OtpInput';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { generateOTP } from '../utils/generateOTP';
import Alert from '../components/Alert';

const VerifyOtp = () => {
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [otpError, setOtpError] = useState('');
  const [error, setError] = useState('');
  const [showAlert, setShowalert] = useState(false);
  const { number } = useParams();
  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!otp.trim()) {
      setOtpError('OTP is required');
      return;
    } else {
      setOtpError('');
    }
    try {
      setLoading(true);
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/verify-login-register`, {
        user_name: number,
        otp: otp,
      });
      localStorage.setItem('user-data',JSON.stringify(response.data.data))
      localStorage.setItem('token',response.data.token)
       navigate('/class-listings');
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const RegenerateOTP=async()=>{
    try {
      await generateOTP(number);
      setShowalert(true);
    } catch (error) {
      setError(error)
      setShowalert(true);
    }finally{
      setTimeout(()=>{
        setShowalert(false)
      },4000);
    }
  }

  return (
    <main className="otp-page-container">
      <div className="otp-page">
        <h2>OTP Verification</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <OTPInput otp={otp} setOtp={setOtp} />
          {otpError && <p className="error-message">{otpError}</p>}
          <button type="submit" className="otp-verification-button" disabled={loading}>
            {loading ? 'Verifying...' : 'Verify'}
          </button>
        </form>
        <button onClick={RegenerateOTP} className='regenerate-otp-button'>re-send otp</button>
      </div>
      {showAlert&& <Alert title={error.length>0?error:'otp Successfuly sent to your registered mobile number'} severity={error.length>0?'error':'success'}/>}
    </main>
  );
};

export default VerifyOtp;
