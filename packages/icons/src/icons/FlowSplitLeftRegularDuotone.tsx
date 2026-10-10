import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10 4.25c1.52 0 2.75 1.23 2.75 2.75v4.25h2.58q-.08.37-.08.75t.08.75h-2.58V17c0 1.52-1.23 2.75-2.75 2.75H8.67q.08-.37.08-.75t-.08-.75H10c.69 0 1.25-.56 1.25-1.25V7c0-.69-.56-1.25-1.25-1.25H8.67q.08-.37.08-.75t-.08-.75z" opacity={.4} />
        <path fillRule="evenodd" d="M5 15.25c2.07 0 3.75 1.68 3.75 3.75S7.07 22.75 5 22.75 1.25 21.07 1.25 19 2.93 15.25 5 15.25m0 1.5c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25M19 8.25c2.07 0 3.75 1.68 3.75 3.75s-1.68 3.75-3.75 3.75-3.75-1.68-3.75-3.75S16.93 8.25 19 8.25m0 1.5c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25M5 1.25c2.07 0 3.75 1.68 3.75 3.75S7.07 8.75 5 8.75 1.25 7.07 1.25 5 2.93 1.25 5 1.25m0 1.5c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitLeftRegularDuotone.displayName = 'FlowSplitLeftRegularDuotone';

// Triple export pattern
export { FlowSplitLeftRegularDuotone, FlowSplitLeftRegularDuotone as FlowSplitLeftRegularDuotoneIcon, FlowSplitLeftRegularDuotone as SiFlowSplitLeftRegularDuotone };
export default FlowSplitLeftRegularDuotone;
export type { FlowSplitLeftRegularDuotoneProps };
