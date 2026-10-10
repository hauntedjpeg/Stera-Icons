import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TrendUpFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TrendUpFillDuotone = memo(
  forwardRef<SVGSVGElement, TrendUpFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m18.98 9.47-5.46 5.38c-.34.34-.89.34-1.23 0l-2.55-2.51-6.63 6.53c-.34.34-.9.34-1.23 0-.34-.35-.34-.9 0-1.24l7.24-7.15.07-.06c.34-.27.84-.25 1.16.06L12.9 13l4.84-4.77z" opacity={.4} />
        <path d="M21.5 4.88c.48 0 .87.39.87.87v5c0 .35-.2.67-.54.8-.32.14-.7.07-.95-.18l-5-5c-.25-.25-.32-.63-.19-.95.14-.33.46-.54.8-.54z" />
    </IconBase>
  ))
);

TrendUpFillDuotone.displayName = 'TrendUpFillDuotone';

// Triple export pattern
export { TrendUpFillDuotone, TrendUpFillDuotone as TrendUpFillDuotoneIcon, TrendUpFillDuotone as SiTrendUpFillDuotone };
export default TrendUpFillDuotone;
export type { TrendUpFillDuotoneProps };
