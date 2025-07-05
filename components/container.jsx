import { cn } from '@/lib/utils';

const Container = ({
  children,
  className,
  size = 'default',
  withPadding = true,
  ...props
}) => {
  const sizeClasses = {
    default: 'max-w-7xl',
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  };

  return (
    <div
      className={cn(
        'w-full mx-auto px-4 sm:px-6 lg:px-8',
        sizeClasses[size],
        withPadding && 'py-8 md:py-12',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
