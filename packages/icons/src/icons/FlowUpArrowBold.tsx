import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowUpArrowBoldProps = Omit<IconBaseProps, 'children'>;

const FlowUpArrowBold = memo(
  forwardRef<SVGSVGElement, FlowUpArrowBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M6.3 7.7c-.4-.38-.4-1.02 0-1.4l5-5c.38-.4 1.02-.4 1.4 0l5 5c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0L13 4.42v8.7c2.28.45 4 2.47 4 4.89 0 2.76-2.24 5-5 5s-5-2.24-5-5c0-2.42 1.72-4.44 4-4.9V4.41l-3.3 3.3c-.38.39-1.02.39-1.4 0M9 18c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowUpArrowBold.displayName = 'FlowUpArrowBold';

// Triple export pattern
export { FlowUpArrowBold, FlowUpArrowBold as FlowUpArrowBoldIcon, FlowUpArrowBold as SiFlowUpArrowBold };
export default FlowUpArrowBold;
export type { FlowUpArrowBoldProps };
