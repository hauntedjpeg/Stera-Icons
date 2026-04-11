import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowMergeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowMergeFillDuotone = memo(
  forwardRef<SVGSVGElement, FlowMergeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.88 13.88a.88.88 0 0 1 1.24 1.24l-6.5 6.5a.88.88 0 0 1-1.24-1.24zM1.38 2.38a.9.9 0 0 1 1.24 0l7.24 7.24c.96.96 2.27 1.5 3.63 1.5h3.13v1.75H13.5a7 7 0 0 1-4.87-2L1.38 3.61a.9.9 0 0 1 0-1.24" opacity={0.4} />
        <path d="M17.17 7.7c.32-.14.7-.07.95.18l3.53 3.54a.9.9 0 0 1 0 1.24l-3.54 3.46a.87.87 0 0 1-1.48-.62v-7c0-.35.2-.67.54-.8" />
    </IconBase>
  ))
);

FlowMergeFillDuotone.displayName = 'FlowMergeFillDuotone';

// Triple export pattern (lucide-react style)
export { FlowMergeFillDuotone, FlowMergeFillDuotone as FlowMergeFillDuotoneIcon, FlowMergeFillDuotone as SiFlowMergeFillDuotone };
export default FlowMergeFillDuotone;
export type { FlowMergeFillDuotoneProps };
