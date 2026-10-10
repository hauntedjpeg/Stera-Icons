import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowUpArrowRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowUpArrowRegularDuotone = memo(
  forwardRef<SVGSVGElement, FlowUpArrowRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 13.25c2.62 0 4.75 2.13 4.75 4.75s-2.13 4.75-4.75 4.75S7.25 20.62 7.25 18s2.13-4.75 4.75-4.75m0 1.5c-1.8 0-3.25 1.46-3.25 3.25 0 1.8 1.46 3.25 3.25 3.25 1.8 0 3.25-1.46 3.25-3.25 0-1.8-1.46-3.25-3.25-3.25" clipRule="evenodd" opacity={.4} />
        <path d="M12 1.25q.31 0 .53.22l5 5c.3.3.3.77 0 1.06s-.77.3-1.06 0l-3.72-3.72v9.5q-.37-.06-.75-.06t-.75.06V3.8L7.53 7.53c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l5-5 .11-.1q.2-.12.42-.12" />
    </IconBase>
  ))
);

FlowUpArrowRegularDuotone.displayName = 'FlowUpArrowRegularDuotone';

// Triple export pattern
export { FlowUpArrowRegularDuotone, FlowUpArrowRegularDuotone as FlowUpArrowRegularDuotoneIcon, FlowUpArrowRegularDuotone as SiFlowUpArrowRegularDuotone };
export default FlowUpArrowRegularDuotone;
export type { FlowUpArrowRegularDuotoneProps };
