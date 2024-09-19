import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const useAuthRedirect = () => {
    const location = useLocation();
    const currentPath = location.pathname;
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if((!token || token.length===0) && currentPath==='/class-listings')
    {
        navigate('/');
    }
    if (token) {
      // Redirect to /class-listings if token is present
      navigate('/class-listings');
    }
  }, [navigate]);
};

export default useAuthRedirect;
