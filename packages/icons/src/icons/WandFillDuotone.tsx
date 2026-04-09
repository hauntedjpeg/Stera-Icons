import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WandFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const WandFillDuotone = memo(
  forwardRef<SVGSVGElement, WandFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="wand-fill-duotone" {...props}>
      <path d="M12 17.13c.48 0 .88.39.88.87v3a.88.88 0 0 1-1.76 0v-3c0-.48.4-.87.88-.87M17.88 17.88a.9.9 0 0 1 1.24 0l1 1a.88.88 0 0 1-1.24 1.24l-1-1a.9.9 0 0 1 0-1.24M6 11.13a.88.88 0 0 1 0 1.74H3a.88.88 0 0 1 0-1.74zM21 11.13a.88.88 0 0 1 0 1.74h-3a.88.88 0 0 1 0-1.74zM12 2.13c.48 0 .88.39.88.87v3a.88.88 0 0 1-1.76 0V3c0-.48.4-.87.88-.87M3.88 3.88a.9.9 0 0 1 1.24 0l1 1a.88.88 0 0 1-1.24 1.24l-1-1a.9.9 0 0 1 0-1.24M18.88 3.88a.88.88 0 0 1 1.24 1.24l-1 1a.88.88 0 0 1-1.24-1.24z" opacity={0.4} />
        <path d="M15.57 7.24a.88.88 0 0 1 1.2 1.19l-1.08 1.91a3.4 3.4 0 0 0 0 3.32l1.07 1.91a.88.88 0 0 1-1.19 1.2l-1.91-1.08a3.4 3.4 0 0 0-3.3 0h-.02l-1.19.67q-.6.33-1.11.84l-3.92 3.92a.88.88 0 0 1-1.24-1.24l3.91-3.91.01-.01q.49-.5.83-1.1l.68-1.2a3.4 3.4 0 0 0 0-3.32L7.24 8.43a.88.88 0 0 1 1.19-1.2l1.91 1.08a3.4 3.4 0 0 0 3.32 0z" />
    </IconBase>
  ))
);

WandFillDuotone.displayName = 'WandFillDuotone';

// Triple export pattern (lucide-react style)
export { WandFillDuotone, WandFillDuotone as WandFillDuotoneIcon, WandFillDuotone as SiWandFillDuotone };
export default WandFillDuotone;
export type { WandFillDuotoneProps };
