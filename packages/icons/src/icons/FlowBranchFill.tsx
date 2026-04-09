import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowBranchFillProps = Omit<IconBaseProps, 'children'>;

const FlowBranchFill = memo(
  forwardRef<SVGSVGElement, FlowBranchFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="flow-branch-fill" {...props}>
      <path d="M13.88 13.88a.9.9 0 0 1 1.24 0l3.38 3.38 1.88-1.88a.88.88 0 0 1 1.5.62v5c0 .48-.4.88-.88.88h-5a.88.88 0 0 1-.62-1.5l1.88-1.88-3.38-3.38a.9.9 0 0 1 0-1.24M21 2.13c.48 0 .88.39.88.87v5a.88.88 0 0 1-1.5.62L18.5 6.74l-4.12 4.12a7 7 0 0 1-4.87 2.02H2a.88.88 0 0 1 0-1.76h7.51c1.36 0 2.67-.53 3.63-1.5l4.12-4.12-1.88-1.88a.88.88 0 0 1 .62-1.5z" />
    </IconBase>
  ))
);

FlowBranchFill.displayName = 'FlowBranchFill';

// Triple export pattern (lucide-react style)
export { FlowBranchFill, FlowBranchFill as FlowBranchFillIcon, FlowBranchFill as SiFlowBranchFill };
export default FlowBranchFill;
export type { FlowBranchFillProps };
