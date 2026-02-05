import React from 'react';

interface SkeletonLoaderProps {
  variant?: 'card' | 'text' | 'circle' | 'image';
  count?: number;
  className?: string;
}

export default function SkeletonLoader({ 
  variant = 'card', 
  count = 1,
  className = '' 
}: SkeletonLoaderProps) {
  const renderSkeleton = () => {
    switch (variant) {
      case 'card':
        return (
          <div className={`bg-gray-100 dark:bg-gray-800 rounded-xl p-6 space-y-4 animate-pulse ${className}`}>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-32 mt-4"></div>
          </div>
        );
      case 'text':
        return (
          <div className={`space-y-2 animate-pulse ${className}`}>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/5"></div>
          </div>
        );
      case 'circle':
        return (
          <div className={`w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse ${className}`}></div>
        );
      case 'image':
        return (
          <div className={`w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse ${className}`}></div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <React.Fragment key={index}>
          {renderSkeleton()}
        </React.Fragment>
      ))}
    </>
  );
}
