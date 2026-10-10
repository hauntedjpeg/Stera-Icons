import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MinimizeFillProps = Omit<IconBaseProps, 'children'>;

const MinimizeFill = memo(
  forwardRef<SVGSVGElement, MinimizeFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.5 13.75c1.52 0 2.75 1.23 2.75 2.75V20c0 .69-.56 1.25-1.25 1.25S7.75 20.69 7.75 20v-3.5c0-.14-.11-.25-.25-.25H4c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM20 13.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25h-3.5q-.23.02-.25.25V20c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25v-3.5c0-1.52 1.23-2.75 2.75-2.75zM9 2.75c.69 0 1.25.56 1.25 1.25v3.5c0 1.52-1.23 2.75-2.75 2.75H4c-.69 0-1.25-.56-1.25-1.25S3.31 7.75 4 7.75h3.5c.14 0 .25-.11.25-.25V4c0-.69.56-1.25 1.25-1.25M15 2.75c.69 0 1.25.56 1.25 1.25v3.5c0 .14.11.25.25.25H20c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25h-3.5c-1.52 0-2.75-1.23-2.75-2.75V4c0-.69.56-1.25 1.25-1.25" />
    </IconBase>
  ))
);

MinimizeFill.displayName = 'MinimizeFill';

// Triple export pattern
export { MinimizeFill, MinimizeFill as MinimizeFillIcon, MinimizeFill as SiMinimizeFill };
export default MinimizeFill;
export type { MinimizeFillProps };
