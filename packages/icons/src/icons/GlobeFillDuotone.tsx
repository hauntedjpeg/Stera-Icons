import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type GlobeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GlobeFillDuotone = memo(
  forwardRef<SVGSVGElement, GlobeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.58 12.88c.15 2.45.95 4.87 2.4 6.99a8.1 8.1 0 0 1-6.06-7zM20.08 12.88a8.1 8.1 0 0 1-6.05 6.99 14 14 0 0 0 2.4-7zM14.67 12.88A12 12 0 0 1 12 19.66c-1.6-1.99-2.5-4.37-2.67-6.78zM9.97 4.13a14 14 0 0 0-2.4 7H3.93a8.1 8.1 0 0 1 6.05-7M12 4.33c1.6 2 2.5 4.37 2.67 6.8H9.33C9.5 8.7 10.4 6.33 12 4.33M14.03 4.13a8.1 8.1 0 0 1 6.05 7h-3.66a14 14 0 0 0-2.4-7" opacity={0.4} />
        <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75M3.92 12.88a8.1 8.1 0 0 0 6.05 6.99 14 14 0 0 1-2.4-7zm12.5 0a14 14 0 0 1-2.4 6.99 8.1 8.1 0 0 0 6.06-7zm-7.09 0c.17 2.41 1.06 4.8 2.67 6.78 1.6-1.99 2.5-4.37 2.67-6.78zm.64-8.75a8.1 8.1 0 0 0-6.05 7h3.66c.15-2.46.95-4.88 2.4-7m2.03.2c-1.6 2-2.5 4.37-2.67 6.8h5.34A12 12 0 0 0 12 4.33m2.03-.2a14 14 0 0 1 2.4 7h3.65a8.1 8.1 0 0 0-6.05-7" clipRule="evenodd" />
    </IconBase>
  ))
);

GlobeFillDuotone.displayName = 'GlobeFillDuotone';

// Triple export pattern (lucide-react style)
export { GlobeFillDuotone, GlobeFillDuotone as GlobeFillDuotoneIcon, GlobeFillDuotone as SiGlobeFillDuotone };
export default GlobeFillDuotone;
export type { GlobeFillDuotoneProps };
