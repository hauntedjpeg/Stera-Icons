import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowLeftArrowFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowLeftArrowFillDuotone = memo(
  forwardRef<SVGSVGElement, FlowLeftArrowFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18 7.13c2.7 0 4.88 2.18 4.88 4.87 0 2.7-2.19 4.88-4.88 4.88-2.7 0-4.87-2.19-4.87-4.88 0-2.7 2.18-4.87 4.87-4.87" opacity={.4} />
        <path d="M6.38 6.38c.34-.34.9-.34 1.24 0s.34.9 0 1.24l-3.5 3.5h9.09q-.09.43-.09.88 0 .46.09.87H4.1l3.5 3.51c.35.34.35.9 0 1.24-.33.34-.89.34-1.23 0l-5-5q-.24-.27-.25-.62 0-.36.25-.62z" />
    </IconBase>
  ))
);

FlowLeftArrowFillDuotone.displayName = 'FlowLeftArrowFillDuotone';

// Triple export pattern
export { FlowLeftArrowFillDuotone, FlowLeftArrowFillDuotone as FlowLeftArrowFillDuotoneIcon, FlowLeftArrowFillDuotone as SiFlowLeftArrowFillDuotone };
export default FlowLeftArrowFillDuotone;
export type { FlowLeftArrowFillDuotoneProps };
