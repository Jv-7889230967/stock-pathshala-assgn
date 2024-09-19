import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import VerifyOtp from './pages/verifyOtp';
import Home from './pages/Home';
import useAuthRedirect from './hooks/useAuthentication';

function App() {
  useAuthRedirect();
  return (
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/otp-verification/:number' element={<VerifyOtp/>}/>
    <Route path='/class-listings' element={<Home/>}/>
   </Routes>
  );
}

export default App;
