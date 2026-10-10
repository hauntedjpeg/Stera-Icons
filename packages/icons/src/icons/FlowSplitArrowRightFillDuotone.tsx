import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitArrowRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowRightFillDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18 4v2h-3c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h3v2h-3c-1.66 0-3-1.34-3-3v-4H8.87q.13-.48.13-1t-.13-1H12V7c0-1.66 1.34-3 3-3z" opacity={.4} />
        <path d="M18 8c0 .4.24.77.62.92.37.16.8.07 1.09-.21l3-3q.28-.3.29-.71 0-.42-.3-.7l-3-3c-.28-.3-.7-.38-1.08-.22-.38.15-.62.52-.62.92zM18 22c0 .4.24.77.62.92.37.16.8.07 1.09-.21l3-3q.28-.3.29-.71 0-.42-.3-.7l-3-3c-.28-.3-.7-.38-1.08-.22-.38.15-.62.52-.62.92zM1 12c0 2.2 1.8 4 4 4s4-1.8 4-4-1.8-4-4-4-4 1.8-4 4" />
    </IconBase>
  ))
);

FlowSplitArrowRightFillDuotone.displayName = 'FlowSplitArrowRightFillDuotone';

// Triple export pattern
export { FlowSplitArrowRightFillDuotone, FlowSplitArrowRightFillDuotone as FlowSplitArrowRightFillDuotoneIcon, FlowSplitArrowRightFillDuotone as SiFlowSplitArrowRightFillDuotone };
export default FlowSplitArrowRightFillDuotone;
export type { FlowSplitArrowRightFillDuotoneProps };
