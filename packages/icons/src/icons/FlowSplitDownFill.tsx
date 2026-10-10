import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitDownFillProps = Omit<IconBaseProps, 'children'>;

const FlowSplitDownFill = memo(
  forwardRef<SVGSVGElement, FlowSplitDownFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 1c2.2 0 4 1.8 4 4 0 1.86-1.27 3.43-3 3.87V11h4c1.66 0 3 1.34 3 3v1.13c1.73.44 3 2 3 3.87 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-1.86 1.27-3.43 3-3.87V14c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v1.13c1.73.44 3 2 3 3.87 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-1.86 1.27-3.43 3-3.87V14c0-1.66 1.34-3 3-3h4V8.87c-1.73-.44-3-2-3-3.87 0-2.2 1.8-4 4-4" />
    </IconBase>
  ))
);

FlowSplitDownFill.displayName = 'FlowSplitDownFill';

// Triple export pattern
export { FlowSplitDownFill, FlowSplitDownFill as FlowSplitDownFillIcon, FlowSplitDownFill as SiFlowSplitDownFill };
export default FlowSplitDownFill;
export type { FlowSplitDownFillProps };
