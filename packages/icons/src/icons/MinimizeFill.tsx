import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MinimizeFillProps = Omit<IconBaseProps, 'children'>;

const MinimizeFill = memo(
  forwardRef<SVGSVGElement, MinimizeFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.5 13.75a2.75 2.75 0 0 1 2.75 2.75V20a1.25 1.25 0 1 1-2.5 0v-3.5a.25.25 0 0 0-.25-.25H4a1.25 1.25 0 1 1 0-2.5zM20 13.75a1.25 1.25 0 1 1 0 2.5h-3.5a.25.25 0 0 0-.25.25V20a1.25 1.25 0 1 1-2.5 0v-3.5a2.75 2.75 0 0 1 2.75-2.75zM9 2.75c.69 0 1.25.56 1.25 1.25v3.5a2.75 2.75 0 0 1-2.75 2.75H4a1.25 1.25 0 1 1 0-2.5h3.5c.14 0 .25-.11.25-.25V4c0-.69.56-1.25 1.25-1.25M15 2.75c.69 0 1.25.56 1.25 1.25v3.5c0 .14.11.25.25.25H20a1.25 1.25 0 1 1 0 2.5h-3.5a2.75 2.75 0 0 1-2.75-2.75V4c0-.69.56-1.25 1.25-1.25" />
    </IconBase>
  ))
);

MinimizeFill.displayName = 'MinimizeFill';

// Triple export pattern (lucide-react style)
export { MinimizeFill, MinimizeFill as MinimizeFillIcon, MinimizeFill as SiMinimizeFill };
export default MinimizeFill;
export type { MinimizeFillProps };
