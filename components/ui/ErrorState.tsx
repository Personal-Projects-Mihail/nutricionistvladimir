import React from 'react';
import { FiAlertTriangle, FiXCircle, FiCheckCircle, FiInfo } from 'react-icons/fi';

interface ErrorStateProps {
  type?: 'error' | 'warning' | 'success' | 'info';
  title: string;
  message: string;
  showIcon?: boolean;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export default function ErrorState({ 
  type = 'error',
  title, 
  message, 
  showIcon = true,
  action 
}: ErrorStateProps) {
  const renderIcon = () => {
    if (!showIcon) return null;
    
    const baseClass = "w-12 h-12 mb-3";
    
    switch (type) {
      case 'error':
        return <FiXCircle className={`${baseClass} text-red-500`} />;
      case 'warning':
        return <FiAlertTriangle className={`${baseClass} text-yellow-500`} />;
      case 'success':
        return <FiCheckCircle className={`${baseClass} text-green-500`} />;
      case 'info':
        return <FiInfo className={`${baseClass} text-blue-500`} />;
      default:
        return <FiXCircle className={`${baseClass} text-red-500`} />;
    }
  };

  const getBackgroundColor = () => {
    switch (type) {
      case 'error':
        return 'bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-800';
      case 'warning':
        return 'bg-yellow-50 dark:bg-yellow-900/10 border-yellow-200 dark:border-yellow-800';
      case 'success':
        return 'bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-800';
      case 'info':
        return 'bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800';
      default:
        return 'bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-800';
    }
  };

  return (
    <div 
      className={`flex flex-col items-center justify-center p-8 rounded-xl border ${getBackgroundColor()}`}
      role="alert"
      aria-live="assertive"
    >
      {renderIcon()}
      
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
        {title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-400 text-center max-w-md mb-4">
        {message}
      </p>
      
      {action && (
        <button 
          onClick={action.onClick}
          className="btn-secondary mt-2"
        >
          {action.label}
        </button>
      )}
    </div>
  );
}
