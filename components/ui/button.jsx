"use client"

import * as React from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow hover:shadow-md',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        accent: 'bg-accent text-accent-foreground hover:bg-accent/90',
        success: 'bg-green-600 text-white hover:bg-green-700',
        warning: 'bg-amber-500 text-white hover:bg-amber-600',
        danger: 'bg-red-600 text-white hover:bg-red-700',
        outline:
          'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'underline-offset-4 hover:underline text-primary',
        gradient: 'bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90',
      },
      size: {
        xs: 'h-8 px-3 text-xs rounded-md',
        sm: 'h-9 px-4 text-sm rounded-md',
        default: 'h-10 py-2 px-6 rounded-md',
        lg: 'h-12 px-8 text-lg rounded-lg',
        xl: 'h-14 px-10 text-xl rounded-lg',
        icon: 'h-10 w-10',
      },
      fullWidth: {
        true: 'w-full',
      },
      rounded: {
        full: 'rounded-full',
        lg: 'rounded-lg',
        md: 'rounded-md',
        none: 'rounded-none',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
      rounded: 'md',
    },
  }
);

const Button = React.forwardRef(
  ({
    className,
    variant,
    size,
    rounded,
    fullWidth,
    isLoading,
    loadingText,
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    children,
    asChild = false,
    ...props
  }, ref) => {
    const Comp = asChild ? 'span' : 'button';
    
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, fullWidth, rounded, className }),
          'relative',
          isLoading && 'pointer-events-none'
        )}
        disabled={isLoading || props.disabled}
        ref={ref}
        {...props}
      >
        {isLoading && (
          <Loader2 className="absolute h-4 w-4 animate-spin" />
        )}
        <span className={cn(
          'flex items-center justify-center gap-2',
          isLoading && 'invisible'
        )}>
          {LeftIcon && <LeftIcon className="h-4 w-4" />}
          {children}
          {RightIcon && <RightIcon className="h-4 w-4" />}
        </span>
        {isLoading && loadingText && (
          <span className="sr-only">{loadingText}</span>
        )}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
