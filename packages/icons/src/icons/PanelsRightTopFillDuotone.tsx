import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelsRightTopFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PanelsRightTopFillDuotone = memo(
  forwardRef<SVGSVGElement, PanelsRightTopFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="panels-right-top-fill-duotone" {...props}>
      <path d="M15.13 9.88v9.24H5A2.13 2.13 0 0 1 2.88 17V9.88z" opacity={.4} />
        <path fillRule="evenodd" d="M19 3.13A3.9 3.9 0 0 1 22.88 7v10A3.9 3.9 0 0 1 19 20.88H5A3.9 3.9 0 0 1 1.13 17V7A3.9 3.9 0 0 1 5 3.13zM2.88 17c0 1.17.95 2.13 2.12 2.13h10.13V9.88H2.88zm14 2.13H19c1.17 0 2.13-.96 2.13-2.13V7c0-1.17-.96-2.12-2.13-2.12h-2.12zM5 4.88c-1.17 0-2.12.95-2.12 2.12v1.13h12.25V4.87z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelsRightTopFillDuotone.displayName = 'PanelsRightTopFillDuotone';

// Triple export pattern (lucide-react style)
export { PanelsRightTopFillDuotone, PanelsRightTopFillDuotone as PanelsRightTopFillDuotoneIcon, PanelsRightTopFillDuotone as SiPanelsRightTopFillDuotone };
export default PanelsRightTopFillDuotone;
export type { PanelsRightTopFillDuotoneProps };
