import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitArrowDownBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowDownBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowDownBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 12h4c1.66 0 3 1.34 3 3v4.59l-1 1-1-1V15c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v4.59l-1 1-1-1V15c0-1.66 1.34-3 3-3h4V8.87q.48.13 1 .13t1-.13z" opacity={.4} />
        <path d="M7.3 18.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4l-3 3q-.28.3-.7.3t-.7-.3l-3-3c-.4-.38-.4-1.02 0-1.4.38-.4 1.02-.4 1.4 0L5 20.58zM21.3 18.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4l-3 3q-.28.3-.7.3t-.7-.3l-3-3c-.4-.38-.4-1.02 0-1.4.38-.4 1.02-.4 1.4 0l2.3 2.29z" />
        <path fillRule="evenodd" d="M12 1c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitArrowDownBoldDuotone.displayName = 'FlowSplitArrowDownBoldDuotone';

// Triple export pattern
export { FlowSplitArrowDownBoldDuotone, FlowSplitArrowDownBoldDuotone as FlowSplitArrowDownBoldDuotoneIcon, FlowSplitArrowDownBoldDuotone as SiFlowSplitArrowDownBoldDuotone };
export default FlowSplitArrowDownBoldDuotone;
export type { FlowSplitArrowDownBoldDuotoneProps };
