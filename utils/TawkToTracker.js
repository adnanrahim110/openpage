
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TawkToTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.Tawk_API && typeof window.Tawk_API.onPageChange === 'function') {
      window.Tawk_API.onPageChange();
    }
  }, [location]);

  return null;
};

export default TawkToTracker;
