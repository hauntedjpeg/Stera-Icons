import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SidebarLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SidebarLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, SidebarLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="sidebar-left-fill-duotone" {...props}>
      <path d="M15.6 3.13q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v3.2q.01 1.64-.05 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05H9.88V3.14z" opacity={.4} />
        <path d="M9.88 20.88H8.4q-1.64.02-2.7-.06a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.05-2.7v-3.2q-.01-1.64.05-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06h1.47z" />
    </IconBase>
  ))
);

SidebarLeftFillDuotone.displayName = 'SidebarLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { SidebarLeftFillDuotone, SidebarLeftFillDuotone as SidebarLeftFillDuotoneIcon, SidebarLeftFillDuotone as SiSidebarLeftFillDuotone };
export default SidebarLeftFillDuotone;
export type { SidebarLeftFillDuotoneProps };
