import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitArrowUpBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowUpBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowUpBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 4.41V9c0 1.66-1.34 3-3 3h-4v3.13q-.48-.13-1-.13t-1 .13V12H7c-1.66 0-3-1.34-3-3V4.41l1-1 1 1V9c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V4.41l1-1z" opacity={.4} />
        <path d="M7.3 5.7c.38.4 1.02.4 1.4 0 .4-.38.4-1.02 0-1.4l-3-3Q5.43 1 5 1t-.7.3l-3 3c-.4.38-.4 1.02 0 1.4.38.4 1.02.4 1.4 0L5 3.42zM21.3 5.7c.38.4 1.02.4 1.4 0 .4-.38.4-1.02 0-1.4l-3-3Q19.43 1 19 1t-.7.3l-3 3c-.4.38-.4 1.02 0 1.4.38.4 1.02.4 1.4 0L19 3.42z" />
        <path fillRule="evenodd" d="M12 23c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4m0-2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitArrowUpBoldDuotone.displayName = 'FlowSplitArrowUpBoldDuotone';

// Triple export pattern
export { FlowSplitArrowUpBoldDuotone, FlowSplitArrowUpBoldDuotone as FlowSplitArrowUpBoldDuotoneIcon, FlowSplitArrowUpBoldDuotone as SiFlowSplitArrowUpBoldDuotone };
export default FlowSplitArrowUpBoldDuotone;
export type { FlowSplitArrowUpBoldDuotoneProps };
