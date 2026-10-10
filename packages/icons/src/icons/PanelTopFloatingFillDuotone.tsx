import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelTopFloatingFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PanelTopFloatingFillDuotone = memo(
  forwardRef<SVGSVGElement, PanelTopFloatingFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M19 3.13c2.14 0 3.88 1.73 3.88 3.87v10c0 2.14-1.74 3.88-3.88 3.88H5c-2.14 0-3.87-1.74-3.87-3.88V7c0-2.14 1.73-3.87 3.87-3.87zM6.5 6.63c-1.04 0-1.87.83-1.87 1.87V11c0 1.04.83 1.88 1.87 1.88h11c1.03 0 1.87-.84 1.87-1.88V8.5c0-1.04-.84-1.87-1.87-1.87z" clipRule="evenodd" opacity={.4} />
        <path d="M17.5 6.63c1.03 0 1.87.83 1.87 1.87V11c0 1.04-.84 1.88-1.87 1.88h-11c-1.04 0-1.87-.84-1.87-1.88V8.5c0-1.04.83-1.87 1.87-1.87z" />
    </IconBase>
  ))
);

PanelTopFloatingFillDuotone.displayName = 'PanelTopFloatingFillDuotone';

// Triple export pattern
export { PanelTopFloatingFillDuotone, PanelTopFloatingFillDuotone as PanelTopFloatingFillDuotoneIcon, PanelTopFloatingFillDuotone as SiPanelTopFloatingFillDuotone };
export default PanelTopFloatingFillDuotone;
export type { PanelTopFloatingFillDuotoneProps };
