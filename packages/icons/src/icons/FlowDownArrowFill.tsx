import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowDownArrowFillProps = Omit<IconBaseProps, 'children'>;

const FlowDownArrowFill = memo(
  forwardRef<SVGSVGElement, FlowDownArrowFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 1.13c2.7 0 4.87 2.18 4.87 4.87 0 2.4-1.72 4.38-4 4.8v9.09l3.51-3.5c.34-.35.9-.35 1.24 0 .34.33.34.89 0 1.23l-5 5c-.34.34-.9.34-1.24 0l-5-5c-.34-.34-.34-.9 0-1.24s.9-.34 1.24 0l3.5 3.5V10.8c-2.27-.4-4-2.4-4-4.79 0-2.7 2.19-4.87 4.88-4.87" />
    </IconBase>
  ))
);

FlowDownArrowFill.displayName = 'FlowDownArrowFill';

// Triple export pattern
export { FlowDownArrowFill, FlowDownArrowFill as FlowDownArrowFillIcon, FlowDownArrowFill as SiFlowDownArrowFill };
export default FlowDownArrowFill;
export type { FlowDownArrowFillProps };
