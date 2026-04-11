import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowLeftArrowFillProps = Omit<IconBaseProps, 'children'>;

const FlowLeftArrowFill = memo(
  forwardRef<SVGSVGElement, FlowLeftArrowFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.38 6.38a.88.88 0 0 1 1.24 1.24l-3.5 3.5h9.08a4.88 4.88 0 1 1 0 1.75H4.11l3.5 3.51a.88.88 0 0 1-1.23 1.24l-5-5a.9.9 0 0 1 0-1.24z" />
    </IconBase>
  ))
);

FlowLeftArrowFill.displayName = 'FlowLeftArrowFill';

// Triple export pattern (lucide-react style)
export { FlowLeftArrowFill, FlowLeftArrowFill as FlowLeftArrowFillIcon, FlowLeftArrowFill as SiFlowLeftArrowFill };
export default FlowLeftArrowFill;
export type { FlowLeftArrowFillProps };
