import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelLeftFloatingFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PanelLeftFloatingFillDuotone = memo(
  forwardRef<SVGSVGElement, PanelLeftFloatingFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="panel-left-floating-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M19 3.13A3.9 3.9 0 0 1 22.88 7v10A3.9 3.9 0 0 1 19 20.88H5A3.9 3.9 0 0 1 1.13 17V7A3.9 3.9 0 0 1 5 3.13zM6.5 6.63c-1.03 0-1.87.83-1.87 1.87v7c0 1.04.84 1.88 1.87 1.88H9c1.04 0 1.88-.84 1.88-1.88v-7c0-1.04-.84-1.87-1.88-1.87z" clipRule="evenodd" opacity={.4} />
        <path d="M9 6.63c1.04 0 1.88.83 1.88 1.87v7c0 1.04-.84 1.88-1.88 1.88H6.5a1.9 1.9 0 0 1-1.87-1.88v-7c0-1.04.84-1.87 1.87-1.87z" />
    </IconBase>
  ))
);

PanelLeftFloatingFillDuotone.displayName = 'PanelLeftFloatingFillDuotone';

// Triple export pattern (lucide-react style)
export { PanelLeftFloatingFillDuotone, PanelLeftFloatingFillDuotone as PanelLeftFloatingFillDuotoneIcon, PanelLeftFloatingFillDuotone as SiPanelLeftFloatingFillDuotone };
export default PanelLeftFloatingFillDuotone;
export type { PanelLeftFloatingFillDuotoneProps };
