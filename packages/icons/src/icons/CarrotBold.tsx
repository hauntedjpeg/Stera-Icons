import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CarrotBoldProps = Omit<IconBaseProps, 'children'>;

const CarrotBold = memo(
  forwardRef<SVGSVGElement, CarrotBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.03 2a1 1 0 0 1 1 1v2.55l1.8-1.8a1 1 0 0 1 1.42 1.4l-1.8 1.81H21a1 1 0 0 1 0 2h-3.07a6 6 0 0 1-1.19 6.73c-1.07 1.07-3.84 3.01-6.56 4.44a19 19 0 0 1-4.01 1.65q-.94.26-1.81.21a2.5 2.5 0 0 1-1.67-.68 2.5 2.5 0 0 1-.68-1.67q-.04-.87.2-1.8a19 19 0 0 1 1.66-4.02C5.3 11.1 7.24 8.32 8.3 7.25a6 6 0 0 1 6.72-1.2V3a1 1 0 0 1 1-1m-.74 6.64a3.96 3.96 0 0 0-5.57.03c-.65.65-1.85 2.27-2.99 4.15l1.48 1.47a1 1 0 0 1-1.42 1.42l-1.08-1.09-.07.13a18 18 0 0 0-1.48 3.57q-.19.76-.16 1.2c.02.28.1.36.1.37.02.01.1.09.39.1q.42.04 1.19-.15c1-.25 2.26-.8 3.57-1.48a36 36 0 0 0 5.3-3.4l-2.76-2.75a1 1 0 1 1 1.42-1.42l2.71 2.72a4 4 0 0 0-.63-4.87" clipRule="evenodd" />
    </IconBase>
  ))
);

CarrotBold.displayName = 'CarrotBold';

// Triple export pattern (lucide-react style)
export { CarrotBold, CarrotBold as CarrotBoldIcon, CarrotBold as SiCarrotBold };
export default CarrotBold;
export type { CarrotBoldProps };
