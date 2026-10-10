import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitArrowDownBoldProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowDownBold = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowDownBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1c2.2 0 4 1.8 4 4 0 1.86-1.27 3.43-3 3.87V12h4c1.66 0 3 1.34 3 3v4.59l1.3-1.3c.38-.39 1.02-.39 1.4 0 .4.4.4 1.03 0 1.42l-3 3-.19.15q-.1.06-.21.1l-.07.01-.03.01h-.03L19 23q-.1 0-.17-.02h-.03l-.05-.01-.04-.01q-.18-.06-.31-.16l-.1-.1-3-3c-.4-.38-.4-1.02 0-1.4.38-.4 1.02-.4 1.4 0l1.3 1.29V15c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v4.59l1.3-1.3c.38-.39 1.02-.39 1.4 0 .4.4.4 1.03 0 1.42l-3 3-.19.15q-.1.06-.21.1l-.07.01-.03.01h-.03L5 23q-.1 0-.17-.02H4.8l-.05-.01-.04-.01q-.18-.06-.31-.16l-.1-.1-3-3c-.4-.38-.4-1.02 0-1.4.38-.4 1.02-.4 1.4 0L4 19.58V15c0-1.66 1.34-3 3-3h4V8.87c-1.73-.44-3-2-3-3.87 0-2.2 1.8-4 4-4m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitArrowDownBold.displayName = 'FlowSplitArrowDownBold';

// Triple export pattern
export { FlowSplitArrowDownBold, FlowSplitArrowDownBold as FlowSplitArrowDownBoldIcon, FlowSplitArrowDownBold as SiFlowSplitArrowDownBold };
export default FlowSplitArrowDownBold;
export type { FlowSplitArrowDownBoldProps };
