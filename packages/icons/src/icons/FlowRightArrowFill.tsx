import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowRightArrowFillProps = Omit<IconBaseProps, 'children'>;

const FlowRightArrowFill = memo(
  forwardRef<SVGSVGElement, FlowRightArrowFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-right-arrow-fill" {...props}>
      <path d="M16.38 6.38a.9.9 0 0 1 1.24 0l5 5c.34.34.34.9 0 1.24l-5 5a.88.88 0 0 1-1.24-1.24l3.5-3.5H10.8a4.87 4.87 0 1 1 0-1.76h9.1l-3.5-3.5a.9.9 0 0 1 0-1.24" />
    </IconBase>
  ))
);

FlowRightArrowFill.displayName = 'FlowRightArrowFill';

// Triple export pattern (lucide-react style)
export { FlowRightArrowFill, FlowRightArrowFill as FlowRightArrowFillIcon, FlowRightArrowFill as SiFlowRightArrowFill };
export default FlowRightArrowFill;
export type { FlowRightArrowFillProps };
