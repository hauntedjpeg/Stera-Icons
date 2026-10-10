import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitArrowUpRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowUpRegularDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowUpRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.75 3.81V9c0 1.52-1.23 2.75-2.75 2.75h-4.25v3.57q-.37-.06-.75-.07-.38 0-.75.07v-3.57H7c-1.52 0-2.75-1.23-2.75-2.75V3.81L5 3.06l.75.75V9c0 .69.56 1.25 1.25 1.25h10c.69 0 1.25-.56 1.25-1.25V3.81l.75-.75z" opacity={.4} />
        <path fillRule="evenodd" d="M12 15.25c2.07 0 3.75 1.68 3.75 3.75s-1.68 3.75-3.75 3.75S8.25 21.07 8.25 19s1.68-3.75 3.75-3.75m0 1.5c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25" clipRule="evenodd" />
        <path d="M5 1.25q.31 0 .53.22l3 3c.3.3.3.77 0 1.06s-.77.3-1.06 0L5 3.06 2.53 5.53c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l3-3 .11-.1q.2-.12.42-.12M19 1.25q.31 0 .53.22l3 3c.3.3.3.77 0 1.06s-.77.3-1.06 0L19 3.06l-2.47 2.47c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l3-3 .11-.1q.2-.12.42-.12" />
    </IconBase>
  ))
);

FlowSplitArrowUpRegularDuotone.displayName = 'FlowSplitArrowUpRegularDuotone';

// Triple export pattern
export { FlowSplitArrowUpRegularDuotone, FlowSplitArrowUpRegularDuotone as FlowSplitArrowUpRegularDuotoneIcon, FlowSplitArrowUpRegularDuotone as SiFlowSplitArrowUpRegularDuotone };
export default FlowSplitArrowUpRegularDuotone;
export type { FlowSplitArrowUpRegularDuotoneProps };
