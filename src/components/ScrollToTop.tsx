import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use native scrollTo with smooth option only if supported
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0 });
    }
  }, [pathname]);

  return null;
}
