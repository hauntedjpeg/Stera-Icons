import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PanelTopFloatingFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PanelTopFloatingFillDuotone = memo(
  forwardRef<SVGSVGElement, PanelTopFloatingFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M19 3.13A3.9 3.9 0 0 1 22.88 7v10A3.9 3.9 0 0 1 19 20.88H5A3.9 3.9 0 0 1 1.13 17V7A3.9 3.9 0 0 1 5 3.13zM6.5 6.63c-1.04 0-1.87.83-1.87 1.87V11c0 1.04.83 1.88 1.87 1.88h11c1.03 0 1.87-.84 1.87-1.88V8.5c0-1.04-.84-1.87-1.87-1.87z" clipRule="evenodd" opacity={.4} />
        <path d="M17.5 6.63c1.03 0 1.87.83 1.87 1.87V11c0 1.04-.84 1.88-1.87 1.88h-11A1.9 1.9 0 0 1 4.63 11V8.5c0-1.04.83-1.87 1.87-1.87z" />
    </IconBase>
  ))
);

PanelTopFloatingFillDuotone.displayName = 'PanelTopFloatingFillDuotone';

// Triple export pattern (lucide-react style)
export { PanelTopFloatingFillDuotone, PanelTopFloatingFillDuotone as PanelTopFloatingFillDuotoneIcon, PanelTopFloatingFillDuotone as SiPanelTopFloatingFillDuotone };
export default PanelTopFloatingFillDuotone;
export type { PanelTopFloatingFillDuotoneProps };
