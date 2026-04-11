import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelRightFloatingFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PanelRightFloatingFillDuotone = memo(
  forwardRef<SVGSVGElement, PanelRightFloatingFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M19 3.13A3.9 3.9 0 0 1 22.88 7v10A3.9 3.9 0 0 1 19 20.88H5A3.9 3.9 0 0 1 1.13 17V7A3.9 3.9 0 0 1 5 3.13zm-4 3.5c-1.04 0-1.87.83-1.87 1.87v7c0 1.04.83 1.88 1.87 1.88h2.5c1.03 0 1.87-.84 1.87-1.88v-7c0-1.04-.84-1.87-1.87-1.87z" clipRule="evenodd" opacity={.4} />
        <path d="M17.5 6.63c1.03 0 1.87.83 1.87 1.87v7c0 1.04-.84 1.88-1.87 1.88H15a1.9 1.9 0 0 1-1.87-1.88v-7c0-1.04.83-1.87 1.87-1.87z" />
    </IconBase>
  ))
);

PanelRightFloatingFillDuotone.displayName = 'PanelRightFloatingFillDuotone';

// Triple export pattern (lucide-react style)
export { PanelRightFloatingFillDuotone, PanelRightFloatingFillDuotone as PanelRightFloatingFillDuotoneIcon, PanelRightFloatingFillDuotone as SiPanelRightFloatingFillDuotone };
export default PanelRightFloatingFillDuotone;
export type { PanelRightFloatingFillDuotoneProps };
