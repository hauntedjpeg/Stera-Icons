import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MinimizeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MinimizeFillDuotone = memo(
  forwardRef<SVGSVGElement, MinimizeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.5 13.75a2.75 2.75 0 0 1 2.75 2.75V20a1.25 1.25 0 1 1-2.5 0v-3.5a.25.25 0 0 0-.25-.25H4a1.25 1.25 0 1 1 0-2.5zM15 2.75c.69 0 1.25.56 1.25 1.25v3.5c0 .14.11.25.25.25H20a1.25 1.25 0 1 1 0 2.5h-3.5a2.75 2.75 0 0 1-2.75-2.75V4c0-.69.56-1.25 1.25-1.25" opacity={0.4} />
        <path d="M20 13.75a1.25 1.25 0 1 1 0 2.5h-3.5a.25.25 0 0 0-.25.25V20a1.25 1.25 0 1 1-2.5 0v-3.5a2.75 2.75 0 0 1 2.75-2.75zM9 2.75c.69 0 1.25.56 1.25 1.25v3.5a2.75 2.75 0 0 1-2.75 2.75H4a1.25 1.25 0 1 1 0-2.5h3.5c.14 0 .25-.11.25-.25V4c0-.69.56-1.25 1.25-1.25" />
    </IconBase>
  ))
);

MinimizeFillDuotone.displayName = 'MinimizeFillDuotone';

// Triple export pattern (lucide-react style)
export { MinimizeFillDuotone, MinimizeFillDuotone as MinimizeFillDuotoneIcon, MinimizeFillDuotone as SiMinimizeFillDuotone };
export default MinimizeFillDuotone;
export type { MinimizeFillDuotoneProps };
