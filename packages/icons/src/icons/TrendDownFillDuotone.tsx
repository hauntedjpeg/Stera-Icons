import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TrendDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TrendDownFillDuotone = memo(
  forwardRef<SVGSVGElement, TrendDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20.88 12.63c.25-.25.63-.32.95-.19.33.14.54.46.54.81v5c0 .48-.39.87-.87.87h-5c-.35 0-.67-.2-.8-.54-.14-.32-.07-.7.18-.95z" />
        <path d="M1.88 5.14c.34-.35.9-.35 1.23-.01l6.63 6.53 2.55-2.51c.34-.34.89-.34 1.23 0l5.46 5.38-1.24 1.24L12.9 11l-2.55 2.52c-.32.31-.82.33-1.16.06l-.07-.06L1.9 6.37c-.35-.34-.35-.89-.01-1.23" opacity={.4} />
    </IconBase>
  ))
);

TrendDownFillDuotone.displayName = 'TrendDownFillDuotone';

// Triple export pattern
export { TrendDownFillDuotone, TrendDownFillDuotone as TrendDownFillDuotoneIcon, TrendDownFillDuotone as SiTrendDownFillDuotone };
export default TrendDownFillDuotone;
export type { TrendDownFillDuotoneProps };
