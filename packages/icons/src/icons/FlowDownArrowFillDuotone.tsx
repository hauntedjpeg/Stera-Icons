import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowDownArrowFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowDownArrowFillDuotone = memo(
  forwardRef<SVGSVGElement, FlowDownArrowFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-down-arrow-fill-duotone" {...props}>
      <path d="M12 1.13a4.87 4.87 0 1 1 0 9.74 4.87 4.87 0 0 1 0-9.74" opacity={.4} />
        <path d="m12.87 19.89 3.51-3.5a.88.88 0 0 1 1.24 1.23l-5 5a.9.9 0 0 1-1.24 0l-5-5a.88.88 0 0 1 1.24-1.24l3.5 3.5V10.8a5 5 0 0 0 1.75 0z" />
    </IconBase>
  ))
);

FlowDownArrowFillDuotone.displayName = 'FlowDownArrowFillDuotone';

// Triple export pattern (lucide-react style)
export { FlowDownArrowFillDuotone, FlowDownArrowFillDuotone as FlowDownArrowFillDuotoneIcon, FlowDownArrowFillDuotone as SiFlowDownArrowFillDuotone };
export default FlowDownArrowFillDuotone;
export type { FlowDownArrowFillDuotoneProps };
