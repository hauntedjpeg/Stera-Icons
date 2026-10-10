import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelsLeftTopFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PanelsLeftTopFillDuotone = memo(
  forwardRef<SVGSVGElement, PanelsLeftTopFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21.13 9.88V17c0 1.17-.96 2.13-2.13 2.13H8.88V9.88z" opacity={.4} />
        <path fillRule="evenodd" d="M19 3.13c2.14 0 3.88 1.73 3.88 3.87v10c0 2.14-1.74 3.88-3.88 3.88H5c-2.14 0-3.87-1.74-3.87-3.88V7c0-2.14 1.73-3.87 3.87-3.87zM5 4.88c-1.17 0-2.12.95-2.12 2.12v10c0 1.17.95 2.13 2.12 2.13h2.13V4.88zm3.88 5v9.24H19c1.17 0 2.13-.95 2.13-2.12V9.88zm0-1.76h12.25V7c0-1.17-.96-2.12-2.13-2.12H8.88z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelsLeftTopFillDuotone.displayName = 'PanelsLeftTopFillDuotone';

// Triple export pattern
export { PanelsLeftTopFillDuotone, PanelsLeftTopFillDuotone as PanelsLeftTopFillDuotoneIcon, PanelsLeftTopFillDuotone as SiPanelsLeftTopFillDuotone };
export default PanelsLeftTopFillDuotone;
export type { PanelsLeftTopFillDuotoneProps };
