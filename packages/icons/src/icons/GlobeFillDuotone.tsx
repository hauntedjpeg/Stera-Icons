import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GlobeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GlobeFillDuotone = memo(
  forwardRef<SVGSVGElement, GlobeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.58 12.88c.15 2.45.95 4.87 2.4 6.99-3.24-.83-5.7-3.6-6.06-7zM20.08 12.88c-.37 3.39-2.82 6.16-6.05 6.99 1.44-2.12 2.24-4.54 2.4-7zM14.67 12.88c-.17 2.41-1.06 4.8-2.67 6.78-1.6-1.99-2.5-4.37-2.67-6.78zM9.97 4.13c-1.44 2.12-2.24 4.54-2.4 7H3.93c.37-3.4 2.82-6.17 6.05-7M12 4.33c1.6 2 2.5 4.37 2.67 6.8H9.33C9.5 8.7 10.4 6.33 12 4.33M14.03 4.13c3.23.83 5.68 3.6 6.05 7h-3.66c-.15-2.46-.95-4.88-2.4-7" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13M3.92 12.88c.37 3.39 2.82 6.16 6.05 6.99-1.44-2.12-2.24-4.54-2.4-7zm12.5 0c-.15 2.45-.95 4.87-2.4 6.99 3.24-.83 5.7-3.6 6.06-7zm-7.09 0c.17 2.41 1.06 4.8 2.67 6.78 1.6-1.99 2.5-4.37 2.67-6.78zm.64-8.75c-3.23.83-5.68 3.6-6.05 7h3.66c.15-2.46.95-4.88 2.4-7m2.03.2c-1.6 2-2.5 4.37-2.67 6.8h5.34C14.5 8.7 13.6 6.33 12 4.33m2.03-.2c1.44 2.12 2.24 4.54 2.4 7h3.65c-.37-3.4-2.82-6.17-6.05-7" clipRule="evenodd" />
    </IconBase>
  ))
);

GlobeFillDuotone.displayName = 'GlobeFillDuotone';

// Triple export pattern
export { GlobeFillDuotone, GlobeFillDuotone as GlobeFillDuotoneIcon, GlobeFillDuotone as SiGlobeFillDuotone };
export default GlobeFillDuotone;
export type { GlobeFillDuotoneProps };
