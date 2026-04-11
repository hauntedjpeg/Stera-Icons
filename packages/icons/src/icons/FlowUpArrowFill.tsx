import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowUpArrowFillProps = Omit<IconBaseProps, 'children'>;

const FlowUpArrowFill = memo(
  forwardRef<SVGSVGElement, FlowUpArrowFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.38 1.38a.9.9 0 0 1 1.24 0l5 5a.88.88 0 0 1-1.24 1.24l-3.5-3.5v9.08a4.88 4.88 0 1 1-1.76 0V4.11l-3.5 3.5a.88.88 0 0 1-1.24-1.23z" />
    </IconBase>
  ))
);

FlowUpArrowFill.displayName = 'FlowUpArrowFill';

// Triple export pattern (lucide-react style)
export { FlowUpArrowFill, FlowUpArrowFill as FlowUpArrowFillIcon, FlowUpArrowFill as SiFlowUpArrowFill };
export default FlowUpArrowFill;
export type { FlowUpArrowFillProps };
