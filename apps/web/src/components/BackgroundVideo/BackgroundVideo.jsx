import { useEffect, useRef, useState } from 'react';

export function BackgroundVideo() {
  const videoRef = useRef(null);
  const lastScrollY = useRef(0);
  const lastTime = useRef(Date.now());
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set initial video properties
    video.muted = true;
    video.loop = false; // Don't loop, let it reach end
    video.playsInline = true;
    video.pause(); // Start paused

    const handleLoadedData = () => setIsLoaded(true);

    video.addEventListener('loadeddata', handleLoadedData);

    const updateVideoTime = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      if (maxScroll > 0 && video.duration) {
        const progress = scrollY / maxScroll;
        video.currentTime = progress * video.duration;
      }
    };

    const handleScroll = () => {
      updateVideoTime();
    };

    // Use requestAnimationFrame for smooth updates
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });

    // Initial update
    updateVideoTime();

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      video.removeEventListener('loadeddata', handleLoadedData);
    };
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        className={`fixed inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          filter: 'blur(1px) brightness(0.6) contrast(1.1)',
        }}
        preload="metadata"
      >
        <source src="/vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Loading overlay */}
      {!isLoaded && (
        <div className="fixed inset-0 z-0 bg-gray-900 animate-pulse" />
      )}
    </>
  );
}