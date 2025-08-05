
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Scroll = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top of the page
  }, [pathname]);

  return null;
};

export default Scroll;
