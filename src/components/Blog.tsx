import { useEffect, useRef, useState } from 'react';
import RevealAnimation from './ui/animations/animations';

const Blog = () => {
  const [currentDate, setCurrentDate] =
    useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  } as const;

  RevealAnimation('RevealAnimation');
  RevealAnimation('RevealAnimationDelay', { delay: 1 });

  return (
    <div className="container-xl flex flex-col md:flex-row-reverse">
      
    </div>
  );
};

export default Blog;
