import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayoutListAltFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LayoutListAltFillDuotone = memo(
  forwardRef<SVGSVGElement, LayoutListAltFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.5 18.63a.88.88 0 0 1 0 1.75h-4.75a.88.88 0 0 1 0-1.75zM20.5 13.88a.88.88 0 0 1 0 1.74h-6.75a.88.88 0 0 1 0-1.74zM18.5 8.38a.88.88 0 0 1 0 1.74h-4.75a.88.88 0 0 1 0-1.74zM20.5 3.63a.88.88 0 0 1 0 1.75h-6.75a.88.88 0 0 1 0-1.75z" opacity={0.4} />
        <path d="M7.85 12.88q.6 0 1.06.02.45.02.92.23.68.36 1.04 1.04c.15.3.2.62.23.92q.04.45.03 1.06v1.95q0 .6-.03 1.06-.02.45-.23.92-.36.68-1.04 1.04-.46.2-.92.23-.45.03-1.06.02H5.9q-.6 0-1.06-.02-.45-.02-.92-.23-.68-.36-1.04-1.04-.2-.46-.23-.92-.03-.45-.02-1.06v-1.95q0-.6.02-1.06.02-.45.23-.92.36-.68 1.04-1.04c.3-.15.62-.2.92-.23q.45-.04 1.06-.03zM7.85 2.63q.6 0 1.06.02.45.02.92.23.68.36 1.04 1.04c.15.3.2.62.23.92q.04.45.03 1.06v1.95q0 .6-.03 1.06-.02.45-.23.92-.36.68-1.04 1.04c-.3.15-.62.2-.92.23q-.45.04-1.06.03H5.9q-.6 0-1.06-.03-.45-.02-.92-.23-.68-.36-1.04-1.04-.2-.46-.23-.92-.03-.45-.02-1.06V5.9q0-.6.02-1.06.02-.45.23-.92.36-.68 1.04-1.04.46-.2.92-.23.45-.03 1.06-.02z" />
    </IconBase>
  ))
);

LayoutListAltFillDuotone.displayName = 'LayoutListAltFillDuotone';

// Triple export pattern (lucide-react style)
export { LayoutListAltFillDuotone, LayoutListAltFillDuotone as LayoutListAltFillDuotoneIcon, LayoutListAltFillDuotone as SiLayoutListAltFillDuotone };
export default LayoutListAltFillDuotone;
export type { LayoutListAltFillDuotoneProps };
