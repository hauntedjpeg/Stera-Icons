import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlagFillProps = Omit<IconBaseProps, 'children'>;

const FlagFill = memo(
  forwardRef<SVGSVGElement, FlagFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="flag-fill" {...props}>
      <path d="M6.02 2.15c1.5-.12 2.62-.04 3.53.17 1.04.24 1.77.64 2.43.98.65.35 1.26.65 2.18.85.94.2 2.23.3 4.21.14h.15c.72.02 1.35.6 1.36 1.38v8.92c0 .72-.56 1.3-1.25 1.36-2.17.2-3.69.12-4.86-.14a10 10 0 0 1-2.68-1.04c-.68-.37-1.24-.67-2.08-.85a11 11 0 0 0-3.13-.08V21a.88.88 0 0 1-1.75 0V3.57c0-.7.53-1.29 1.22-1.36z" />
    </IconBase>
  ))
);

FlagFill.displayName = 'FlagFill';

// Triple export pattern (lucide-react style)
export { FlagFill, FlagFill as FlagFillIcon, FlagFill as SiFlagFill };
export default FlagFill;
export type { FlagFillProps };
