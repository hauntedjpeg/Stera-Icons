import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitLeftRegularProps = Omit<IconBaseProps, 'children'>;

const FlowSplitLeftRegular = memo(
  forwardRef<SVGSVGElement, FlowSplitLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M5 1.25c1.81 0 3.33 1.29 3.67 3H10c1.52 0 2.75 1.23 2.75 2.75v4.25h2.58c.34-1.71 1.86-3 3.67-3 2.07 0 3.75 1.68 3.75 3.75s-1.68 3.75-3.75 3.75c-1.81 0-3.33-1.29-3.67-3h-2.58V17c0 1.52-1.23 2.75-2.75 2.75H8.67c-.34 1.71-1.86 3-3.67 3-2.07 0-3.75-1.68-3.75-3.75S2.93 15.25 5 15.25c1.81 0 3.33 1.29 3.67 3H10c.69 0 1.25-.56 1.25-1.25V7c0-.69-.56-1.25-1.25-1.25H8.67c-.34 1.71-1.86 3-3.67 3-2.07 0-3.75-1.68-3.75-3.75S2.93 1.25 5 1.25m0 15.5c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25m14-7c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25m-14-7c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitLeftRegular.displayName = 'FlowSplitLeftRegular';

// Triple export pattern
export { FlowSplitLeftRegular, FlowSplitLeftRegular as FlowSplitLeftRegularIcon, FlowSplitLeftRegular as SiFlowSplitLeftRegular };
export default FlowSplitLeftRegular;
export type { FlowSplitLeftRegularProps };
