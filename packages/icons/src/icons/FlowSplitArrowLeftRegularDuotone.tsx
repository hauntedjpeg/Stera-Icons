import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitArrowLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9 4.25c1.52 0 2.75 1.23 2.75 2.75v4.25h3.58q-.08.37-.08.75t.08.75h-3.58V17c0 1.52-1.23 2.75-2.75 2.75H3.81L3.06 19l.75-.75H9c.69 0 1.25-.56 1.25-1.25V7c0-.69-.56-1.25-1.25-1.25H3.81L3.06 5l.75-.75z" opacity={.4} />
        <path d="M4.47 15.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06L3.06 19l2.47 2.47c.3.3.3.77 0 1.06s-.77.3-1.06 0l-3-3q-.22-.22-.22-.53t.22-.53z" />
        <path fillRule="evenodd" d="M19 8.25c2.07 0 3.75 1.68 3.75 3.75s-1.68 3.75-3.75 3.75-3.75-1.68-3.75-3.75S16.93 8.25 19 8.25m0 1.5c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25" clipRule="evenodd" />
        <path d="M4.47 1.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06L3.06 5l2.47 2.47c.3.3.3.77 0 1.06s-.77.3-1.06 0l-3-3q-.22-.22-.22-.53t.22-.53z" />
    </IconBase>
  ))
);

FlowSplitArrowLeftRegularDuotone.displayName = 'FlowSplitArrowLeftRegularDuotone';

// Triple export pattern
export { FlowSplitArrowLeftRegularDuotone, FlowSplitArrowLeftRegularDuotone as FlowSplitArrowLeftRegularDuotoneIcon, FlowSplitArrowLeftRegularDuotone as SiFlowSplitArrowLeftRegularDuotone };
export default FlowSplitArrowLeftRegularDuotone;
export type { FlowSplitArrowLeftRegularDuotoneProps };
