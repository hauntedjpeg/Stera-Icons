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
 * - Decorative icons (no a11y props) get aria-hidden="true"
 * - Icons with an accessible name (aria-label, aria-labelledby, title)
 *   are exposed with role="img"
 * - title renders a <title> element as the first child of the svg
 * - Consistent sizing and color handling
 */
const IconBase = memo(
  forwardRef<SVGSVGElement, IconBaseProps>(
    (
      {
        size,
        color = 'currentColor',
        className,
        title,
        role,
        'aria-hidden': ariaHidden,
        children,
        ...props
      },
      ref
    ) => {
      // Labelled: the caller supplied an accessible name
      const isLabelled = hasA11yProp({
        'aria-label': props['aria-label'],
        'aria-labelledby': props['aria-labelledby'],
        title,
      });
      // Decorative: no accessible name and no other a11y props (role or aria-*)
      const isDecorative = !isLabelled && !hasA11yProp({ role, ...props });

      // An explicit aria-hidden always wins
      const computedAriaHidden = ariaHidden !== undefined
        ? ariaHidden
        : isDecorative ? true : undefined;

      return (
        <svg
          fill={color}
          viewBox="0 0 24 24"
          {...(size !== undefined ? { width: size, height: size } : {})}
          className={className}
          role={role ?? (isLabelled ? 'img' : undefined)}
          aria-hidden={computedAriaHidden}
          ref={ref}
          {...props}
        >
          {title != null ? <title>{title}</title> : null}
          {children}
        </svg>
      );
    }
  )
);

IconBase.displayName = 'IconBase';

export { IconBase };
