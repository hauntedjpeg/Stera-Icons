import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowUpArrowBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowUpArrowBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlowUpArrowBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 13c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5m0 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3" clipRule="evenodd" opacity={.4} />
        <path d="M12 1q.42 0 .7.3l5 5c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0L13 4.42v8.69q-.49-.1-1-.1-.52 0-1 .1V4.41l-3.3 3.3c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42l5-5 .07-.06Q11.64 1 12 1" />
    </IconBase>
  ))
);

FlowUpArrowBoldDuotone.displayName = 'FlowUpArrowBoldDuotone';

// Triple export pattern
export { FlowUpArrowBoldDuotone, FlowUpArrowBoldDuotone as FlowUpArrowBoldDuotoneIcon, FlowUpArrowBoldDuotone as SiFlowUpArrowBoldDuotone };
export default FlowUpArrowBoldDuotone;
export type { FlowUpArrowBoldDuotoneProps };
