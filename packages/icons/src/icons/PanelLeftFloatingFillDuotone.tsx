import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelLeftFloatingFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PanelLeftFloatingFillDuotone = memo(
  forwardRef<SVGSVGElement, PanelLeftFloatingFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M19 3.13c2.14 0 3.88 1.73 3.88 3.87v10c0 2.14-1.74 3.88-3.88 3.88H5c-2.14 0-3.87-1.74-3.87-3.88V7c0-2.14 1.73-3.87 3.87-3.87zM6.5 6.63c-1.03 0-1.87.83-1.87 1.87v7c0 1.04.84 1.88 1.87 1.88H9c1.04 0 1.88-.84 1.88-1.88v-7c0-1.04-.84-1.87-1.88-1.87z" clipRule="evenodd" opacity={.4} />
        <path d="M9 6.63c1.04 0 1.88.83 1.88 1.87v7c0 1.04-.84 1.88-1.88 1.88H6.5c-1.03 0-1.87-.84-1.87-1.88v-7c0-1.04.84-1.87 1.87-1.87z" />
    </IconBase>
  ))
);

PanelLeftFloatingFillDuotone.displayName = 'PanelLeftFloatingFillDuotone';

// Triple export pattern
export { PanelLeftFloatingFillDuotone, PanelLeftFloatingFillDuotone as PanelLeftFloatingFillDuotoneIcon, PanelLeftFloatingFillDuotone as SiPanelLeftFloatingFillDuotone };
export default PanelLeftFloatingFillDuotone;
export type { PanelLeftFloatingFillDuotoneProps };
