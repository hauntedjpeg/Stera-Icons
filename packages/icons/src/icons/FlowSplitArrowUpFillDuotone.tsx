import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitArrowUpFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowUpFillDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowUpFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6 9c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V6h2v3c0 1.66-1.34 3-3 3h-4v3.13q-.48-.13-1-.13t-1 .13V12H7c-1.66 0-3-1.34-3-3V6h2z" opacity={.4} />
        <path d="M8 6c.4 0 .77-.24.92-.62.16-.37.07-.8-.21-1.09l-3-3Q5.4 1.01 5 1q-.42 0-.7.3l-3 3c-.3.28-.38.7-.22 1.08.15.38.52.62.92.62zM22 6c.4 0 .77-.24.92-.62.16-.37.07-.8-.21-1.09l-3-3Q19.4 1.01 19 1q-.42 0-.7.3l-3 3c-.3.28-.38.7-.22 1.08.15.38.52.62.92.62zM12 23c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4" />
    </IconBase>
  ))
);

FlowSplitArrowUpFillDuotone.displayName = 'FlowSplitArrowUpFillDuotone';

// Triple export pattern
export { FlowSplitArrowUpFillDuotone, FlowSplitArrowUpFillDuotone as FlowSplitArrowUpFillDuotoneIcon, FlowSplitArrowUpFillDuotone as SiFlowSplitArrowUpFillDuotone };
export default FlowSplitArrowUpFillDuotone;
export type { FlowSplitArrowUpFillDuotoneProps };
