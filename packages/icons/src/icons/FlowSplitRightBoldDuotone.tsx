import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.13 4Q15 4.48 15 5t.13 1H14c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h1.13q-.13.48-.13 1t.13 1H14c-1.66 0-3-1.34-3-3v-4H8.87q.13-.48.13-1t-.13-1H11V7c0-1.66 1.34-3 3-3z" opacity={.4} />
        <path fillRule="evenodd" d="M19 15c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4m0 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2M5 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4m0 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2M19 1c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4m0 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitRightBoldDuotone.displayName = 'FlowSplitRightBoldDuotone';

// Triple export pattern
export { FlowSplitRightBoldDuotone, FlowSplitRightBoldDuotone as FlowSplitRightBoldDuotoneIcon, FlowSplitRightBoldDuotone as SiFlowSplitRightBoldDuotone };
export default FlowSplitRightBoldDuotone;
export type { FlowSplitRightBoldDuotoneProps };
