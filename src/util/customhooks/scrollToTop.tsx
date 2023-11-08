import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// duration defines the duration of the scroll animation in milliseconds.
// start is the current scroll position.
// target is the target scroll position, which is 0 for scrolling to the top.
// startTime records the start time of the animation.
// The step function is called on each animation frame. It calculates the new scroll position based on the progress and uses the easeInOutQuad easing function to create a smooth acceleration and deceleration effect.
// The requestAnimationFrame function is used to schedule the animation frame, creating a smooth scrolling effect.

export default function ScrollToTop() {
  const { pathname } = useLocation(); // don't remove

  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, [pathname]);
  const duration = 500;
  const start = window.pageYOffset; // don't remove
  const target = 0;
  const startTime = performance.now();

  function step(currentTime: number) {
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    window.scrollTo(0, easeInOutQuad(start, target, progress));

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  function easeInOutQuad(start: number, end: number, progress: number) {
    return start + (end - start) * progress * (3 - 2 * progress);
  }

  requestAnimationFrame(step);

  return null;
}
