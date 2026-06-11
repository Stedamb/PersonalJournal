import { gsap } from 'gsap';

interface AnimationOptions {
  repeat?: number;
  yoyo?: boolean;
  repeatDelay?: number;
  duration?: number;
  ease?: string;
  delay?: number;
  stagger?: number;
}

function initRevealAnimations() {
  const defaults: AnimationOptions = { duration: 1, ease: 'power3.out', stagger: 0.1 };

  const groups = [
    { selector: '.RevealAnimation', opts: defaults },
    { selector: '.RevealAnimationDelay', opts: { ...defaults, delay: 1 } },
  ];

  for (const { selector, opts } of groups) {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) continue;

    gsap.fromTo(
      elements,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: opts.duration,
        ease: opts.ease,
        delay: opts.delay ?? 0,
        stagger: opts.stagger,
      }
    );
  }
}

// Re-run on every page navigation (including initial load)
document.addEventListener('astro:page-load', initRevealAnimations);
