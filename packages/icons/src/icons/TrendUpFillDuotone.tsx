import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TrendUpFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TrendUpFillDuotone = memo(
  forwardRef<SVGSVGElement, TrendUpFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="trend-up-fill-duotone" {...props}>
      <path d="m18.98 9.47-5.46 5.38a.9.9 0 0 1-1.23 0l-2.55-2.51-6.63 6.53a.88.88 0 0 1-1.22-1.24l7.23-7.15.07-.06a.9.9 0 0 1 1.16.06L12.9 13l4.84-4.77z" opacity={.4} />
        <path d="M21.5 4.88c.48 0 .87.39.87.87v5a.88.88 0 0 1-1.49.62l-5-5a.88.88 0 0 1 .62-1.5z" />
    </IconBase>
  ))
);

TrendUpFillDuotone.displayName = 'TrendUpFillDuotone';

// Triple export pattern (lucide-react style)
export { TrendUpFillDuotone, TrendUpFillDuotone as TrendUpFillDuotoneIcon, TrendUpFillDuotone as SiTrendUpFillDuotone };
export default TrendUpFillDuotone;
export type { TrendUpFillDuotoneProps };
