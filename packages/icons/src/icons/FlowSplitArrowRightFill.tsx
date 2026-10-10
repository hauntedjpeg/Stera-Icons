import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitArrowRightFillProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowRightFill = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M1 12c0 2.2 1.8 4 4 4 1.86 0 3.43-1.27 3.87-3H12v4c0 1.66 1.34 3 3 3h3v2c0 .4.24.77.62.92.37.16.8.07 1.09-.21l3-3 .09-.1q.1-.15.16-.32v-.04l.02-.05v-.03L23 19q0-.1-.02-.17v-.03l-.01-.05-.01-.04q-.06-.18-.16-.31l-.1-.1-3-3c-.28-.3-.7-.38-1.08-.22-.38.15-.62.52-.62.92v2h-3c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h3v2c0 .4.24.77.62.92.37.16.8.07 1.09-.21l3-3 .09-.1q.1-.14.16-.32v-.04l.02-.05v-.03L23 5q0-.1-.02-.17V4.8l-.01-.05-.01-.04q-.06-.18-.16-.31l-.1-.1-3-3c-.28-.3-.7-.38-1.08-.22-.38.15-.62.52-.62.92v2h-3c-1.66 0-3 1.34-3 3v4H8.87c-.44-1.73-2-3-3.87-3-2.2 0-4 1.8-4 4" />
    </IconBase>
  ))
);

FlowSplitArrowRightFill.displayName = 'FlowSplitArrowRightFill';

// Triple export pattern
export { FlowSplitArrowRightFill, FlowSplitArrowRightFill as FlowSplitArrowRightFillIcon, FlowSplitArrowRightFill as SiFlowSplitArrowRightFill };
export default FlowSplitArrowRightFill;
export type { FlowSplitArrowRightFillProps };
