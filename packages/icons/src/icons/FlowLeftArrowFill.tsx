import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowLeftArrowFillProps = Omit<IconBaseProps, 'children'>;

const FlowLeftArrowFill = memo(
  forwardRef<SVGSVGElement, FlowLeftArrowFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.38 6.38c.34-.34.9-.34 1.24 0s.34.9 0 1.24l-3.5 3.5h9.08c.42-2.27 2.4-4 4.8-4 2.7 0 4.87 2.19 4.87 4.88 0 2.7-2.18 4.87-4.87 4.87-2.4 0-4.38-1.72-4.8-4H4.11l3.5 3.51c.35.34.35.9 0 1.24-.33.34-.89.34-1.23 0l-5-5c-.34-.34-.34-.9 0-1.24z" />
    </IconBase>
  ))
);

FlowLeftArrowFill.displayName = 'FlowLeftArrowFill';

// Triple export pattern
export { FlowLeftArrowFill, FlowLeftArrowFill as FlowLeftArrowFillIcon, FlowLeftArrowFill as SiFlowLeftArrowFill };
export default FlowLeftArrowFill;
export type { FlowLeftArrowFillProps };
