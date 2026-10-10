import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CarrotRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CarrotRegularDuotone = memo(
  forwardRef<SVGSVGElement, CarrotRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M8.49 7.43a5.71 5.71 0 1 1 8.07 8.08c-1.04 1.05-3.79 2.98-6.5 4.4a19 19 0 0 1-3.96 1.63q-.92.24-1.73.2a2.3 2.3 0 0 1-1.5-.61 2.3 2.3 0 0 1-.61-1.5q-.04-.82.2-1.74c.3-1.2.92-2.6 1.63-3.96 1.42-2.7 3.35-5.45 4.4-6.5M15.5 8.5a4.2 4.2 0 0 0-5.95 0 27 27 0 0 0-3.13 4.37l1.61 1.61a.75.75 0 1 1-1.06 1.06l-1.33-1.32-.22.42a18 18 0 0 0-1.5 3.63q-.2.79-.17 1.27c.03.32.11.47.18.54s.22.15.54.18q.48.03 1.27-.16c1.04-.27 2.31-.82 3.63-1.51a36 36 0 0 0 5.54-3.6l-2.94-2.95a.75.75 0 1 1 1.06-1.06l2.93 2.93a4.2 4.2 0 0 0-.46-5.4" clipRule="evenodd" />
        <path d="M16.03 2.25c.42 0 .75.34.75.75v3.15l2.23-2.23a.75.75 0 1 1 1.06 1.06l-2.23 2.23H21a.75.75 0 0 1 0 1.5h-3.47a5.7 5.7 0 0 0-2.25-2.24V3c0-.41.34-.75.75-.75" opacity={.4} />
    </IconBase>
  ))
);

CarrotRegularDuotone.displayName = 'CarrotRegularDuotone';

// Triple export pattern
export { CarrotRegularDuotone, CarrotRegularDuotone as CarrotRegularDuotoneIcon, CarrotRegularDuotone as SiCarrotRegularDuotone };
export default CarrotRegularDuotone;
export type { CarrotRegularDuotoneProps };
