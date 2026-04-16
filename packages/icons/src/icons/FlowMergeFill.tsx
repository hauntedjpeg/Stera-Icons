import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowMergeFillProps = Omit<IconBaseProps, 'children'>;

const FlowMergeFill = memo(
  forwardRef<SVGSVGElement, FlowMergeFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.88 13.88a.88.88 0 0 1 1.24 1.24l-6.5 6.5a.88.88 0 0 1-1.24-1.24zM1.38 2.38a.9.9 0 0 1 1.24 0l7.24 7.24c.96.96 2.27 1.5 3.62 1.5h3.14V8.5a.88.88 0 0 1 1.5-.62l3.53 3.54a.9.9 0 0 1 0 1.24l-3.54 3.46a.88.88 0 0 1-1.48-.62v-2.63h-3.15a7 7 0 0 1-4.86-2L1.38 3.61a.9.9 0 0 1 0-1.24" />
    </IconBase>
  ))
);

FlowMergeFill.displayName = 'FlowMergeFill';

// Triple export pattern (lucide-react style)
export { FlowMergeFill, FlowMergeFill as FlowMergeFillIcon, FlowMergeFill as SiFlowMergeFill };
export default FlowMergeFill;
export type { FlowMergeFillProps };
