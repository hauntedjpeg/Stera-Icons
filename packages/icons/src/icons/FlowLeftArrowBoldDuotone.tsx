import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowLeftArrowBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowLeftArrowBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlowLeftArrowBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6" clipRule="evenodd" opacity={.4} />
        <path d="M6.3 6.3a1 1 0 1 1 1.4 1.4L4.42 11h8.7a5 5 0 0 0 0 2H4.4l3.3 3.3a1 1 0 0 1-1.42 1.4l-5-5a1 1 0 0 1-.25-.4l-.01-.06a1 1 0 0 1 0-.47l.01-.06a1 1 0 0 1 .25-.42z" />
    </IconBase>
  ))
);

FlowLeftArrowBoldDuotone.displayName = 'FlowLeftArrowBoldDuotone';

// Triple export pattern (lucide-react style)
export { FlowLeftArrowBoldDuotone, FlowLeftArrowBoldDuotone as FlowLeftArrowBoldDuotoneIcon, FlowLeftArrowBoldDuotone as SiFlowLeftArrowBoldDuotone };
export default FlowLeftArrowBoldDuotone;
export type { FlowLeftArrowBoldDuotoneProps };
