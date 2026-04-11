import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowBranchFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowBranchFillDuotone = memo(
  forwardRef<SVGSVGElement, FlowBranchFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.88 13.88a.9.9 0 0 1 1.24 0l3.38 3.38-1.24 1.24-3.38-3.38a.9.9 0 0 1 0-1.24M18.5 6.74l-4.12 4.12a7 7 0 0 1-4.87 2.02H2a.88.88 0 0 1 0-1.76h7.51c1.36 0 2.67-.53 3.63-1.5l4.12-4.12z" opacity={0.4} />
        <path d="M20.38 15.38a.88.88 0 0 1 1.5.62v5c0 .48-.4.88-.88.88h-5a.88.88 0 0 1-.62-1.5zM21 2.13c.48 0 .87.39.87.87v5a.88.88 0 0 1-1.49.62l-5-5a.88.88 0 0 1 .62-1.5z" />
    </IconBase>
  ))
);

FlowBranchFillDuotone.displayName = 'FlowBranchFillDuotone';

// Triple export pattern (lucide-react style)
export { FlowBranchFillDuotone, FlowBranchFillDuotone as FlowBranchFillDuotoneIcon, FlowBranchFillDuotone as SiFlowBranchFillDuotone };
export default FlowBranchFillDuotone;
export type { FlowBranchFillDuotoneProps };
