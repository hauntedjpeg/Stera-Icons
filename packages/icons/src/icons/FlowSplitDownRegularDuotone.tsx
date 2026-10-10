import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitDownRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitDownRegularDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitDownRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.75 11.25H17c1.52 0 2.75 1.23 2.75 2.75v1.32q-.37-.06-.75-.07-.38 0-.75.07V14c0-.69-.56-1.25-1.25-1.25H7c-.69 0-1.25.56-1.25 1.25v1.32q-.37-.06-.75-.07-.38 0-.75.07V14c0-1.52 1.23-2.75 2.75-2.75h4.25V8.67q.37.08.75.08t.75-.08z" opacity={.4} />
        <path fillRule="evenodd" d="M5 15.25c2.07 0 3.75 1.68 3.75 3.75S7.07 22.75 5 22.75 1.25 21.07 1.25 19 2.93 15.25 5 15.25m0 1.5c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25M19 15.25c2.07 0 3.75 1.68 3.75 3.75s-1.68 3.75-3.75 3.75-3.75-1.68-3.75-3.75 1.68-3.75 3.75-3.75m0 1.5c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25M12 1.25c2.07 0 3.75 1.68 3.75 3.75S14.07 8.75 12 8.75 8.25 7.07 8.25 5 9.93 1.25 12 1.25m0 1.5c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitDownRegularDuotone.displayName = 'FlowSplitDownRegularDuotone';

// Triple export pattern
export { FlowSplitDownRegularDuotone, FlowSplitDownRegularDuotone as FlowSplitDownRegularDuotoneIcon, FlowSplitDownRegularDuotone as SiFlowSplitDownRegularDuotone };
export default FlowSplitDownRegularDuotone;
export type { FlowSplitDownRegularDuotoneProps };
