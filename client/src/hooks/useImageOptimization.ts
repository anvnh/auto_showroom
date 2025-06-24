import { useState, useEffect, useCallback } from 'react';

interface UseImageOptimizationOptions {
  quality?: number;
  format?: 'webp' | 'avif' | 'auto';
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
}

export const useImageOptimization = () => {
  const [isWebPSupported, setIsWebPSupported] = useState(false);
  const [isAVIFSupported, setIsAVIFSupported] = useState(false);

  useEffect(() => {
    // Check WebP support
    const checkWebPSupport = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    };

    // Check AVIF support
    const checkAVIFSupport = () => {
      const avif = new Image();
      avif.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgABogQEAwgMg8f8D///8WfhwB8+ErK42A=';
      return new Promise((resolve) => {
        avif.onload = () => resolve(true);
        avif.onerror = () => resolve(false);
      });
    };

    setIsWebPSupported(checkWebPSupport());
    
    checkAVIFSupport().then((supported) => {
      setIsAVIFSupported(supported as boolean);
    });
  }, []);

  const getOptimizedImageUrl = useCallback((
    originalUrl: string,
    options: UseImageOptimizationOptions = {}
  ): string => {
    const {
      quality = 80,
      format = 'auto',
      width,
      height
    } = options;

    // Nếu đây là Cloudinary URL, thêm các tham số tối ưu hóa
    if (originalUrl.includes('cloudinary.com')) {
      let optimizedUrl = originalUrl;
      
      // Thêm quality
      optimizedUrl = optimizedUrl.replace('/upload/', `/upload/q_${quality}/`);
      
      // Thêm format dựa trên browser support
      let targetFormat = format;
      if (format === 'auto') {
        if (isAVIFSupported) {
          targetFormat = 'avif';
        } else if (isWebPSupported) {
          targetFormat = 'webp';
        }
      }
      
      if (targetFormat !== 'auto') {
        optimizedUrl = optimizedUrl.replace('/upload/', `/upload/f_${targetFormat}/`);
      }
      
      // Thêm kích thước nếu có
      if (width || height) {
        const sizeParams = [];
        if (width) sizeParams.push(`w_${width}`);
        if (height) sizeParams.push(`h_${height}`);
        optimizedUrl = optimizedUrl.replace('/upload/', `/upload/${sizeParams.join(',')}/`);
      }
      
      return optimizedUrl;
    }

    // Đối với các URL khác, trả về URL gốc
    return originalUrl;
  }, [isWebPSupported, isAVIFSupported]);

  const preloadImage = useCallback((src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = reject;
      img.src = src;
    });
  }, []);

  const generateResponsiveUrls = useCallback((
    originalUrl: string,
    breakpoints: number[] = [640, 768, 1024, 1280, 1536]
  ) => {
    return breakpoints.map(width => ({
      width,
      url: getOptimizedImageUrl(originalUrl, { width, quality: 80 })
    }));
  }, [getOptimizedImageUrl]);

  return {
    isWebPSupported,
    isAVIFSupported,
    getOptimizedImageUrl,
    preloadImage,
    generateResponsiveUrls
  };
};

export default useImageOptimization;
