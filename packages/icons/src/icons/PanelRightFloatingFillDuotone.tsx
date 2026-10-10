import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelRightFloatingFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PanelRightFloatingFillDuotone = memo(
  forwardRef<SVGSVGElement, PanelRightFloatingFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M19 3.13c2.14 0 3.88 1.73 3.88 3.87v10c0 2.14-1.74 3.88-3.88 3.88H5c-2.14 0-3.87-1.74-3.87-3.88V7c0-2.14 1.73-3.87 3.87-3.87zm-4 3.5c-1.04 0-1.87.83-1.87 1.87v7c0 1.04.83 1.88 1.87 1.88h2.5c1.03 0 1.87-.84 1.87-1.88v-7c0-1.04-.84-1.87-1.87-1.87z" clipRule="evenodd" opacity={.4} />
        <path d="M17.5 6.63c1.03 0 1.87.83 1.87 1.87v7c0 1.04-.84 1.88-1.87 1.88H15c-1.04 0-1.87-.84-1.87-1.88v-7c0-1.04.83-1.87 1.87-1.87z" />
    </IconBase>
  ))
);

PanelRightFloatingFillDuotone.displayName = 'PanelRightFloatingFillDuotone';

// Triple export pattern
export { PanelRightFloatingFillDuotone, PanelRightFloatingFillDuotone as PanelRightFloatingFillDuotoneIcon, PanelRightFloatingFillDuotone as SiPanelRightFloatingFillDuotone };
export default PanelRightFloatingFillDuotone;
export type { PanelRightFloatingFillDuotoneProps };
