import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowDownArrowRegularProps = Omit<IconBaseProps, 'children'>;

const FlowDownArrowRegular = memo(
  forwardRef<SVGSVGElement, FlowDownArrowRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.25c2.62 0 4.75 2.13 4.75 4.75 0 2.37-1.73 4.33-4 4.69v9.5l3.72-3.72c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-5 5c-.3.3-.77.3-1.06 0l-5-5c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0l3.72 3.72v-9.5c-2.27-.36-4-2.32-4-4.69 0-2.62 2.13-4.75 4.75-4.75m0 1.5c-1.8 0-3.25 1.46-3.25 3.25 0 1.8 1.46 3.25 3.25 3.25 1.8 0 3.25-1.46 3.25-3.25 0-1.8-1.46-3.25-3.25-3.25" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowDownArrowRegular.displayName = 'FlowDownArrowRegular';

// Triple export pattern
export { FlowDownArrowRegular, FlowDownArrowRegular as FlowDownArrowRegularIcon, FlowDownArrowRegular as SiFlowDownArrowRegular };
export default FlowDownArrowRegular;
export type { FlowDownArrowRegularProps };
