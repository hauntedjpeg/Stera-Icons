import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowRightArrowFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowRightArrowFillDuotone = memo(
  forwardRef<SVGSVGElement, FlowRightArrowFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-right-arrow-fill-duotone" {...props}>
      <path d="M6 7.13a4.87 4.87 0 1 1 0 9.74 4.87 4.87 0 0 1 0-9.75" opacity={.4} />
        <path d="M16.38 6.38a.9.9 0 0 1 1.24 0l5 5a.9.9 0 0 1 0 1.24l-5 5a.88.88 0 0 1-1.24-1.24l3.5-3.5H10.8a5 5 0 0 0 0-1.76h9.1l-3.5-3.5a.9.9 0 0 1 0-1.24" />
    </IconBase>
  ))
);

FlowRightArrowFillDuotone.displayName = 'FlowRightArrowFillDuotone';

// Triple export pattern (lucide-react style)
export { FlowRightArrowFillDuotone, FlowRightArrowFillDuotone as FlowRightArrowFillDuotoneIcon, FlowRightArrowFillDuotone as SiFlowRightArrowFillDuotone };
export default FlowRightArrowFillDuotone;
export type { FlowRightArrowFillDuotoneProps };
