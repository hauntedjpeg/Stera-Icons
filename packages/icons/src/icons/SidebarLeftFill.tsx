import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SidebarLeftFillProps = Omit<IconBaseProps, 'children'>;

const SidebarLeftFill = memo(
  forwardRef<SVGSVGElement, SidebarLeftFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="sidebar-left-fill" {...props}>
      <path fillRule="evenodd" d="M15.6 3.13q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v3.2q.01 1.64-.05 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05H8.4q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.05-2.7v-3.2q-.01-1.64.05-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zm-5.72 16h5.72c1.13 0 1.93 0 2.56-.06a3 3 0 0 0 1.26-.29q.9-.46 1.36-1.36c.15-.28.24-.65.3-1.26.04-.63.05-1.43.05-2.56v-3.2c0-1.13 0-1.93-.06-2.56a3 3 0 0 0-.29-1.26 3 3 0 0 0-1.36-1.36 3 3 0 0 0-1.26-.3 35 35 0 0 0-2.56-.04H9.88z" clipRule="evenodd" />
    </IconBase>
  ))
);

SidebarLeftFill.displayName = 'SidebarLeftFill';

// Triple export pattern (lucide-react style)
export { SidebarLeftFill, SidebarLeftFill as SidebarLeftFillIcon, SidebarLeftFill as SiSidebarLeftFill };
export default SidebarLeftFill;
export type { SidebarLeftFillProps };
