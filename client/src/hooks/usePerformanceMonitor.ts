import { useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  renderTime: number;
  componentName: string;
  timestamp: number;
}

export const usePerformanceMonitor = (componentName: string) => {
  const startTime = performance.now();

  useEffect(() => {
    const endTime = performance.now();
    const renderTime = endTime - startTime;

    // Log slow renders (> 16ms for 60fps)
    if (renderTime > 16) {
      console.warn(`Slow render detected in ${componentName}: ${renderTime.toFixed(2)}ms`);
    }

    // Store metrics for analytics
    const metrics: PerformanceMetrics = {
      renderTime,
      componentName,
      timestamp: Date.now()
    };

    // Send to analytics service if needed
    if (process.env.NODE_ENV === 'production') {
      // Analytics service call here
    }
  });

  const measureFunction = useCallback((fn: Function, fnName: string) => {
    return (...args: any[]) => {
      const start = performance.now();
      const result = fn(...args);
      const end = performance.now();
      
      console.log(`${fnName} took ${(end - start).toFixed(2)}ms`);
      return result;
    };
  }, []);

  const measureAsyncFunction = useCallback((fn: Function, fnName: string) => {
    return async (...args: any[]) => {
      const start = performance.now();
      const result = await fn(...args);
      const end = performance.now();
      
      console.log(`${fnName} took ${(end - start).toFixed(2)}ms`);
      return result;
    };
  }, []);

  return {
    measureFunction,
    measureAsyncFunction,
  };
};

export const useWebVitals = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          switch (entry.entryType) {
            case 'largest-contentful-paint':
              console.log('LCP:', entry.startTime);
              break;
            case 'first-input':
              console.log('FID:', (entry as PerformanceEventTiming).processingStart - entry.startTime);
              break;
            case 'layout-shift':
              if (!(entry as any).hadRecentInput) {
                console.log('CLS:', (entry as any).value);
              }
              break;
          }
        }
      });

      try {
        observer.observe({ type: 'largest-contentful-paint', buffered: true });
        observer.observe({ type: 'first-input', buffered: true });
        observer.observe({ type: 'layout-shift', buffered: true });
      } catch (e) {
        // Browser doesn't support some metrics
      }

      return () => observer.disconnect();
    }
  }, []);
};

export default usePerformanceMonitor;
