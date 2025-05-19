import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
  selected?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  onClick, 
  hoverable = false,
  selected = false
}) => {
  const baseClasses = 'bg-white rounded-lg shadow-card p-4 transition-all duration-200';
  const hoverClasses = hoverable ? 'hover:shadow-card-hover hover:translate-y-[-2px]' : '';
  const clickableClasses = onClick ? 'cursor-pointer' : '';
  const selectedClasses = selected ? 'ring-2 ring-primary-500' : '';
  
  return (
    <div 
      className={`${baseClasses} ${hoverClasses} ${clickableClasses} ${selectedClasses} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;