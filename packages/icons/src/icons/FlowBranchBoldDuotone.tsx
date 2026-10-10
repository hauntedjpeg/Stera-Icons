import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowBranchBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FlowBranchBoldDuotone = memo(
  forwardRef<SVGSVGElement, FlowBranchBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.8 13.8c.38-.4 1.02-.4 1.4 0l4.8 4.79V20h-1.41l-4.8-4.8c-.39-.38-.39-1.02 0-1.4M20 4v1.41l-5.54 5.54C13.16 12.26 11.37 13 9.51 13H2c-.55 0-1-.45-1-1s.45-1 1-1h7.51c1.33 0 2.6-.53 3.54-1.46L18.59 4z" opacity={0.4} />
        <path d="M21 15c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1h-5c-.55 0-1-.45-1-1s.45-1 1-1h4v-4c0-.55.45-1 1-1M21 2c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1s-1-.45-1-1V4h-4c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

FlowBranchBoldDuotone.displayName = 'FlowBranchBoldDuotone';

// Triple export pattern
export { FlowBranchBoldDuotone, FlowBranchBoldDuotone as FlowBranchBoldDuotoneIcon, FlowBranchBoldDuotone as SiFlowBranchBoldDuotone };
export default FlowBranchBoldDuotone;
export type { FlowBranchBoldDuotoneProps };
