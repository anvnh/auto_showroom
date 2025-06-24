// AOS wrapper to handle import issues
interface AOSOptions {
  duration?: number;
  easing?: string;
  once?: boolean;
  mirror?: boolean;
  anchorPlacement?: string;
}

interface AOSInstance {
  init: (options?: AOSOptions) => void;
  refresh: () => void;
}

declare global {
  interface Window {
    AOS: AOSInstance;
  }
}

let AOS: AOSInstance | null = null;

if (typeof window !== 'undefined') {
  // Dynamic import for AOS to avoid SSR issues
  import('aos').then((aos) => {
    AOS = aos.default as AOSInstance;
    window.AOS = AOS;
  });
}

export const initAOS = (options?: AOSOptions) => {
  if (AOS && typeof AOS.init === 'function') {
    AOS.init(options);
  }
};

export const refreshAOS = () => {
  if (AOS && typeof AOS.refresh === 'function') {
    AOS.refresh();
  }
};

export default {
  init: initAOS,
  refresh: refreshAOS
};
