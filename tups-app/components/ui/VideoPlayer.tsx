'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface VideoPlayerProps {
  src: string;
  placeholder?: string;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  className?: string;
  aspectRatio?: 'video' | 'square' | 'vertical';
}

export default function VideoPlayer({
  src,
  placeholder,
  autoplay = false,
  muted = true,
  loop = true,
  className = '',
  aspectRatio = 'video',
}: VideoPlayerProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && autoplay) {
      videoRef.current.play().catch(() => {
        // Autoplay failed, which is normal in many browsers
        console.log('Autoplay failed');
      });
    }
  }, [autoplay]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoLoad = () => {
    setIsLoaded(true);
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  // Get aspect ratio class
  const getAspectClass = () => {
    switch (aspectRatio) {
      case 'square': return 'aspect-square';
      case 'vertical': return 'aspect-[9/16]';
      default: return 'aspect-video';
    }
  };

  // For now, show placeholder since we don't have real videos
  if (!src.startsWith('http') && !isLoaded) {
    return (
      <motion.div
        className={`relative bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg overflow-hidden cursor-pointer ${className}`}
        whileHover={{ scale: 1.02 }}
        onClick={togglePlay}
      >
        <div className={`${getAspectClass()} flex items-center justify-center`}>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary-500 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-primary-700 font-medium">Demo Video</p>
            <p className="text-primary-600 text-sm mt-1">{placeholder || 'Coming Soon'}</p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`relative rounded-lg overflow-hidden ${className}`}
      whileHover={{ scale: 1.02 }}
    >
      <video
        ref={videoRef}
        className={`w-full h-full object-cover ${getAspectClass()}`}
        muted={muted}
        loop={loop}
        playsInline
        onLoadedData={handleVideoLoad}
        onPlay={handlePlay}
        onPause={handlePause}
        poster={placeholder}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Play/Pause overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center opacity-0 hover:opacity-100">
        <button
          onClick={togglePlay}
          className="bg-white bg-opacity-90 rounded-full p-3 shadow-lg transition-transform hover:scale-110"
        >
          <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
            {isPlaying ? (
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            ) : (
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            )}
          </svg>
        </button>
      </div>
    </motion.div>
  );
}