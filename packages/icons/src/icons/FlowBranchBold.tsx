import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlowBranchBoldProps = Omit<IconBaseProps, 'children'>;

const FlowBranchBold = memo(
  forwardRef<SVGSVGElement, FlowBranchBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.8 13.8c.38-.4 1.02-.4 1.4 0l4.8 4.79V16c0-.55.45-1 1-1s1 .45 1 1v5c0 .55-.45 1-1 1h-5c-.55 0-1-.45-1-1s.45-1 1-1h2.59l-4.8-4.8c-.39-.38-.39-1.02 0-1.4M21 2c.55 0 1 .45 1 1v5c0 .55-.45 1-1 1s-1-.45-1-1V5.41l-5.54 5.54C13.16 12.26 11.37 13 9.51 13H2c-.55 0-1-.45-1-1s.45-1 1-1h7.51c1.33 0 2.6-.53 3.54-1.46L18.59 4H16c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

FlowBranchBold.displayName = 'FlowBranchBold';

// Triple export pattern
export { FlowBranchBold, FlowBranchBold as FlowBranchBoldIcon, FlowBranchBold as SiFlowBranchBold };
export default FlowBranchBold;
export type { FlowBranchBoldProps };
