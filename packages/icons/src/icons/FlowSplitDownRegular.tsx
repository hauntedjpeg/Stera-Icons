import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitDownRegularProps = Omit<IconBaseProps, 'children'>;

const FlowSplitDownRegular = memo(
  forwardRef<SVGSVGElement, FlowSplitDownRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.25c2.07 0 3.75 1.68 3.75 3.75 0 1.81-1.29 3.33-3 3.67v2.58H17c1.52 0 2.75 1.23 2.75 2.75v1.32c1.71.35 3 1.87 3 3.68 0 2.07-1.68 3.75-3.75 3.75s-3.75-1.68-3.75-3.75c0-1.81 1.29-3.33 3-3.68V14c0-.69-.56-1.25-1.25-1.25H7c-.69 0-1.25.56-1.25 1.25v1.32c1.71.35 3 1.87 3 3.68 0 2.07-1.68 3.75-3.75 3.75S1.25 21.07 1.25 19c0-1.81 1.29-3.33 3-3.68V14c0-1.52 1.23-2.75 2.75-2.75h4.25V8.67c-1.71-.34-3-1.86-3-3.67 0-2.07 1.68-3.75 3.75-3.75m-7 15.5c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25m14 0c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25m-7-14c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitDownRegular.displayName = 'FlowSplitDownRegular';

// Triple export pattern
export { FlowSplitDownRegular, FlowSplitDownRegular as FlowSplitDownRegularIcon, FlowSplitDownRegular as SiFlowSplitDownRegular };
export default FlowSplitDownRegular;
export type { FlowSplitDownRegularProps };
