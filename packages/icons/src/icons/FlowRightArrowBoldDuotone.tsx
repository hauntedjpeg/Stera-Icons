import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowRightArrowBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowRightArrowBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlowRightArrowBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.3 6.3a1 1 0 0 1 1.4 0l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 1 1-1.4-1.4l3.29-3.3h-8.7a5 5 0 0 0 0-2h8.7l-3.3-3.3a1 1 0 0 1 0-1.4" />
        <path fillRule="evenodd" d="M6 7a5 5 0 1 1 0 10A5 5 0 0 1 6 7m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

FlowRightArrowBoldDuotone.displayName = 'FlowRightArrowBoldDuotone';

// Triple export pattern (lucide-react style)
export { FlowRightArrowBoldDuotone, FlowRightArrowBoldDuotone as FlowRightArrowBoldDuotoneIcon, FlowRightArrowBoldDuotone as SiFlowRightArrowBoldDuotone };
export default FlowRightArrowBoldDuotone;
export type { FlowRightArrowBoldDuotoneProps };
