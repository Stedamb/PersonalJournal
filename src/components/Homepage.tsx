import { useEffect, useRef, useState } from 'react';
import RevealAnimation from './ui/animations/animations';
import { dateOptions } from '@/utils/dateUtils';

const Homepage = () => {
  const [currentDate, setCurrentDate] =
    useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  RevealAnimation('RevealAnimation');
  RevealAnimation('RevealAnimationDelay', { delay: 1 });

  return (
    <div className="container-xl flex flex-col md:flex-row-reverse">
      <div className="flex w-full pt-4 pb-8">
        <img className="RevealAnimationDelay hidden md:flex" src="/assets/main.svg" />
        <img className="RevealAnimation md:hidden mx-auto" src="/assets/mobile.svg" />
      </div>
      <div className="flex flex-col justify-center gap-4 w-full md:pr-12">
        <h4 className="RevealAnimation md:!text-5xl md:pb-4">{currentDate.toLocaleDateString('it-IT', dateOptions)}</h4>
        <div className="relative flex w-full bg-secondary rounded-lg p-8">
          <h2 className="RevealAnimation absolute -top-4 -left-2">“</h2>
          <p className="RevealAnimation md:text-xl">La vita è come un’eco: se non ti piace quello che ti rimanda, devi cambiare il messaggio che invii.</p>
          <h2 className="RevealAnimation absolute -bottom-4 -right-2">„</h2>
        </div>
        <div className="flex gap-4 w-full rounded-lg">
          <div className="relative flex flex-col items-center justify-end w-full bg-secondary rounded-lg p-8">
            <img className="RevealAnimation -mt-12 mb-4" src="/assets/book.svg" height="400" />
            <p className="RevealAnimation md:text-xl">Esplora</p>
            <a className="Overlink" href="/blog"></a>
          </div>
          <div className="relative flex flex-col items-center justify-end w-full bg-secondary rounded-lg p-8">
            <img className="RevealAnimation -mt-12 mb-4" src="/assets/pc.svg" height="400" />
            <p className="RevealAnimation md:text-xl">Video</p>
            <a className="Overlink" href="https://videomaker-psi.vercel.app/"></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
