import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitArrowLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9 4c1.66 0 3 1.34 3 3v4h3.13q-.13.48-.13 1t.13 1H12v4c0 1.66-1.34 3-3 3H6v-2h3c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H6V4z" opacity={.4} />
        <path d="M6 8c0 .4-.24.77-.62.92-.37.16-.8.07-1.09-.21l-3-3Q1.01 5.4 1 5q0-.42.3-.7l3-3c.28-.3.7-.38 1.08-.22.38.15.62.52.62.92zM6 22c0 .4-.24.77-.62.92-.37.16-.8.07-1.09-.21l-3-3Q1.01 19.4 1 19q0-.42.3-.7l3-3c.28-.3.7-.38 1.08-.22.38.15.62.52.62.92zM23 12c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4" />
    </IconBase>
  ))
);

FlowSplitArrowLeftFillDuotone.displayName = 'FlowSplitArrowLeftFillDuotone';

// Triple export pattern
export { FlowSplitArrowLeftFillDuotone, FlowSplitArrowLeftFillDuotone as FlowSplitArrowLeftFillDuotoneIcon, FlowSplitArrowLeftFillDuotone as SiFlowSplitArrowLeftFillDuotone };
export default FlowSplitArrowLeftFillDuotone;
export type { FlowSplitArrowLeftFillDuotoneProps };
