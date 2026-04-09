import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowUpArrowFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowUpArrowFillDuotone = memo(
  forwardRef<SVGSVGElement, FlowUpArrowFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-up-arrow-fill-duotone" {...props}>
      <path d="M12 13.13a4.87 4.87 0 1 1 0 9.74 4.87 4.87 0 0 1 0-9.75" opacity={.4} />
        <path d="M12 1.13q.36 0 .62.25l5 5a.88.88 0 0 1-1.24 1.24l-3.5-3.5v9.08a5 5 0 0 0-1.76 0V4.11l-3.5 3.5a.88.88 0 0 1-1.24-1.23l5-5 .06-.06q.25-.19.56-.2" />
    </IconBase>
  ))
);

FlowUpArrowFillDuotone.displayName = 'FlowUpArrowFillDuotone';

// Triple export pattern (lucide-react style)
export { FlowUpArrowFillDuotone, FlowUpArrowFillDuotone as FlowUpArrowFillDuotoneIcon, FlowUpArrowFillDuotone as SiFlowUpArrowFillDuotone };
export default FlowUpArrowFillDuotone;
export type { FlowUpArrowFillDuotoneProps };
