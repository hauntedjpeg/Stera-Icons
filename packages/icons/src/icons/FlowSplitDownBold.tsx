import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitDownBoldProps = Omit<IconBaseProps, 'children'>;

const FlowSplitDownBold = memo(
  forwardRef<SVGSVGElement, FlowSplitDownBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1c2.2 0 4 1.8 4 4 0 1.86-1.27 3.43-3 3.87V11h4c1.66 0 3 1.34 3 3v1.13c1.73.44 3 2 3 3.87 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-1.86 1.27-3.43 3-3.87V14c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v1.13c1.73.44 3 2 3 3.87 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-1.86 1.27-3.43 3-3.87V14c0-1.66 1.34-3 3-3h4V8.87c-1.73-.44-3-2-3-3.87 0-2.2 1.8-4 4-4M5 17c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m14 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2M12 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitDownBold.displayName = 'FlowSplitDownBold';

// Triple export pattern
export { FlowSplitDownBold, FlowSplitDownBold as FlowSplitDownBoldIcon, FlowSplitDownBold as SiFlowSplitDownBold };
export default FlowSplitDownBold;
export type { FlowSplitDownBoldProps };
