import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitUpBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitUpBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitUpBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 10c0 1.66-1.34 3-3 3h-4v2.13q-.48-.13-1-.13t-1 .13V13H7c-1.66 0-3-1.34-3-3V8.87Q4.48 9 5 9t1-.13V10c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V8.87q.48.13 1 .13t1-.13z" opacity={.4} />
        <path fillRule="evenodd" d="M15 5c0 2.2 1.8 4 4 4s4-1.8 4-4-1.8-4-4-4-4 1.8-4 4m2 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2M8 19c0 2.2 1.8 4 4 4s4-1.8 4-4-1.8-4-4-4-4 1.8-4 4m2 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2M1 5c0 2.2 1.8 4 4 4s4-1.8 4-4-1.8-4-4-4-4 1.8-4 4m2 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitUpBoldDuotone.displayName = 'FlowSplitUpBoldDuotone';

// Triple export pattern
export { FlowSplitUpBoldDuotone, FlowSplitUpBoldDuotone as FlowSplitUpBoldDuotoneIcon, FlowSplitUpBoldDuotone as SiFlowSplitUpBoldDuotone };
export default FlowSplitUpBoldDuotone;
export type { FlowSplitUpBoldDuotoneProps };
