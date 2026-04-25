import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowUpArrowBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowUpArrowBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlowUpArrowBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 13a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6" clipRule="evenodd" opacity={.4} />
        <path d="M12 1a1 1 0 0 1 .7.3l5 5a1 1 0 1 1-1.4 1.4L13 4.42v8.69a5 5 0 0 0-2 0V4.41l-3.3 3.3a1 1 0 1 1-1.4-1.42l5-5 .07-.06A1 1 0 0 1 12 1" />
    </IconBase>
  ))
);

FlowUpArrowBoldDuotone.displayName = 'FlowUpArrowBoldDuotone';

// Triple export pattern (lucide-react style)
export { FlowUpArrowBoldDuotone, FlowUpArrowBoldDuotone as FlowUpArrowBoldDuotoneIcon, FlowUpArrowBoldDuotone as SiFlowUpArrowBoldDuotone };
export default FlowUpArrowBoldDuotone;
export type { FlowUpArrowBoldDuotoneProps };
