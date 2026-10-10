import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelsLeftTopBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PanelsLeftTopBoldDuotone = memo(
  forwardRef<SVGSVGElement, PanelsLeftTopBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9 5v3h12v2H9v9H7V5z" opacity={.4} />
        <path fillRule="evenodd" d="M19 3c2.2 0 4 1.8 4 4v10c0 2.2-1.8 4-4 4H5c-2.2 0-4-1.8-4-4V7c0-2.2 1.8-4 4-4zM5 5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelsLeftTopBoldDuotone.displayName = 'PanelsLeftTopBoldDuotone';

// Triple export pattern
export { PanelsLeftTopBoldDuotone, PanelsLeftTopBoldDuotone as PanelsLeftTopBoldDuotoneIcon, PanelsLeftTopBoldDuotone as SiPanelsLeftTopBoldDuotone };
export default PanelsLeftTopBoldDuotone;
export type { PanelsLeftTopBoldDuotoneProps };
