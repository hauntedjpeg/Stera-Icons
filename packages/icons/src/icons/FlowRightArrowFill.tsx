import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowRightArrowFillProps = Omit<IconBaseProps, 'children'>;

const FlowRightArrowFill = memo(
  forwardRef<SVGSVGElement, FlowRightArrowFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.38 6.38c.34-.34.9-.34 1.24 0l5 5c.34.34.34.9 0 1.24l-5 5c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24l3.5-3.5H10.8c-.4 2.27-2.4 4-4.79 4-2.7 0-4.87-2.19-4.87-4.88C1.13 9.3 3.3 7.12 6 7.12c2.4 0 4.38 1.73 4.8 4h9.09l-3.5-3.5c-.35-.34-.35-.9 0-1.24" />
    </IconBase>
  ))
);

FlowRightArrowFill.displayName = 'FlowRightArrowFill';

// Triple export pattern
export { FlowRightArrowFill, FlowRightArrowFill as FlowRightArrowFillIcon, FlowRightArrowFill as SiFlowRightArrowFill };
export default FlowRightArrowFill;
export type { FlowRightArrowFillProps };
