import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowRightArrowBoldProps = Omit<IconBaseProps, 'children'>;

const FlowRightArrowBold = memo(
  forwardRef<SVGSVGElement, FlowRightArrowBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.3 6.3c.38-.4 1.02-.4 1.4 0l5 5c.4.38.4 1.02 0 1.4l-5 5c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4l3.29-3.3h-8.7c-.45 2.28-2.47 4-4.89 4-2.76 0-5-2.24-5-5s2.24-5 5-5c2.42 0 4.44 1.72 4.9 4h8.69l-3.3-3.3c-.39-.38-.39-1.02 0-1.4M6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowRightArrowBold.displayName = 'FlowRightArrowBold';

// Triple export pattern
export { FlowRightArrowBold, FlowRightArrowBold as FlowRightArrowBoldIcon, FlowRightArrowBold as SiFlowRightArrowBold };
export default FlowRightArrowBold;
export type { FlowRightArrowBoldProps };
