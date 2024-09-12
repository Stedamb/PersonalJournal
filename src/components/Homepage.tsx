import { useRef } from 'react';
import TextAnimation from './ui/animations';

const Homepage = () => {
  const textRef = useRef<HTMLParagraphElement>(null);

  TextAnimation(textRef);

  return (
    <div className="container-xl">
      <div className="container-sm">
        <p ref={textRef} className="text-center text-balance pt-8 pb-8">
          Astro + React + Tailwind + shadcn + gsap
        </p>
      </div>
    </div>
  );
};

export default Homepage;
