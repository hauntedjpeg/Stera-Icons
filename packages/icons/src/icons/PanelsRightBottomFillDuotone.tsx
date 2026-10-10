import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelsRightBottomFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PanelsRightBottomFillDuotone = memo(
  forwardRef<SVGSVGElement, PanelsRightBottomFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.13 4.88v9.25H2.88V7c0-1.17.95-2.12 2.12-2.12z" opacity={.4} />
        <path fillRule="evenodd" d="M19 3.13c2.14 0 3.88 1.73 3.88 3.87v10c0 2.14-1.74 3.88-3.88 3.88H5c-2.14 0-3.87-1.74-3.87-3.88V7c0-2.14 1.73-3.87 3.87-3.87zM2.88 15.88V17c0 1.17.95 2.13 2.12 2.13h10.13v-3.25zm14 3.24H19c1.17 0 2.13-.95 2.13-2.12V7c0-1.17-.96-2.12-2.13-2.12h-2.12zM5 4.89c-1.17 0-2.12.95-2.12 2.12v7.13h12.25V4.87z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelsRightBottomFillDuotone.displayName = 'PanelsRightBottomFillDuotone';

// Triple export pattern
export { PanelsRightBottomFillDuotone, PanelsRightBottomFillDuotone as PanelsRightBottomFillDuotoneIcon, PanelsRightBottomFillDuotone as SiPanelsRightBottomFillDuotone };
export default PanelsRightBottomFillDuotone;
export type { PanelsRightBottomFillDuotoneProps };
