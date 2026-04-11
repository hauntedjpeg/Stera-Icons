import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelsRightBottomFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PanelsRightBottomFillDuotone = memo(
  forwardRef<SVGSVGElement, PanelsRightBottomFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.13 4.88v9.25H2.88V7c0-1.17.95-2.12 2.12-2.12z" opacity={.4} />
        <path fillRule="evenodd" d="M19 3.13A3.9 3.9 0 0 1 22.88 7v10A3.9 3.9 0 0 1 19 20.88H5A3.9 3.9 0 0 1 1.13 17V7A3.9 3.9 0 0 1 5 3.13zM2.88 15.88V17c0 1.17.95 2.13 2.12 2.13h10.13v-3.25zm14 3.24H19c1.17 0 2.13-.95 2.13-2.12V7c0-1.17-.96-2.12-2.13-2.12h-2.12zM5 4.89c-1.17 0-2.12.95-2.12 2.12v7.13h12.25V4.87z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelsRightBottomFillDuotone.displayName = 'PanelsRightBottomFillDuotone';

// Triple export pattern (lucide-react style)
export { PanelsRightBottomFillDuotone, PanelsRightBottomFillDuotone as PanelsRightBottomFillDuotoneIcon, PanelsRightBottomFillDuotone as SiPanelsRightBottomFillDuotone };
export default PanelsRightBottomFillDuotone;
export type { PanelsRightBottomFillDuotoneProps };
