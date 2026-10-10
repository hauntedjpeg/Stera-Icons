import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowDownArrowRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowDownArrowRegularDuotone = memo(
  forwardRef<SVGSVGElement, FlowDownArrowRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.25c2.62 0 4.75 2.13 4.75 4.75s-2.13 4.75-4.75 4.75S7.25 8.62 7.25 6 9.38 1.25 12 1.25m0 1.5c-1.8 0-3.25 1.46-3.25 3.25 0 1.8 1.46 3.25 3.25 3.25 1.8 0 3.25-1.46 3.25-3.25 0-1.8-1.46-3.25-3.25-3.25" clipRule="evenodd" opacity={.4} />
        <path d="m12.75 20.19 3.72-3.72c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-5 5-.1.08-.14.08-.1.03-.04.01h-.02l-.13.02-.13-.01h-.02l-.04-.02q-.05 0-.1-.03l-.08-.04q-.09-.04-.16-.12l-5-5c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0l3.72 3.72v-9.5q.37.06.75.06t.75-.06z" />
    </IconBase>
  ))
);

FlowDownArrowRegularDuotone.displayName = 'FlowDownArrowRegularDuotone';

// Triple export pattern
export { FlowDownArrowRegularDuotone, FlowDownArrowRegularDuotone as FlowDownArrowRegularDuotoneIcon, FlowDownArrowRegularDuotone as SiFlowDownArrowRegularDuotone };
export default FlowDownArrowRegularDuotone;
export type { FlowDownArrowRegularDuotoneProps };
