import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelBottomFloatingBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PanelBottomFloatingBoldDuotone = memo(
  forwardRef<SVGSVGElement, PanelBottomFloatingBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.5 11c1.1 0 2 .9 2 2v2.5c0 1.1-.9 2-2 2h-11c-1.1 0-2-.9-2-2V13c0-1.1.9-2 2-2z" opacity={.4} />
        <path fillRule="evenodd" d="M19 3c2.2 0 4 1.8 4 4v10c0 2.2-1.8 4-4 4H5c-2.2 0-4-1.8-4-4V7c0-2.2 1.8-4 4-4zM5 5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelBottomFloatingBoldDuotone.displayName = 'PanelBottomFloatingBoldDuotone';

// Triple export pattern
export { PanelBottomFloatingBoldDuotone, PanelBottomFloatingBoldDuotone as PanelBottomFloatingBoldDuotoneIcon, PanelBottomFloatingBoldDuotone as SiPanelBottomFloatingBoldDuotone };
export default PanelBottomFloatingBoldDuotone;
export type { PanelBottomFloatingBoldDuotoneProps };
