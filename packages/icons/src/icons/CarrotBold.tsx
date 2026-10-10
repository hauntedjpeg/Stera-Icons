import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CarrotBoldProps = Omit<IconBaseProps, 'children'>;

const CarrotBold = memo(
  forwardRef<SVGSVGElement, CarrotBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.03 2c.55 0 1 .45 1 1v2.55l1.8-1.8c.4-.4 1.03-.4 1.42 0 .4.38.4 1.02 0 1.4l-1.8 1.81H21c.55 0 1 .45 1 1s-.45 1-1 1h-3.06c1.02 2.2.62 4.91-1.2 6.73-1.07 1.07-3.84 3.01-6.56 4.44-1.36.72-2.78 1.34-4.01 1.65q-.94.26-1.81.21c-.58-.04-1.2-.21-1.67-.68s-.64-1.1-.68-1.67q-.04-.87.2-1.8c.32-1.24.94-2.66 1.66-4.02 1.43-2.72 3.37-5.5 4.44-6.57 1.82-1.81 4.52-2.21 6.72-1.2V3c0-.55.45-1 1-1m-.74 6.64c-1.55-1.52-4.03-1.5-5.57.03-.65.65-1.85 2.27-2.99 4.15l1.48 1.47c.39.4.39 1.03 0 1.42-.4.39-1.03.39-1.42 0l-1.08-1.09-.07.13c-.69 1.3-1.23 2.56-1.48 3.57q-.18.76-.16 1.2c.02.28.1.36.1.37.02.01.1.09.39.1q.42.04 1.19-.15c1-.25 2.26-.8 3.57-1.48 2.07-1.08 4.1-2.45 5.3-3.4l-2.76-2.75c-.39-.4-.39-1.03 0-1.42.4-.39 1.03-.39 1.42 0l2.71 2.72c.91-1.51.72-3.5-.56-4.81z" clipRule="evenodd" />
    </IconBase>
  ))
);

CarrotBold.displayName = 'CarrotBold';

// Triple export pattern
export { CarrotBold, CarrotBold as CarrotBoldIcon, CarrotBold as SiCarrotBold };
export default CarrotBold;
export type { CarrotBoldProps };
