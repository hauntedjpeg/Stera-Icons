import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SidebarRightFillProps = Omit<IconBaseProps, 'children'>;

const SidebarRightFill = memo(
  forwardRef<SVGSVGElement, SidebarRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.4 3.13q1.44-.01 2.37.05c.64.05 1.2.16 1.72.42.82.42 1.49 1.09 1.9 1.91.27.52.38 1.08.43 1.72q.07.93.05 2.37v4.8q.01 1.44-.05 2.37c-.05.64-.16 1.2-.42 1.72a4.4 4.4 0 0 1-1.91 1.9c-.52.27-1.08.38-1.72.43q-.93.07-2.37.05H7.6q-1.44.01-2.37-.05a5 5 0 0 1-1.72-.42 4.4 4.4 0 0 1-1.9-1.91 5 5 0 0 1-.43-1.72c-.06-.63-.05-1.4-.05-2.37V9.6q-.01-1.44.05-2.37c.05-.64.16-1.2.42-1.72a4.4 4.4 0 0 1 1.91-1.9 5 5 0 0 1 1.72-.43q.93-.08 2.37-.06zM7.6 4.88c-1 0-1.69 0-2.23.04a3 3 0 0 0-1.06.24q-.76.39-1.15 1.15c-.12.23-.2.53-.24 1.06-.04.54-.04 1.24-.04 2.23v4.8c0 1 0 1.69.04 2.23.04.53.12.83.24 1.06q.39.76 1.15 1.15c.23.12.53.2 1.06.24.54.04 1.24.05 2.23.05h6.53V4.88z" clipRule="evenodd" />
    </IconBase>
  ))
);

SidebarRightFill.displayName = 'SidebarRightFill';

// Triple export pattern (lucide-react style)
export { SidebarRightFill, SidebarRightFill as SidebarRightFillIcon, SidebarRightFill as SiSidebarRightFill };
export default SidebarRightFill;
export type { SidebarRightFillProps };
