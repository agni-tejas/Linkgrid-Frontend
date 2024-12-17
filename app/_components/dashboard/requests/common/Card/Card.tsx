import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'hover';
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default'
}) => {
  const baseStyles = "bg-white rounded-2xl border border-gray-100";
  
  const variants = {
    default: "shadow-sm",
    hover: "shadow-sm hover:shadow-md transition-shadow duration-200"
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

export default Card;