import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowRightArrowFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowRightArrowFillDuotone = memo(
  forwardRef<SVGSVGElement, FlowRightArrowFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6 7.13c2.7 0 4.88 2.18 4.88 4.87 0 2.7-2.19 4.88-4.88 4.88-2.7 0-4.87-2.19-4.87-4.88C1.13 9.3 3.3 7.13 6 7.13" opacity={.4} />
        <path d="M16.38 6.38c.34-.34.9-.34 1.24 0l5 5q.24.26.25.62 0 .35-.25.62l-5 5c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24l3.5-3.5H10.8q.09-.43.09-.88 0-.46-.09-.88h9.1l-3.5-3.5c-.35-.34-.35-.9 0-1.24" />
    </IconBase>
  ))
);

FlowRightArrowFillDuotone.displayName = 'FlowRightArrowFillDuotone';

// Triple export pattern
export { FlowRightArrowFillDuotone, FlowRightArrowFillDuotone as FlowRightArrowFillDuotoneIcon, FlowRightArrowFillDuotone as SiFlowRightArrowFillDuotone };
export default FlowRightArrowFillDuotone;
export type { FlowRightArrowFillDuotoneProps };
