import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitArrowDownRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowDownRegularDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowDownRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.75 12.25H17c1.52 0 2.75 1.23 2.75 2.75v5.19l-.75.75-.75-.75V15c0-.69-.56-1.25-1.25-1.25H7c-.69 0-1.25.56-1.25 1.25v5.19l-.75.75-.75-.75V15c0-1.52 1.23-2.75 2.75-2.75h4.25V8.67q.37.08.75.08t.75-.08z" opacity={.4} />
        <path d="M7.47 18.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-3 3q-.22.22-.53.22t-.53-.22l-3-3c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0L5 20.94zM21.47 18.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-3 3q-.22.22-.53.22t-.53-.22l-3-3c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0L19 20.94z" />
        <path fillRule="evenodd" d="M12 1.25c2.07 0 3.75 1.68 3.75 3.75S14.07 8.75 12 8.75 8.25 7.07 8.25 5 9.93 1.25 12 1.25m0 1.5c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitArrowDownRegularDuotone.displayName = 'FlowSplitArrowDownRegularDuotone';

// Triple export pattern
export { FlowSplitArrowDownRegularDuotone, FlowSplitArrowDownRegularDuotone as FlowSplitArrowDownRegularDuotoneIcon, FlowSplitArrowDownRegularDuotone as SiFlowSplitArrowDownRegularDuotone };
export default FlowSplitArrowDownRegularDuotone;
export type { FlowSplitArrowDownRegularDuotoneProps };
