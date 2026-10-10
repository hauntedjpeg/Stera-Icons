import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoonCrescentFillProps = Omit<IconBaseProps, 'children'>;

const MoonCrescentFill = memo(
  forwardRef<SVGSVGElement, MoonCrescentFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.6 2.42c.32-.08.67.03.88.3.22.25.26.6.13.91Q9.89 5.2 9.88 7c0 4.49 3.63 8.13 8.12 8.13q1.02 0 1.98-.25c.32-.08.67.03.88.29.22.26.26.62.13.92-1.56 3.41-5 5.79-8.99 5.79-5.45 0-9.87-4.43-9.87-9.88 0-4.63 3.18-8.5 7.47-9.58" />
    </IconBase>
  ))
);

MoonCrescentFill.displayName = 'MoonCrescentFill';

// Triple export pattern
export { MoonCrescentFill, MoonCrescentFill as MoonCrescentFillIcon, MoonCrescentFill as SiMoonCrescentFill };
export default MoonCrescentFill;
export type { MoonCrescentFillProps };
