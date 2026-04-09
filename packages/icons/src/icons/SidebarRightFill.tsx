import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SidebarRightFillProps = Omit<IconBaseProps, 'children'>;

const SidebarRightFill = memo(
  forwardRef<SVGSVGElement, SidebarRightFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="sidebar-right-fill" {...props}>
      <path fillRule="evenodd" d="M15.6 3.13q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v3.2q.01 1.64-.05 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05H8.4q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.05-2.7v-3.2q-.01-1.64.05-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zM8.4 4.88c-1.13 0-1.93 0-2.56.05-.6.05-.98.14-1.26.29q-.9.46-1.36 1.36c-.15.28-.24.65-.3 1.26a35 35 0 0 0-.04 2.56v3.2c0 1.13 0 1.93.05 2.56.05.6.14.98.29 1.26q.46.9 1.36 1.36c.28.15.65.24 1.26.3.63.04 1.43.05 2.56.05h5.73V4.88z" clipRule="evenodd" />
    </IconBase>
  ))
);

SidebarRightFill.displayName = 'SidebarRightFill';

// Triple export pattern (lucide-react style)
export { SidebarRightFill, SidebarRightFill as SidebarRightFillIcon, SidebarRightFill as SiSidebarRightFill };
export default SidebarRightFill;
export type { SidebarRightFillProps };
