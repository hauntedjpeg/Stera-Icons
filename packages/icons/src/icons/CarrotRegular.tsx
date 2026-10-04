import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CarrotRegularProps = Omit<IconBaseProps, 'children'>;

const CarrotRegular = memo(
  forwardRef<SVGSVGElement, CarrotRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.03 2.25c.42 0 .75.34.75.75v3.15l2.23-2.23a.75.75 0 1 1 1.06 1.06l-2.22 2.23H21a.75.75 0 0 1 0 1.5h-3.47a5.7 5.7 0 0 1-.97 6.8c-1.04 1.05-3.79 2.98-6.5 4.4a19 19 0 0 1-3.96 1.63q-.92.24-1.73.2a2.3 2.3 0 0 1-1.5-.61 2.3 2.3 0 0 1-.61-1.5 6 6 0 0 1 .2-1.73c.3-1.21.92-2.6 1.63-3.97 1.42-2.7 3.35-5.45 4.4-6.5a5.7 5.7 0 0 1 6.8-.96V3c0-.41.33-.75.74-.75m-.55 6.22a4.2 4.2 0 0 0-5.93.02c-.7.7-1.96 2.4-3.13 4.37l1.61 1.61a.75.75 0 1 1-1.06 1.06l-1.33-1.32-.22.42c-.7 1.31-1.24 2.6-1.5 3.63q-.2.79-.17 1.27c.03.32.11.47.18.54s.22.15.54.18q.49.03 1.27-.16c1.04-.27 2.31-.82 3.63-1.5a36 36 0 0 0 5.55-3.61l-2.95-2.95a.75.75 0 0 1 1.06-1.06l2.93 2.93a4.2 4.2 0 0 0-.48-5.43" clipRule="evenodd" />
    </IconBase>
  ))
);

CarrotRegular.displayName = 'CarrotRegular';

// Triple export pattern (lucide-react style)
export { CarrotRegular, CarrotRegular as CarrotRegularIcon, CarrotRegular as SiCarrotRegular };
export default CarrotRegular;
export type { CarrotRegularProps };
