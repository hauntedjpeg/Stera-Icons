import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleDivideAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleDivideAltFillDuotone = memo(
  forwardRef<SVGSVGElement, CircleDivideAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21.95 13c-.5 5.05-4.77 9-9.95 9-5.19 0-9.45-3.95-9.95-9zM12 2c5.19 0 9.45 3.95 9.95 9H2.05C2.55 5.95 6.8 2 12 2" opacity={0.4} />
        <path d="M21.95 11q.05.5.05 1t-.05 1H2.05Q2 12.5 2 12t.05-1z" />
    </IconBase>
  ))
);

CircleDivideAltFillDuotone.displayName = 'CircleDivideAltFillDuotone';

// Triple export pattern
export { CircleDivideAltFillDuotone, CircleDivideAltFillDuotone as CircleDivideAltFillDuotoneIcon, CircleDivideAltFillDuotone as SiCircleDivideAltFillDuotone };
export default CircleDivideAltFillDuotone;
export type { CircleDivideAltFillDuotoneProps };
