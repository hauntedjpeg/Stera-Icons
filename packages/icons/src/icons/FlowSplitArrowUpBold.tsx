import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitArrowUpBoldProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowUpBold = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowUpBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 23c2.2 0 4-1.8 4-4 0-1.86-1.27-3.43-3-3.87V12h4c1.66 0 3-1.34 3-3V4.41l1.3 1.3c.38.39 1.02.39 1.4 0 .4-.4.4-1.03 0-1.42l-3-3q-.08-.08-.19-.15t-.21-.1l-.07-.01h-.03l-.03-.01L19 1q-.1 0-.17.02h-.03l-.05.01-.04.01q-.18.07-.31.16l-.1.1-3 3c-.4.38-.4 1.02 0 1.4.38.4 1.02.4 1.4 0L18 4.42V9c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1V4.41l1.3 1.3c.38.39 1.02.39 1.4 0 .4-.4.4-1.03 0-1.42l-3-3q-.08-.08-.19-.15t-.21-.1l-.07-.01H5.2l-.03-.01L5 1q-.1 0-.17.02H4.8l-.05.01-.04.01q-.18.07-.31.16l-.1.1-3 3c-.4.38-.4 1.02 0 1.4.38.4 1.02.4 1.4 0L4 4.42V9c0 1.66 1.34 3 3 3h4v3.13c-1.73.44-3 2-3 3.87 0 2.2 1.8 4 4 4m0-2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitArrowUpBold.displayName = 'FlowSplitArrowUpBold';

// Triple export pattern
export { FlowSplitArrowUpBold, FlowSplitArrowUpBold as FlowSplitArrowUpBoldIcon, FlowSplitArrowUpBold as SiFlowSplitArrowUpBold };
export default FlowSplitArrowUpBold;
export type { FlowSplitArrowUpBoldProps };
