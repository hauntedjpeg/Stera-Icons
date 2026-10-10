import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10 4c1.66 0 3 1.34 3 3v4h2.13q-.13.48-.13 1t.13 1H13v4c0 1.66-1.34 3-3 3H8.87q.13-.48.13-1t-.13-1H10c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H8.87Q9 5.52 9 5t-.13-1z" opacity={.4} />
        <path fillRule="evenodd" d="M5 15c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2M19 8c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2M5 1c2.2 0 4 1.8 4 4S7.2 9 5 9 1 7.2 1 5s1.8-4 4-4m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitLeftBoldDuotone.displayName = 'FlowSplitLeftBoldDuotone';

// Triple export pattern
export { FlowSplitLeftBoldDuotone, FlowSplitLeftBoldDuotone as FlowSplitLeftBoldDuotoneIcon, FlowSplitLeftBoldDuotone as SiFlowSplitLeftBoldDuotone };
export default FlowSplitLeftBoldDuotone;
export type { FlowSplitLeftBoldDuotoneProps };
