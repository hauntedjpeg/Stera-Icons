import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitArrowLeftBoldProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowLeftBold = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M23 12c0 2.2-1.8 4-4 4-1.86 0-3.43-1.27-3.87-3H12v4c0 1.66-1.34 3-3 3H4.41l1.3 1.3c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-3-3q-.08-.08-.15-.19t-.1-.21l-.01-.07v-.03l-.01-.03L1 19q0-.1.02-.17v-.03l.01-.05.01-.04q.07-.18.16-.31l.1-.1 3-3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L4.42 18H9c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H4.41l1.3 1.3c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-3-3q-.08-.08-.15-.19t-.1-.21l-.01-.07V5.2l-.01-.03L1 5q0-.1.02-.17V4.8l.01-.05.01-.04q.07-.18.16-.31l.1-.1 3-3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L4.42 4H9c1.66 0 3 1.34 3 3v4h3.13c.44-1.73 2-3 3.87-3 2.2 0 4 1.8 4 4m-2 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitArrowLeftBold.displayName = 'FlowSplitArrowLeftBold';

// Triple export pattern
export { FlowSplitArrowLeftBold, FlowSplitArrowLeftBold as FlowSplitArrowLeftBoldIcon, FlowSplitArrowLeftBold as SiFlowSplitArrowLeftBold };
export default FlowSplitArrowLeftBold;
export type { FlowSplitArrowLeftBoldProps };
