import { useEffect, useRef, useState } from 'react';
import TextAnimation from './ui/animations';

const Homepage = () => {
  // const textRef = useRef<HTMLParagraphElement>(null);
  const [currentDate, setCurrentDate] =
    useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every second

    return () => clearInterval(intervalId);
  }, []);

  const options = {

    weekday: 'long',
    month: 'long',
    day: 'numeric',
  } as const;

  // TextAnimation(textRef);

  return (
    <div className="container-xl flex flex-col md:flex-row-reverse">
      <div className="flex w-full pt-4 pb-8">
        <img className="hidden md:flex" src="/main.svg" />
        <img className="md:hidden" src="/mobile.svg" />
      </div>
      <div className="flex flex-col justify-center gap-4 w-full md:pr-12">
        <h4 className="md:hidden">{currentDate.toLocaleDateString('it-IT', options)}</h4>
        <h2 className="hidden md:flex">{currentDate.toLocaleDateString('it-IT', options)}</h2>
        <div className="relative flex w-full bg-secondary rounded-lg p-8">
          <h2 className="absolute -top-4 -left-2">“</h2>
          <p className="md:text-xl">La vita è come un’eco: se non ti piace quello che ti rimanda, devi cambiare il messaggio che invii.</p>
          <h2 className="absolute -bottom-4 -right-2">„</h2>
        </div>
        <div className="flex gap-4 w-full rounded-lg">
          <div className="flex flex-col items-center justify-end w-full bg-secondary rounded-lg p-8">
            <img className="-mt-12 mb-4" src="/book.svg" height="400" />
            <p className="md:text-xl">Esplora</p>
          </div>
          <div className="relative flex flex-col items-center justify-end w-full bg-secondary rounded-lg p-8">
            <img className="-mt-12 mb-4" src="/pc.svg" height="400" />
            <p className="md:text-xl">Video</p>
            <a className="Overlink" href="https://videomaker-psi.vercel.app/"></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
