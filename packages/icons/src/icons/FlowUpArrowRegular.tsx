import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowUpArrowRegularProps = Omit<IconBaseProps, 'children'>;

const FlowUpArrowRegular = memo(
  forwardRef<SVGSVGElement, FlowUpArrowRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M6.47 7.53c-.3-.3-.3-.77 0-1.06l5-5c.3-.3.77-.3 1.06 0l5 5c.3.3.3.77 0 1.06s-.77.3-1.06 0l-3.72-3.72v9.5c2.27.36 4 2.32 4 4.69 0 2.62-2.13 4.75-4.75 4.75S7.25 20.62 7.25 18c0-2.37 1.73-4.33 4-4.69v-9.5L7.53 7.53c-.3.3-.77.3-1.06 0M8.75 18c0 1.8 1.46 3.25 3.25 3.25 1.8 0 3.25-1.46 3.25-3.25 0-1.8-1.46-3.25-3.25-3.25-1.8 0-3.25 1.45-3.25 3.25" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowUpArrowRegular.displayName = 'FlowUpArrowRegular';

// Triple export pattern
export { FlowUpArrowRegular, FlowUpArrowRegular as FlowUpArrowRegularIcon, FlowUpArrowRegular as SiFlowUpArrowRegular };
export default FlowUpArrowRegular;
export type { FlowUpArrowRegularProps };
