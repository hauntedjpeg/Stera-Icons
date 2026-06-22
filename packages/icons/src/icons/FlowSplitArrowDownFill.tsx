import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowSplitArrowDownFillProps = Omit<IconBaseProps, 'children'>;

const FlowSplitArrowDownFill = memo(
  forwardRef<SVGSVGElement, FlowSplitArrowDownFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 1.13a3.88 3.88 0 0 1 .87 7.64v3.36H17A2.9 2.9 0 0 1 19.87 15v3.13H22a.88.88 0 0 1 .62 1.49l-3 3a1 1 0 0 1-.62.25 1 1 0 0 1-.62-.25l-3-3a.88.88 0 0 1 .62-1.5h2.12V15c0-.62-.5-1.12-1.12-1.12H7c-.62 0-1.13.5-1.13 1.12v3.13H8a.88.88 0 0 1 .62 1.49l-3 3a1 1 0 0 1-.62.25 1 1 0 0 1-.62-.25l-3-3a.88.88 0 0 1 .62-1.5h2.12V15A2.9 2.9 0 0 1 7 12.13h4.12V8.77A3.88 3.88 0 0 1 12 1.13M4.12 19.89v-.02zm14-.02v.02zm1.75 0v.02l.02-.02zm-14 .02.02-.02h-.02z" clipRule="evenodd" />
    </IconBase>
  ))
);

FlowSplitArrowDownFill.displayName = 'FlowSplitArrowDownFill';

// Triple export pattern (lucide-react style)
export { FlowSplitArrowDownFill, FlowSplitArrowDownFill as FlowSplitArrowDownFillIcon, FlowSplitArrowDownFill as SiFlowSplitArrowDownFill };
export default FlowSplitArrowDownFill;
export type { FlowSplitArrowDownFillProps };
