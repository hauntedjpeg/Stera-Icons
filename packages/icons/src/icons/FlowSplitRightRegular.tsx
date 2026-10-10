import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitRightRegularProps = Omit<IconBaseProps, 'children'>;

const FlowSplitRightRegular = memo(
  forwardRef<SVGSVGElement, FlowSplitRightRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M19 1.25c-1.81 0-3.33 1.29-3.67 3H14c-1.52 0-2.75 1.23-2.75 2.75v4.25H8.67c-.34-1.71-1.86-3-3.67-3-2.07 0-3.75 1.68-3.75 3.75S2.93 15.75 5 15.75c1.81 0 3.33-1.29 3.67-3h2.58V17c0 1.52 1.23 2.75 2.75 2.75h1.33c.34 1.71 1.86 3 3.67 3 2.07 0 3.75-1.68 3.75-3.75s-1.68-3.75-3.75-3.75c-1.81 0-3.33 1.29-3.67 3H14c-.69 0-1.25-.56-1.25-1.25V7c0-.69.56-1.25 1.25-1.25h1.33c.34 1.71 1.86 3 3.67 3 2.07 0 3.75-1.68 3.75-3.75S21.07 1.25 19 1.25m0 15.5c1.24 0 2.25 1 2.25 2.25 0 1.24-1 2.25-2.25 2.25-1.24 0-2.25-1-2.25-2.25 0-1.24 1-2.25 2.25-2.25m-14-7c1.24 0 2.25 1 2.25 2.25 0 1.24-1 2.25-2.25 2.25-1.24 0-2.25-1-2.25-2.25 0-1.24 1-2.25 2.25-2.25m14-7c1.24 0 2.25 1 2.25 2.25 0 1.24-1 2.25-2.25 2.25-1.24 0-2.25-1-2.25-2.25 0-1.24 1-2.25 2.25-2.25" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitRightRegular.displayName = 'FlowSplitRightRegular';

// Triple export pattern
export { FlowSplitRightRegular, FlowSplitRightRegular as FlowSplitRightRegularIcon, FlowSplitRightRegular as SiFlowSplitRightRegular };
export default FlowSplitRightRegular;
export type { FlowSplitRightRegularProps };
