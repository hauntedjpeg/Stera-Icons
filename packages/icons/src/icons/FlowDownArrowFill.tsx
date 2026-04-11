import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowDownArrowFillProps = Omit<IconBaseProps, 'children'>;

const FlowDownArrowFill = memo(
  forwardRef<SVGSVGElement, FlowDownArrowFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 1.13a4.87 4.87 0 0 1 .87 9.66v9.1l3.51-3.5a.88.88 0 0 1 1.24 1.23l-5 5a.9.9 0 0 1-1.24 0l-5-5a.88.88 0 0 1 1.24-1.24l3.5 3.5V10.8A4.88 4.88 0 0 1 12 1.13" />
    </IconBase>
  ))
);

FlowDownArrowFill.displayName = 'FlowDownArrowFill';

// Triple export pattern (lucide-react style)
export { FlowDownArrowFill, FlowDownArrowFill as FlowDownArrowFillIcon, FlowDownArrowFill as SiFlowDownArrowFill };
export default FlowDownArrowFill;
export type { FlowDownArrowFillProps };
