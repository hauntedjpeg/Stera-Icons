import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.33 4.25q-.08.37-.08.75t.08.75H14c-.69 0-1.25.56-1.25 1.25v10c0 .69.56 1.25 1.25 1.25h1.33q-.08.37-.08.75t.08.75H14c-1.52 0-2.75-1.23-2.75-2.75v-4.25H8.67q.08-.37.08-.75t-.08-.75h2.58V7c0-1.52 1.23-2.75 2.75-2.75z" opacity={.4} />
        <path fillRule="evenodd" d="M19 15.25c2.07 0 3.75 1.68 3.75 3.75s-1.68 3.75-3.75 3.75-3.75-1.68-3.75-3.75 1.68-3.75 3.75-3.75m0 1.5c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25M5 8.25c2.07 0 3.75 1.68 3.75 3.75S7.07 15.75 5 15.75 1.25 14.07 1.25 12 2.93 8.25 5 8.25m0 1.5c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25M19 1.25c2.07 0 3.75 1.68 3.75 3.75S21.07 8.75 19 8.75 15.25 7.07 15.25 5 16.93 1.25 19 1.25m0 1.5c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitRightRegularDuotone.displayName = 'FlowSplitRightRegularDuotone';

// Triple export pattern
export { FlowSplitRightRegularDuotone, FlowSplitRightRegularDuotone as FlowSplitRightRegularDuotoneIcon, FlowSplitRightRegularDuotone as SiFlowSplitRightRegularDuotone };
export default FlowSplitRightRegularDuotone;
export type { FlowSplitRightRegularDuotoneProps };
