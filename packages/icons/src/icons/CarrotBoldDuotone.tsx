import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CarrotBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CarrotBoldDuotone = memo(
  forwardRef<SVGSVGElement, CarrotBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M8.3 7.25a5.96 5.96 0 1 1 8.44 8.44c-1.07 1.07-3.84 3.01-6.56 4.44a19 19 0 0 1-4.01 1.65q-.94.26-1.81.21a2.5 2.5 0 0 1-1.67-.68 2.5 2.5 0 0 1-.68-1.67q-.04-.87.2-1.8a19 19 0 0 1 1.66-4.02c1.43-2.72 3.37-5.5 4.44-6.57m7.03 1.42a3.96 3.96 0 0 0-5.6 0c-.66.65-1.86 2.27-3 4.15l1.48 1.47a1 1 0 0 1-1.42 1.42l-1.08-1.09-.07.12a18 18 0 0 0-1.48 3.58q-.19.76-.16 1.2c.02.28.1.36.1.37.02.01.1.09.39.1q.42.04 1.19-.15c1-.25 2.26-.8 3.57-1.48a36 36 0 0 0 5.3-3.4l-2.76-2.75a1 1 0 1 1 1.42-1.42l2.71 2.72a4 4 0 0 0-.6-4.84" clipRule="evenodd" />
        <path d="M16.03 2a1 1 0 0 1 1 1v2.55l1.8-1.8a1 1 0 0 1 1.42 1.4l-1.8 1.81H21a1 1 0 0 1 0 2h-3.06a6 6 0 0 0-2.9-2.9V3a1 1 0 0 1 1-1" opacity={.4} />
    </IconBase>
  ))
);

CarrotBoldDuotone.displayName = 'CarrotBoldDuotone';

// Triple export pattern
export { CarrotBoldDuotone, CarrotBoldDuotone as CarrotBoldDuotoneIcon, CarrotBoldDuotone as SiCarrotBoldDuotone };
export default CarrotBoldDuotone;
export type { CarrotBoldDuotoneProps };
