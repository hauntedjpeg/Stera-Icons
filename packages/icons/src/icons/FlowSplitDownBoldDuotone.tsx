import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitDownBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitDownBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitDownBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 11h4c1.66 0 3 1.34 3 3v1.13q-.48-.13-1-.13t-1 .13V14c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v1.13Q5.52 15 5 15t-1 .13V14c0-1.66 1.34-3 3-3h4V8.87q.48.13 1 .13t1-.13z" opacity={.4} />
        <path fillRule="evenodd" d="M5 15c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2M19 15c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2M12 1c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitDownBoldDuotone.displayName = 'FlowSplitDownBoldDuotone';

// Triple export pattern
export { FlowSplitDownBoldDuotone, FlowSplitDownBoldDuotone as FlowSplitDownBoldDuotoneIcon, FlowSplitDownBoldDuotone as SiFlowSplitDownBoldDuotone };
export default FlowSplitDownBoldDuotone;
export type { FlowSplitDownBoldDuotoneProps };
