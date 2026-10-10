import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitArrowRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m19.59 4 1 1-1 1H15.5c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h4.09l1 1-1 1H15.5c-1.66 0-3-1.34-3-3v-4H8.87q.13-.48.13-1t-.13-1h3.63V7c0-1.66 1.34-3 3-3z" opacity={.4} />
        <path d="M18.3 7.3c-.4.38-.4 1.02 0 1.4.38.4 1.02.4 1.4 0l3-3q.3-.28.3-.7t-.3-.7l-3-3c-.38-.4-1.02-.4-1.4 0-.4.38-.4 1.02 0 1.4L20.58 5zM18.3 21.3c-.4.38-.4 1.02 0 1.4.38.4 1.02.4 1.4 0l3-3q.3-.28.3-.7t-.3-.7l-3-3c-.38-.4-1.02-.4-1.4 0-.4.38-.4 1.02 0 1.4l2.29 2.3z" />
        <path fillRule="evenodd" d="M1 12c0 2.2 1.8 4 4 4s4-1.8 4-4-1.8-4-4-4-4 1.8-4 4m2 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitArrowRightBoldDuotone.displayName = 'FlowSplitArrowRightBoldDuotone';

// Triple export pattern
export { FlowSplitArrowRightBoldDuotone, FlowSplitArrowRightBoldDuotone as FlowSplitArrowRightBoldDuotoneIcon, FlowSplitArrowRightBoldDuotone as SiFlowSplitArrowRightBoldDuotone };
export default FlowSplitArrowRightBoldDuotone;
export type { FlowSplitArrowRightBoldDuotoneProps };
