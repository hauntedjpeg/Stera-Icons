import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowLeftArrowBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowLeftArrowBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlowLeftArrowBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5m0 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3" clipRule="evenodd" opacity={.4} />
        <path d="M6.3 6.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L4.42 11h8.7q-.1.48-.11 1t.1 1H4.41l3.3 3.3c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-5-5q-.05-.04-.08-.1-.03-.01-.04-.05l-.07-.12-.06-.14-.01-.05L1 12q0-.12.03-.23l.01-.06.06-.14.07-.12q.05-.08.12-.16z" />
    </IconBase>
  ))
);

FlowLeftArrowBoldDuotone.displayName = 'FlowLeftArrowBoldDuotone';

// Triple export pattern
export { FlowLeftArrowBoldDuotone, FlowLeftArrowBoldDuotone as FlowLeftArrowBoldDuotoneIcon, FlowLeftArrowBoldDuotone as SiFlowLeftArrowBoldDuotone };
export default FlowLeftArrowBoldDuotone;
export type { FlowLeftArrowBoldDuotoneProps };
