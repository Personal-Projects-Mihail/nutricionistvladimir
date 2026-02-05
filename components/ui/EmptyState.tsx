import React from 'react';
import { FiInbox, FiAlertCircle, FiSearch } from 'react-icons/fi';

interface EmptyStateProps {
  icon?: 'inbox' | 'alert' | 'search';
  title: string;
  description: string;
  action?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
}

export default function EmptyState({ 
  icon = 'inbox',
  title, 
  description, 
  action 
}: EmptyStateProps) {
  const renderIcon = () => {
    const iconClass = "w-16 h-16 text-gray-300 dark:text-gray-600 mb-4";
    
    switch (icon) {
      case 'inbox':
        return <FiInbox className={iconClass} />;
      case 'alert':
        return <FiAlertCircle className={iconClass} />;
      case 'search':
        return <FiSearch className={iconClass} />;
      default:
        return <FiInbox className={iconClass} />;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      {renderIcon()}
      
      <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
        {title}
      </h3>
      
      <p className="text-gray-500 dark:text-gray-400 max-w-md mb-6">
        {description}
      </p>
      
      {action && (
        action.href ? (
          <a 
            href={action.href}
            className="btn-primary"
          >
            {action.label}
          </a>
        ) : (
          <button 
            onClick={action.onClick}
            className="btn-primary"
          >
            {action.label}
          </button>
        )
      )}
    </div>
  );
}
