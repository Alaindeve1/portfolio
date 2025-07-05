'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const Section = ({
  id,
  children,
  className,
  containerClassName,
  title,
  description,
  isFirst = false,
  isLast = false,
  withPadding = true,
  withDivider = false,
  ...props
}) => {
  return (
    <section 
      id={id}
      className={cn(
        'relative w-full',
        withPadding && 'py-16 md:py-24',
        isFirst && 'pt-24 md:pt-32',
        isLast && 'pb-32',
        className
      )}
      {...props}
    >
      <div className={cn(
        'container mx-auto px-4 sm:px-6 lg:px-8',
        containerClassName
      )}>
        {(title || description) && (
          <motion.div 
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </motion.div>
        )}
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {children}
        </motion.div>
      </div>
      
      {withDivider && !isLast && (
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent" />
      )}
    </section>
  );
};

export default Section;
