import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SidebarRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SidebarRightFillDuotone = memo(
  forwardRef<SVGSVGElement, SidebarRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="sidebar-right-fill-duotone" {...props}>
      <path d="M14.13 3.13v17.75H8.4q-1.64.02-2.7-.06a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.05-2.7v-3.2q-.01-1.64.05-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06z" opacity={.4} />
        <path d="M15.6 3.13q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v3.2q.01 1.64-.05 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05h-1.47V3.14z" />
    </IconBase>
  ))
);

SidebarRightFillDuotone.displayName = 'SidebarRightFillDuotone';

// Triple export pattern (lucide-react style)
export { SidebarRightFillDuotone, SidebarRightFillDuotone as SidebarRightFillDuotoneIcon, SidebarRightFillDuotone as SiSidebarRightFillDuotone };
export default SidebarRightFillDuotone;
export type { SidebarRightFillDuotoneProps };
