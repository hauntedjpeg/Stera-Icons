import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitArrowDownFillProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowDownFill = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowDownFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.13c2.14 0 3.87 1.73 3.87 3.87 0 1.84-1.28 3.38-3 3.77v3.36H17c1.59 0 2.87 1.28 2.87 2.87v3.13H22c.35 0 .67.2.8.54.14.32.07.7-.18.95l-3 3q-.1.1-.24.17l-.2.07-.18.02-.17-.02-.21-.07q-.14-.07-.24-.17l-3-3c-.25-.25-.32-.63-.19-.96.14-.32.46-.53.81-.54h2.12V15c0-.62-.5-1.12-1.12-1.12H7c-.62 0-1.13.5-1.13 1.12v3.13H8c.35 0 .67.2.8.54.14.32.07.7-.18.95l-3 3q-.1.1-.24.17l-.2.07-.18.02-.17-.02-.2-.07q-.14-.06-.25-.17l-3-3c-.25-.25-.32-.63-.19-.96.14-.32.46-.53.81-.54h2.12V15c0-1.59 1.3-2.87 2.88-2.87h4.12V8.77c-1.71-.4-3-1.93-3-3.77 0-2.14 1.74-3.87 3.88-3.87M4.12 19.89v-.02zm14-.02v.02zm1.75 0v.02l.02-.02zm-14 .02.02-.02h-.02z" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitArrowDownFill.displayName = 'FlowSplitArrowDownFill';

// Triple export pattern
export { FlowSplitArrowDownFill, FlowSplitArrowDownFill as FlowSplitArrowDownFillIcon, FlowSplitArrowDownFill as SiFlowSplitArrowDownFill };
export default FlowSplitArrowDownFill;
export type { FlowSplitArrowDownFillProps };
