import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowUpArrowFillProps = Omit<IconBaseProps, 'children'>;

const FlowUpArrowFill = memo(
  forwardRef<SVGSVGElement, FlowUpArrowFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.38 1.38c.34-.34.9-.34 1.24 0l5 5c.34.34.34.9 0 1.24s-.9.34-1.24 0l-3.5-3.5v9.08c2.27.42 4 2.4 4 4.8 0 2.7-2.19 4.87-4.88 4.87-2.7 0-4.88-2.18-4.88-4.87 0-2.4 1.73-4.38 4-4.8V4.11l-3.5 3.5c-.34.35-.9.35-1.24 0-.34-.33-.34-.89 0-1.23z" />
    </IconBase>
  ))
);

FlowUpArrowFill.displayName = 'FlowUpArrowFill';

// Triple export pattern
export { FlowUpArrowFill, FlowUpArrowFill as FlowUpArrowFillIcon, FlowUpArrowFill as SiFlowUpArrowFill };
export default FlowUpArrowFill;
export type { FlowUpArrowFillProps };
