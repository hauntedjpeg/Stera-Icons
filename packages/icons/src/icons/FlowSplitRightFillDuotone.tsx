import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitRightFillDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19 15c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4M5 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4M19 1c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4" />
        <path d="M15.13 4Q15 4.48 15 5t.13 1H14c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h1.13q-.13.48-.13 1t.13 1H14c-1.66 0-3-1.34-3-3v-4H8.87q.13-.48.13-1t-.13-1H11V7c0-1.66 1.34-3 3-3z" opacity={.4} />
    </IconBase>
  ))
);

FlowSplitRightFillDuotone.displayName = 'FlowSplitRightFillDuotone';

// Triple export pattern
export { FlowSplitRightFillDuotone, FlowSplitRightFillDuotone as FlowSplitRightFillDuotoneIcon, FlowSplitRightFillDuotone as SiFlowSplitRightFillDuotone };
export default FlowSplitRightFillDuotone;
export type { FlowSplitRightFillDuotoneProps };
