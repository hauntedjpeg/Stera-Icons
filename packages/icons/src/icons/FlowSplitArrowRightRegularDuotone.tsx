import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitArrowRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m20.94 5-.75.75H15c-.69 0-1.25.56-1.25 1.25v10c0 .69.56 1.25 1.25 1.25h5.19l.75.75-.75.75H15c-1.52 0-2.75-1.23-2.75-2.75v-4.25H8.67q.08-.37.08-.75t-.08-.75h3.58V7c0-1.52 1.23-2.75 2.75-2.75h5.19z" opacity={.4} />
        <path d="M18.47 15.47c.3-.3.77-.3 1.06 0l3 3q.22.22.22.53t-.22.53l-3 3c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06L20.94 19l-2.47-2.47c-.3-.3-.3-.77 0-1.06" />
        <path fillRule="evenodd" d="M5 8.25c2.07 0 3.75 1.68 3.75 3.75S7.07 15.75 5 15.75 1.25 14.07 1.25 12 2.93 8.25 5 8.25m0 1.5c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25" clipRule="evenodd" />
        <path d="M18.47 1.47c.3-.3.77-.3 1.06 0l3 3q.22.22.22.53t-.22.53l-3 3c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06L20.94 5l-2.47-2.47c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

FlowSplitArrowRightRegularDuotone.displayName = 'FlowSplitArrowRightRegularDuotone';

// Triple export pattern
export { FlowSplitArrowRightRegularDuotone, FlowSplitArrowRightRegularDuotone as FlowSplitArrowRightRegularDuotoneIcon, FlowSplitArrowRightRegularDuotone as SiFlowSplitArrowRightRegularDuotone };
export default FlowSplitArrowRightRegularDuotone;
export type { FlowSplitArrowRightRegularDuotoneProps };
