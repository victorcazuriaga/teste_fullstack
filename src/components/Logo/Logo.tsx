interface LogoProps {
    size?: 'small' | 'medium' | 'large';
    className?: string;
  }
  
  const sizeClasses = {
    small: "text-lg",   
    medium: "text-2xl", 
    large: "text-4xl",  
  };
  
  export  function Logo({ size = 'medium', className = '' }: LogoProps) {
    const sizeClass = sizeClasses[size];
  
    return (
      <div className={`${sizeClass} ${className} font-bold text-gray-800`}>
        Logo
      </div>
    );
  }
  