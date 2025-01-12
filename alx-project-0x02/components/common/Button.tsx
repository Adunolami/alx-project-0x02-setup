import React from 'react';
import { ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({ size, shape, onClick, children }) => {
  // Map size and shape to Tailwind classes
  const sizeClasses: Record<ButtonProps['size'], string> = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white ${sizeClasses[size]} ${shape} hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300`}
    >
      {children}
    </button>
  );
};

export default Button;
