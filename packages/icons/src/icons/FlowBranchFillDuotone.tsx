import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowBranchFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowBranchFillDuotone = memo(
  forwardRef<SVGSVGElement, FlowBranchFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.88 13.88c.34-.34.9-.34 1.24 0l3.38 3.38-1.24 1.24-3.38-3.38c-.34-.34-.34-.9 0-1.24M18.5 6.74l-4.12 4.12c-1.3 1.3-3.04 2.02-4.87 2.02H2c-.48 0-.87-.4-.87-.88s.39-.87.87-.87h7.51c1.36 0 2.67-.54 3.63-1.5l4.12-4.13z" opacity={0.4} />
        <path d="M20.38 15.38c.25-.25.63-.32.95-.19.33.14.54.46.54.81v5c0 .48-.39.88-.87.88h-5c-.35 0-.67-.22-.8-.54-.14-.33-.07-.7.18-.96zM21 2.13c.48 0 .87.39.87.87v5c0 .35-.2.67-.54.8-.32.14-.7.07-.95-.18l-5-5c-.25-.25-.32-.63-.19-.95.14-.33.46-.54.81-.54z" />
    </IconBase>
  ))
);

FlowBranchFillDuotone.displayName = 'FlowBranchFillDuotone';

// Triple export pattern
export { FlowBranchFillDuotone, FlowBranchFillDuotone as FlowBranchFillDuotoneIcon, FlowBranchFillDuotone as SiFlowBranchFillDuotone };
export default FlowBranchFillDuotone;
export type { FlowBranchFillDuotoneProps };
