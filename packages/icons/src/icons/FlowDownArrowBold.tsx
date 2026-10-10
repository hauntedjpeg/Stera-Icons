import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowDownArrowBoldProps = Omit<IconBaseProps, 'children'>;

const FlowDownArrowBold = memo(
  forwardRef<SVGSVGElement, FlowDownArrowBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1c2.76 0 5 2.24 5 5 0 2.42-1.72 4.44-4 4.9v8.69l3.3-3.3c.38-.39 1.02-.39 1.4 0 .4.4.4 1.03 0 1.42l-5 5c-.38.39-1.02.39-1.4 0l-5-5c-.4-.4-.4-1.03 0-1.42.38-.39 1.02-.39 1.4 0l3.3 3.3v-8.7C8.72 10.45 7 8.43 7 6c0-2.76 2.24-5 5-5m0 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowDownArrowBold.displayName = 'FlowDownArrowBold';

// Triple export pattern
export { FlowDownArrowBold, FlowDownArrowBold as FlowDownArrowBoldIcon, FlowDownArrowBold as SiFlowDownArrowBold };
export default FlowDownArrowBold;
export type { FlowDownArrowBoldProps };
