import { forwardRef, memo, ReactNode } from 'react';
import type { IconProps } from './types';
import { hasA11yProp } from './utils';

export interface IconBaseProps extends Omit<IconProps, 'weight' | 'duotone'> {
  children: ReactNode;
}

/**
 * Shared base component for all icons.
 * Handles common SVG wrapper logic to reduce bundle size.
 *
 * Features:
 * - Auto aria-hidden="true" for decorative icons (when no a11y props present)
 * - Consistent sizing and color handling
 */
const IconBase = memo(
  forwardRef<SVGSVGElement, IconBaseProps>(
    (
      {
        size,
        color = 'currentColor',
        className,
        'aria-label': ariaLabel,
        'aria-hidden': ariaHidden,
        children,
        ...props
      },
      ref
    ) => {
      // Automatically set aria-hidden="true" for decorative icons
      // (when no accessibility props are provided)
      const computedAriaHidden = ariaHidden !== undefined
        ? ariaHidden
        : !hasA11yProp({ 'aria-label': ariaLabel, ...props });

      return (
        <svg
          fill={color}
          viewBox="0 0 24 24"
          {...(size !== undefined ? { width: size, height: size } : {})}
          className={className}
          aria-label={ariaLabel}
          aria-hidden={computedAriaHidden}
          ref={ref}
          {...props}
        >
          {children}
        </svg>
      );
    }
  )
);

IconBase.displayName = 'IconBase';

export { IconBase };
