import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowLeftArrowFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowLeftArrowFillDuotone = memo(
  forwardRef<SVGSVGElement, FlowLeftArrowFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18 7.13a4.87 4.87 0 1 1 0 9.74 4.87 4.87 0 0 1 0-9.75" opacity={.4} />
        <path d="M6.38 6.38a.88.88 0 0 1 1.24 1.24l-3.5 3.5h9.09a5 5 0 0 0 0 1.75H4.1l3.5 3.51a.88.88 0 0 1-1.23 1.24l-5-5a.9.9 0 0 1 0-1.24z" />
    </IconBase>
  ))
);

FlowLeftArrowFillDuotone.displayName = 'FlowLeftArrowFillDuotone';

// Triple export pattern (lucide-react style)
export { FlowLeftArrowFillDuotone, FlowLeftArrowFillDuotone as FlowLeftArrowFillDuotoneIcon, FlowLeftArrowFillDuotone as SiFlowLeftArrowFillDuotone };
export default FlowLeftArrowFillDuotone;
export type { FlowLeftArrowFillDuotoneProps };
