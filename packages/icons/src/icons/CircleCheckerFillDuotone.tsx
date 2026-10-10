import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleCheckerFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleCheckerFillDuotone = memo(
  forwardRef<SVGSVGElement, CircleCheckerFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 12h10c0 5.52-4.48 10-10 10zH2C2 6.48 6.48 2 12 2z" opacity={.4} />
    </IconBase>
  ))
);

CircleCheckerFillDuotone.displayName = 'CircleCheckerFillDuotone';

// Triple export pattern
export { CircleCheckerFillDuotone, CircleCheckerFillDuotone as CircleCheckerFillDuotoneIcon, CircleCheckerFillDuotone as SiCircleCheckerFillDuotone };
export default CircleCheckerFillDuotone;
export type { CircleCheckerFillDuotoneProps };
