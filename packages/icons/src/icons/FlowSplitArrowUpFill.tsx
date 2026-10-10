import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitArrowUpFillProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowUpFill = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowUpFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 23c2.2 0 4-1.8 4-4 0-1.86-1.27-3.43-3-3.87V12h4c1.66 0 3-1.34 3-3V6h2c.4 0 .77-.24.92-.62.16-.37.07-.8-.21-1.09l-3-3-.1-.09q-.15-.1-.32-.16h-.04l-.05-.02h-.03L19 1q-.1 0-.17.02h-.03l-.05.01-.04.01q-.18.07-.31.16l-.1.1-3 3c-.3.28-.38.7-.22 1.08.15.38.52.62.92.62h2v3c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1V6h2c.4 0 .77-.24.92-.62.16-.37.07-.8-.21-1.09l-3-3-.1-.09q-.14-.1-.32-.16h-.04l-.05-.02h-.03L5 1q-.1 0-.17.02H4.8l-.05.01-.04.01q-.18.07-.31.16l-.1.1-3 3c-.3.28-.38.7-.22 1.08.15.38.52.62.92.62h2v3c0 1.66 1.34 3 3 3h4v3.13c-1.73.44-3 2-3 3.87 0 2.2 1.8 4 4 4" />
    </IconBase>
  ))
);

FlowSplitArrowUpFill.displayName = 'FlowSplitArrowUpFill';

// Triple export pattern
export { FlowSplitArrowUpFill, FlowSplitArrowUpFill as FlowSplitArrowUpFillIcon, FlowSplitArrowUpFill as SiFlowSplitArrowUpFill };
export default FlowSplitArrowUpFill;
export type { FlowSplitArrowUpFillProps };
