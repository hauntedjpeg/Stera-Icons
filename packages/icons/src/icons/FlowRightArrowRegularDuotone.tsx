import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowRightArrowRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowRightArrowRegularDuotone = memo(
  forwardRef<SVGSVGElement, FlowRightArrowRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M6 7.25c2.62 0 4.75 2.13 4.75 4.75S8.62 16.75 6 16.75 1.25 14.62 1.25 12 3.38 7.25 6 7.25m0 1.5c-1.8 0-3.25 1.46-3.25 3.25 0 1.8 1.46 3.25 3.25 3.25 1.8 0 3.25-1.46 3.25-3.25 0-1.8-1.46-3.25-3.25-3.25" clipRule="evenodd" opacity={.4} />
        <path d="M16.47 6.47c.3-.3.77-.3 1.06 0l5 5q.22.22.22.53t-.22.53l-5 5c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l3.72-3.72h-9.5q.06-.37.06-.75t-.06-.75h9.5l-3.72-3.72c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

FlowRightArrowRegularDuotone.displayName = 'FlowRightArrowRegularDuotone';

// Triple export pattern
export { FlowRightArrowRegularDuotone, FlowRightArrowRegularDuotone as FlowRightArrowRegularDuotoneIcon, FlowRightArrowRegularDuotone as SiFlowRightArrowRegularDuotone };
export default FlowRightArrowRegularDuotone;
export type { FlowRightArrowRegularDuotoneProps };
