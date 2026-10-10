import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowBranchFillProps = Omit<IconBaseProps, 'children'>;

const FlowBranchFill = memo(
  forwardRef<SVGSVGElement, FlowBranchFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.88 13.88c.34-.34.9-.34 1.24 0l3.38 3.38 1.88-1.88c.25-.25.63-.32.96-.19.32.14.54.46.54.81v5c0 .48-.4.88-.88.88h-5c-.35 0-.67-.22-.8-.54-.14-.33-.07-.7.18-.96l1.88-1.88-3.38-3.38c-.34-.34-.34-.9 0-1.24M21 2.13c.48 0 .88.39.88.87v5c0 .35-.22.67-.54.8-.33.14-.7.07-.96-.18L18.5 6.74l-4.12 4.12c-1.3 1.3-3.04 2.02-4.87 2.02H2c-.48 0-.87-.4-.87-.88s.39-.87.87-.87h7.51c1.36 0 2.67-.54 3.63-1.5l4.12-4.13-1.88-1.88c-.25-.25-.32-.63-.19-.95.14-.33.46-.54.81-.54z" />
    </IconBase>
  ))
);

FlowBranchFill.displayName = 'FlowBranchFill';

// Triple export pattern
export { FlowBranchFill, FlowBranchFill as FlowBranchFillIcon, FlowBranchFill as SiFlowBranchFill };
export default FlowBranchFill;
export type { FlowBranchFillProps };
