import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitUpRegularProps = Omit<IconBaseProps, 'children'>;

const FlowSplitUpRegular = memo(
  forwardRef<SVGSVGElement, FlowSplitUpRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M1.25 5c0 1.81 1.29 3.33 3 3.67V10c0 1.52 1.23 2.75 2.75 2.75h4.25v2.58c-1.71.34-3 1.86-3 3.67 0 2.07 1.68 3.75 3.75 3.75s3.75-1.68 3.75-3.75c0-1.81-1.29-3.33-3-3.67v-2.58H17c1.52 0 2.75-1.23 2.75-2.75V8.67c1.71-.34 3-1.86 3-3.67 0-2.07-1.68-3.75-3.75-3.75S15.25 2.93 15.25 5c0 1.81 1.29 3.33 3 3.67V10c0 .69-.56 1.25-1.25 1.25H7c-.69 0-1.25-.56-1.25-1.25V8.67c1.71-.34 3-1.86 3-3.67 0-2.07-1.68-3.75-3.75-3.75S1.25 2.93 1.25 5m15.5 0c0-1.24 1-2.25 2.25-2.25 1.24 0 2.25 1 2.25 2.25 0 1.24-1 2.25-2.25 2.25-1.24 0-2.25-1-2.25-2.25m-7 14c0-1.24 1-2.25 2.25-2.25 1.24 0 2.25 1 2.25 2.25 0 1.24-1 2.25-2.25 2.25-1.24 0-2.25-1-2.25-2.25m-7-14c0-1.24 1-2.25 2.25-2.25 1.24 0 2.25 1 2.25 2.25 0 1.24-1 2.25-2.25 2.25-1.24 0-2.25-1-2.25-2.25" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitUpRegular.displayName = 'FlowSplitUpRegular';

// Triple export pattern
export { FlowSplitUpRegular, FlowSplitUpRegular as FlowSplitUpRegularIcon, FlowSplitUpRegular as SiFlowSplitUpRegular };
export default FlowSplitUpRegular;
export type { FlowSplitUpRegularProps };
