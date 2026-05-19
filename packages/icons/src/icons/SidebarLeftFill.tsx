import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SidebarLeftFillProps = Omit<IconBaseProps, 'children'>;

const SidebarLeftFill = memo(
  forwardRef<SVGSVGElement, SidebarLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.4 3.13q1.44-.01 2.37.05c.64.05 1.2.16 1.72.42.82.42 1.49 1.09 1.9 1.91.27.52.38 1.08.43 1.72q.07.93.05 2.37v4.8q.01 1.44-.05 2.37c-.05.64-.16 1.2-.42 1.72a4.4 4.4 0 0 1-1.91 1.9c-.52.27-1.08.38-1.72.43q-.93.07-2.37.05H7.6q-1.44.01-2.37-.05a5 5 0 0 1-1.72-.42 4.4 4.4 0 0 1-1.9-1.91 5 5 0 0 1-.43-1.72c-.06-.63-.05-1.4-.05-2.37V9.6q-.01-1.44.05-2.37c.05-.64.16-1.2.42-1.72a4.4 4.4 0 0 1 1.91-1.9 5 5 0 0 1 1.72-.43q.93-.08 2.37-.06zm-6.52 16h6.52c1 0 1.69 0 2.23-.05a3 3 0 0 0 1.06-.24q.76-.39 1.15-1.15c.12-.23.2-.53.24-1.06.04-.54.05-1.24.05-2.23V9.6c0-1 0-1.69-.05-2.23a3 3 0 0 0-.24-1.06q-.39-.76-1.15-1.15a3 3 0 0 0-1.06-.24c-.54-.04-1.24-.04-2.23-.04H9.88z" clipRule="evenodd" />
    </IconBase>
  ))
);

SidebarLeftFill.displayName = 'SidebarLeftFill';

// Triple export pattern (lucide-react style)
export { SidebarLeftFill, SidebarLeftFill as SidebarLeftFillIcon, SidebarLeftFill as SiSidebarLeftFill };
export default SidebarLeftFill;
export type { SidebarLeftFillProps };
