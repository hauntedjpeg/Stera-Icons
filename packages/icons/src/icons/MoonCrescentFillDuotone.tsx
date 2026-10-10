import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoonCrescentFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoonCrescentFillDuotone = memo(
  forwardRef<SVGSVGElement, MoonCrescentFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.4 4.72Q8.12 5.82 8.11 7c0 5.45 4.43 9.88 9.88 9.88l.5-.02c-1.47 1.98-3.84 3.27-6.5 3.27-4.49 0-8.12-3.64-8.12-8.13 0-3.2 1.84-5.95 4.51-7.28" opacity={.4} />
        <path fillRule="evenodd" d="M9.6 2.42c.32-.08.67.03.88.3.22.25.26.6.13.91Q9.89 5.2 9.88 7c0 4.49 3.63 8.13 8.12 8.13q1.02 0 1.98-.25c.32-.08.67.03.88.29.22.26.26.62.13.92-1.56 3.41-5 5.79-8.99 5.79-5.45 0-9.87-4.43-9.87-9.88 0-4.63 3.18-8.5 7.47-9.58m-1.2 2.3C5.71 6.05 3.86 8.81 3.86 12c0 4.49 3.64 8.13 8.13 8.13 2.66 0 5.03-1.29 6.5-3.27l-.5.02c-5.45 0-9.87-4.43-9.87-9.88q0-1.18.26-2.28" clipRule="evenodd" />
    </IconBase>
  ))
);

MoonCrescentFillDuotone.displayName = 'MoonCrescentFillDuotone';

// Triple export pattern
export { MoonCrescentFillDuotone, MoonCrescentFillDuotone as MoonCrescentFillDuotoneIcon, MoonCrescentFillDuotone as SiMoonCrescentFillDuotone };
export default MoonCrescentFillDuotone;
export type { MoonCrescentFillDuotoneProps };
