import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitUpFillProps = Omit<IconBaseProps, 'children'>;

const FlowSplitUpFill = memo(
  forwardRef<SVGSVGElement, FlowSplitUpFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M1 5c0 1.86 1.27 3.43 3 3.87V10c0 1.66 1.34 3 3 3h4v2.13c-1.73.44-3 2-3 3.87 0 2.2 1.8 4 4 4s4-1.8 4-4c0-1.86-1.27-3.43-3-3.87V13h4c1.66 0 3-1.34 3-3V8.87c1.73-.44 3-2 3-3.87 0-2.2-1.8-4-4-4s-4 1.8-4 4c0 1.86 1.27 3.43 3 3.87V10c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1V8.87c1.73-.44 3-2 3-3.87 0-2.2-1.8-4-4-4S1 2.8 1 5" />
    </IconBase>
  ))
);

FlowSplitUpFill.displayName = 'FlowSplitUpFill';

// Triple export pattern
export { FlowSplitUpFill, FlowSplitUpFill as FlowSplitUpFillIcon, FlowSplitUpFill as SiFlowSplitUpFill };
export default FlowSplitUpFill;
export type { FlowSplitUpFillProps };
