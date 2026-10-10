import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowDownArrowFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowDownArrowFillDuotone = memo(
  forwardRef<SVGSVGElement, FlowDownArrowFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 1.13c2.7 0 4.88 2.18 4.88 4.87 0 2.7-2.19 4.88-4.88 4.88-2.7 0-4.87-2.19-4.87-4.88 0-2.7 2.18-4.87 4.87-4.87" opacity={.4} />
        <path d="m12.87 19.89 3.51-3.5c.34-.35.9-.35 1.24 0 .34.33.34.89 0 1.23l-5 5c-.34.34-.9.34-1.24 0l-5-5c-.34-.34-.34-.9 0-1.24s.9-.34 1.24 0l3.5 3.5V10.8q.43.09.88.09.46 0 .87-.09z" />
    </IconBase>
  ))
);

FlowDownArrowFillDuotone.displayName = 'FlowDownArrowFillDuotone';

// Triple export pattern
export { FlowDownArrowFillDuotone, FlowDownArrowFillDuotone as FlowDownArrowFillDuotoneIcon, FlowDownArrowFillDuotone as SiFlowDownArrowFillDuotone };
export default FlowDownArrowFillDuotone;
export type { FlowDownArrowFillDuotoneProps };
