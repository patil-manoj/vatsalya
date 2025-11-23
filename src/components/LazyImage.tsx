import { useState, useEffect, useRef } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  width?: number;
  height?: number;
}

export default function LazyImage({ 
  src, 
  alt, 
  className = '', 
  aspectRatio = 'aspect-[4/3]',
  width,
  height 
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '100px',
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Generate srcset for Unsplash images
  const getSrcSet = () => {
    if (src.includes('unsplash.com')) {
      const baseUrl = src.split('?')[0];
      return `${baseUrl}?w=640&q=75&fm=webp 640w, ${baseUrl}?w=1024&q=75&fm=webp 1024w, ${baseUrl}?w=1920&q=75&fm=webp 1920w`;
    }
    return undefined;
  };

  // Optimize Unsplash image URL
  const getOptimizedSrc = () => {
    if (src.includes('unsplash.com')) {
      const baseUrl = src.split('?')[0];
      return `${baseUrl}?w=1920&q=75&fm=webp&fit=crop`;
    }
    return src;
  };

  return (
    <div 
      className={`relative overflow-hidden ${aspectRatio} ${className}`}
      ref={imgRef}
    >
      {isInView && (
        <>
          <div
            className={`absolute inset-0 bg-brand-stone-100 transition-opacity duration-500 ${
              isLoaded ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <img
            src={getOptimizedSrc()}
            srcSet={getSrcSet()}
            sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px"
            alt={alt}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
            decoding="async"
            width={width}
            height={height}
          />
        </>
      )}
    </div>
  );
}