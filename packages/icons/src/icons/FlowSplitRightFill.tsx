import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitRightFillProps = Omit<IconBaseProps, 'children'>;

const FlowSplitRightFill = memo(
  forwardRef<SVGSVGElement, FlowSplitRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19 1c-1.86 0-3.43 1.27-3.87 3H14c-1.66 0-3 1.34-3 3v4H8.87c-.44-1.73-2-3-3.87-3-2.2 0-4 1.8-4 4s1.8 4 4 4c1.86 0 3.43-1.27 3.87-3H11v4c0 1.66 1.34 3 3 3h1.13c.44 1.73 2 3 3.87 3 2.2 0 4-1.8 4-4s-1.8-4-4-4c-1.86 0-3.43 1.27-3.87 3H14c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h1.13c.44 1.73 2 3 3.87 3 2.2 0 4-1.8 4-4s-1.8-4-4-4" />
    </IconBase>
  ))
);

FlowSplitRightFill.displayName = 'FlowSplitRightFill';

// Triple export pattern
export { FlowSplitRightFill, FlowSplitRightFill as FlowSplitRightFillIcon, FlowSplitRightFill as SiFlowSplitRightFill };
export default FlowSplitRightFill;
export type { FlowSplitRightFillProps };
