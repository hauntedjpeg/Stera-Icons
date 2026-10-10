import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelsRightTopBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PanelsRightTopBoldDuotone = memo(
  forwardRef<SVGSVGElement, PanelsRightTopBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15 5v3H3v2h12v9h2V5z" opacity={.4} />
        <path fillRule="evenodd" d="M5 3C2.8 3 1 4.8 1 7v10c0 2.2 1.8 4 4 4h14c2.2 0 4-1.8 4-4V7c0-2.2-1.8-4-4-4zm14 2c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelsRightTopBoldDuotone.displayName = 'PanelsRightTopBoldDuotone';

// Triple export pattern
export { PanelsRightTopBoldDuotone, PanelsRightTopBoldDuotone as PanelsRightTopBoldDuotoneIcon, PanelsRightTopBoldDuotone as SiPanelsRightTopBoldDuotone };
export default PanelsRightTopBoldDuotone;
export type { PanelsRightTopBoldDuotoneProps };
