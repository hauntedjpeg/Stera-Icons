import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowLeftArrowBoldProps = Omit<IconBaseProps, 'children'>;

const FlowLeftArrowBold = memo(
  forwardRef<SVGSVGElement, FlowLeftArrowBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M6.3 6.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L4.42 11h8.7c.45-2.28 2.47-4 4.89-4 2.76 0 5 2.24 5 5s-2.24 5-5 5c-2.42 0-4.44-1.72-4.9-4H4.41l3.3 3.3c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-5-5c-.39-.38-.39-1.02 0-1.4zM18 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowLeftArrowBold.displayName = 'FlowLeftArrowBold';

// Triple export pattern
export { FlowLeftArrowBold, FlowLeftArrowBold as FlowLeftArrowBoldIcon, FlowLeftArrowBold as SiFlowLeftArrowBold };
export default FlowLeftArrowBold;
export type { FlowLeftArrowBoldProps };
