import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitLeftBoldProps = Omit<IconBaseProps, 'children'>;

const FlowSplitLeftBold = memo(
  forwardRef<SVGSVGElement, FlowSplitLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M5 1c1.86 0 3.43 1.27 3.87 3H10c1.66 0 3 1.34 3 3v4h2.13c.44-1.73 2-3 3.87-3 2.2 0 4 1.8 4 4s-1.8 4-4 4c-1.86 0-3.43-1.27-3.87-3H13v4c0 1.66-1.34 3-3 3H8.87c-.44 1.73-2 3-3.87 3-2.2 0-4-1.8-4-4s1.8-4 4-4c1.86 0 3.43 1.27 3.87 3H10c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1H8.87c-.44 1.73-2 3-3.87 3-2.2 0-4-1.8-4-4s1.8-4 4-4m0 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m14-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2M5 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitLeftBold.displayName = 'FlowSplitLeftBold';

// Triple export pattern
export { FlowSplitLeftBold, FlowSplitLeftBold as FlowSplitLeftBoldIcon, FlowSplitLeftBold as SiFlowSplitLeftBold };
export default FlowSplitLeftBold;
export type { FlowSplitLeftBoldProps };
