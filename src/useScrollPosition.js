import { useState, useEffect } from 'react';

function getScrollPosition() {
  return window.pageYOffset;
}

export default function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(getScrollPosition());

  const handleScroll = () => {
    setScrollPosition(getScrollPosition());
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
}
