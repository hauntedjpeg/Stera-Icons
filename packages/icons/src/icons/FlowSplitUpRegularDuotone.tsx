import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitUpRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitUpRegularDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitUpRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m19.75 10-.01.28c-.14 1.3-1.16 2.32-2.46 2.46l-.28.01h-4.25v2.57q-.37-.06-.75-.07-.38 0-.75.07v-2.57H7c-1.52 0-2.75-1.23-2.75-2.75V8.67q.37.08.75.08t.75-.08V10c0 .69.56 1.25 1.25 1.25h10.13c.63-.07 1.12-.6 1.12-1.25V8.67q.37.08.75.08t.75-.08z" opacity={.4} />
        <path fillRule="evenodd" d="M12 15.25c2.07 0 3.75 1.68 3.75 3.75s-1.68 3.75-3.75 3.75S8.25 21.07 8.25 19s1.68-3.75 3.75-3.75m0 1.5c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25M5 1.25c2.07 0 3.75 1.68 3.75 3.75S7.07 8.75 5 8.75 1.25 7.07 1.25 5 2.93 1.25 5 1.25m0 1.5c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25M19 1.25c2.07 0 3.75 1.68 3.75 3.75S21.07 8.75 19 8.75 15.25 7.07 15.25 5 16.93 1.25 19 1.25m0 1.5c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitUpRegularDuotone.displayName = 'FlowSplitUpRegularDuotone';

// Triple export pattern
export { FlowSplitUpRegularDuotone, FlowSplitUpRegularDuotone as FlowSplitUpRegularDuotoneIcon, FlowSplitUpRegularDuotone as SiFlowSplitUpRegularDuotone };
export default FlowSplitUpRegularDuotone;
export type { FlowSplitUpRegularDuotoneProps };
