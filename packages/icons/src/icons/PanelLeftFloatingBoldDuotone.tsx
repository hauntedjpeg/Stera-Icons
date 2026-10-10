import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelLeftFloatingBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PanelLeftFloatingBoldDuotone = memo(
  forwardRef<SVGSVGElement, PanelLeftFloatingBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9 6.5c1.1 0 2 .9 2 2v7c0 1.1-.9 2-2 2H6.5c-1.1 0-2-.9-2-2v-7c0-1.1.9-2 2-2z" opacity={.4} />
        <path fillRule="evenodd" d="M19 3c2.2 0 4 1.8 4 4v10c0 2.2-1.8 4-4 4H5c-2.2 0-4-1.8-4-4V7c0-2.2 1.8-4 4-4zM5 5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

PanelLeftFloatingBoldDuotone.displayName = 'PanelLeftFloatingBoldDuotone';

// Triple export pattern
export { PanelLeftFloatingBoldDuotone, PanelLeftFloatingBoldDuotone as PanelLeftFloatingBoldDuotoneIcon, PanelLeftFloatingBoldDuotone as SiPanelLeftFloatingBoldDuotone };
export default PanelLeftFloatingBoldDuotone;
export type { PanelLeftFloatingBoldDuotoneProps };
