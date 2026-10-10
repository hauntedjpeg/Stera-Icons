import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SidebarRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SidebarRightFillDuotone = memo(
  forwardRef<SVGSVGElement, SidebarRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.13 3.13v17.75H7.6q-1.44.02-2.37-.06c-.64-.05-1.2-.16-1.72-.42-.82-.42-1.49-1.09-1.9-1.91-.27-.52-.38-1.08-.43-1.72-.06-.63-.05-1.4-.05-2.37V9.6q-.01-1.44.05-2.37c.05-.64.16-1.2.42-1.72.42-.82 1.09-1.49 1.91-1.9.52-.27 1.08-.38 1.72-.43q.93-.08 2.37-.06z" opacity={.4} />
        <path d="M16.4 3.13q1.44-.01 2.37.05c.64.05 1.2.16 1.72.42.82.42 1.49 1.09 1.9 1.91.27.52.38 1.08.43 1.72q.07.93.05 2.37v4.8q.01 1.44-.05 2.37c-.05.64-.16 1.2-.42 1.72-.42.82-1.09 1.49-1.91 1.9-.52.27-1.08.38-1.72.43q-.93.07-2.37.05h-2.27V3.14z" />
    </IconBase>
  ))
);

SidebarRightFillDuotone.displayName = 'SidebarRightFillDuotone';

// Triple export pattern
export { SidebarRightFillDuotone, SidebarRightFillDuotone as SidebarRightFillDuotoneIcon, SidebarRightFillDuotone as SiSidebarRightFillDuotone };
export default SidebarRightFillDuotone;
export type { SidebarRightFillDuotoneProps };
