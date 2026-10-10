import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitArrowLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9 4c1.66 0 3 1.34 3 3v4h3.13q-.13.48-.13 1t.13 1H12v4c0 1.66-1.34 3-3 3H4.41l-1-1 1-1H9c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H4.41l-1-1 1-1z" opacity={.4} />
        <path d="M5.7 7.3c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0l-3-3Q1 5.43 1 5t.3-.7l3-3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L3.42 5zM5.7 21.3c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0l-3-3Q1 19.43 1 19t.3-.7l3-3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L3.42 19z" />
        <path fillRule="evenodd" d="M23 12c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4m-2 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitArrowLeftBoldDuotone.displayName = 'FlowSplitArrowLeftBoldDuotone';

// Triple export pattern
export { FlowSplitArrowLeftBoldDuotone, FlowSplitArrowLeftBoldDuotone as FlowSplitArrowLeftBoldDuotoneIcon, FlowSplitArrowLeftBoldDuotone as SiFlowSplitArrowLeftBoldDuotone };
export default FlowSplitArrowLeftBoldDuotone;
export type { FlowSplitArrowLeftBoldDuotoneProps };
