import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelsLeftBottomBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PanelsLeftBottomBoldDuotone = memo(
  forwardRef<SVGSVGElement, PanelsLeftBottomBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9 19v-3h12v-2H9V5H7v14z" opacity={.4} />
        <path fillRule="evenodd" d="M19 21c2.2 0 4-1.8 4-4V7c0-2.2-1.8-4-4-4H5C2.8 3 1 4.8 1 7v10c0 2.2 1.8 4 4 4zM5 19c-1.1 0-2-.9-2-2V7c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelsLeftBottomBoldDuotone.displayName = 'PanelsLeftBottomBoldDuotone';

// Triple export pattern
export { PanelsLeftBottomBoldDuotone, PanelsLeftBottomBoldDuotone as PanelsLeftBottomBoldDuotoneIcon, PanelsLeftBottomBoldDuotone as SiPanelsLeftBottomBoldDuotone };
export default PanelsLeftBottomBoldDuotone;
export type { PanelsLeftBottomBoldDuotoneProps };
