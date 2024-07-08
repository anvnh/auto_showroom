import Lenis from "@studio-freight/lenis";

export function smoothScroll_lenis(){
const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf); 
      return () => {
      lenis.destroy();
    };
}