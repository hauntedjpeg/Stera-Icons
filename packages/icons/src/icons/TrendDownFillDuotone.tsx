import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TrendDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TrendDownFillDuotone = memo(
  forwardRef<SVGSVGElement, TrendDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="trend-down-fill-duotone" {...props}>
      <path d="M20.88 12.63a.88.88 0 0 1 1.5.62v5c0 .48-.4.87-.88.87h-5a.88.88 0 0 1-.62-1.49z" />
        <path d="M1.88 5.14a.9.9 0 0 1 1.23-.01l6.63 6.53 2.55-2.51a.9.9 0 0 1 1.23 0l5.46 5.38-1.24 1.24L12.9 11l-2.55 2.52a.9.9 0 0 1-1.16.06l-.07-.06L1.9 6.37a.9.9 0 0 1-.01-1.23" opacity={.4} />
    </IconBase>
  ))
);

TrendDownFillDuotone.displayName = 'TrendDownFillDuotone';

// Triple export pattern (lucide-react style)
export { TrendDownFillDuotone, TrendDownFillDuotone as TrendDownFillDuotoneIcon, TrendDownFillDuotone as SiTrendDownFillDuotone };
export default TrendDownFillDuotone;
export type { TrendDownFillDuotoneProps };
