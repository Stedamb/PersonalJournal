import { useEffect } from 'react';
import { gsap } from 'gsap';
import type { RefObject } from 'react';

interface AnimationOptions {
  repeat?: number;
  yoyo?: boolean;
  repeatDelay?: number;
  duration?: number;
  ease?: string;
}

const TextAnimation = (
  elementRef: RefObject<HTMLElement>, 
  options: AnimationOptions = {}
) => {
  useEffect(() => {
    if (!elementRef.current) return;

    const tl = gsap.timeline({
      repeat: options.repeat ?? -1, 
      yoyo: options.yoyo ?? true,
      repeatDelay: options.repeatDelay ?? 1,
    });

    tl.fromTo(
      elementRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: options.duration ?? 2,
        ease: options.ease ?? 'power3.out',
      }
    );

    return () => {
      tl.kill();
    };
  }, [elementRef, options]); 
};

export default TextAnimation;
