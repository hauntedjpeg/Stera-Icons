import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitArrowRightBoldProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowRightBold = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowRightBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M1 12c0 2.2 1.8 4 4 4 1.86 0 3.43-1.27 3.87-3H12v4c0 1.66 1.34 3 3 3h4.59l-1.3 1.3c-.39.38-.39 1.02 0 1.4.4.4 1.03.4 1.42 0l3-3 .15-.19q.06-.1.1-.21l.01-.07.01-.03v-.03L23 19q0-.1-.02-.17v-.03l-.01-.05-.01-.04q-.06-.18-.16-.31l-.1-.1-3-3c-.38-.4-1.02-.4-1.4 0-.4.38-.4 1.02 0 1.4l1.29 1.3H15c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h4.59l-1.3 1.3c-.39.38-.39 1.02 0 1.4.4.4 1.03.4 1.42 0l3-3 .15-.19q.06-.1.1-.21l.01-.07.01-.03v-.03L23 5q0-.1-.02-.17V4.8l-.01-.05-.01-.04q-.06-.18-.16-.31l-.1-.1-3-3c-.38-.4-1.02-.4-1.4 0-.4.38-.4 1.02 0 1.4L19.58 4H15c-1.66 0-3 1.34-3 3v4H8.87c-.44-1.73-2-3-3.87-3-2.2 0-4 1.8-4 4m2 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitArrowRightBold.displayName = 'FlowSplitArrowRightBold';

// Triple export pattern
export { FlowSplitArrowRightBold, FlowSplitArrowRightBold as FlowSplitArrowRightBoldIcon, FlowSplitArrowRightBold as SiFlowSplitArrowRightBold };
export default FlowSplitArrowRightBold;
export type { FlowSplitArrowRightBoldProps };
