import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowUpArrowFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowUpArrowFillDuotone = memo(
  forwardRef<SVGSVGElement, FlowUpArrowFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 13.13c2.7 0 4.88 2.18 4.88 4.87 0 2.7-2.19 4.88-4.88 4.88-2.7 0-4.87-2.19-4.87-4.88 0-2.7 2.18-4.87 4.87-4.87" opacity={.4} />
        <path d="M12 1.13q.36 0 .62.25l5 5c.34.34.34.9 0 1.24s-.9.34-1.24 0l-3.5-3.5v9.08q-.43-.07-.88-.07-.46 0-.88.07V4.11l-3.5 3.5c-.34.35-.9.35-1.24 0-.34-.33-.34-.89 0-1.23l5-5 .06-.06q.25-.19.56-.2" />
    </IconBase>
  ))
);

FlowUpArrowFillDuotone.displayName = 'FlowUpArrowFillDuotone';

// Triple export pattern
export { FlowUpArrowFillDuotone, FlowUpArrowFillDuotone as FlowUpArrowFillDuotoneIcon, FlowUpArrowFillDuotone as SiFlowUpArrowFillDuotone };
export default FlowUpArrowFillDuotone;
export type { FlowUpArrowFillDuotoneProps };
