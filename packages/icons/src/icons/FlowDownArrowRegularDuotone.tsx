import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowDownArrowRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowDownArrowRegularDuotone = memo(
  forwardRef<SVGSVGElement, FlowDownArrowRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.25a4.75 4.75 0 1 1 0 9.5 4.75 4.75 0 0 1 0-9.5m0 1.5a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5" clipRule="evenodd" opacity={.4} />
        <path d="m12.75 20.19 3.72-3.72a.75.75 0 0 1 1.06 1.06l-5 5a1 1 0 0 1-.24.16l-.1.03-.04.01h-.02a1 1 0 0 1-.26 0h-.06l-.1-.04-.08-.04-.16-.12-5-5a.75.75 0 1 1 1.06-1.06l3.72 3.72v-9.5a5 5 0 0 0 1.5 0z" />
    </IconBase>
  ))
);

FlowDownArrowRegularDuotone.displayName = 'FlowDownArrowRegularDuotone';

// Triple export pattern (lucide-react style)
export { FlowDownArrowRegularDuotone, FlowDownArrowRegularDuotone as FlowDownArrowRegularDuotoneIcon, FlowDownArrowRegularDuotone as SiFlowDownArrowRegularDuotone };
export default FlowDownArrowRegularDuotone;
export type { FlowDownArrowRegularDuotoneProps };
