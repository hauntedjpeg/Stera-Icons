import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowRightArrowBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowRightArrowBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlowRightArrowBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.3 6.3c.38-.4 1.02-.4 1.4 0l5 5q.3.28.3.7t-.3.7l-5 5c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4l3.29-3.3h-8.7q.1-.48.11-1t-.1-1h8.69l-3.3-3.3c-.39-.38-.39-1.02 0-1.4" />
        <path fillRule="evenodd" d="M6 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5m0 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

FlowRightArrowBoldDuotone.displayName = 'FlowRightArrowBoldDuotone';

// Triple export pattern
export { FlowRightArrowBoldDuotone, FlowRightArrowBoldDuotone as FlowRightArrowBoldDuotoneIcon, FlowRightArrowBoldDuotone as SiFlowRightArrowBoldDuotone };
export default FlowRightArrowBoldDuotone;
export type { FlowRightArrowBoldDuotoneProps };
