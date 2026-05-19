import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayoutListFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const LayoutListFillDuotone = memo(
  forwardRef<SVGSVGElement, LayoutListFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20.5 18.5a1 1 0 1 1 0 2h-6.75a1 1 0 1 1 0-2zM20.5 13.75a1 1 0 1 1 0 2h-6.75a1 1 0 1 1 0-2zM20.5 8.25a1 1 0 1 1 0 2h-6.75a1 1 0 1 1 0-2zM20.5 3.5a1 1 0 1 1 0 2h-6.75a1 1 0 1 1 0-2z" opacity={0.4} />
        <path d="M7.85 12.88q.6 0 1.06.02.45.02.92.23.68.36 1.04 1.04c.15.3.2.62.23.92q.04.45.03 1.06v1.95q0 .6-.03 1.06-.02.45-.23.92-.36.68-1.04 1.04-.46.2-.92.23-.45.03-1.06.02H5.9q-.6 0-1.06-.02-.45-.02-.92-.23-.68-.36-1.04-1.04-.2-.46-.23-.92-.03-.45-.02-1.06v-1.95q0-.6.02-1.06.02-.45.23-.92.36-.68 1.04-1.04c.3-.15.62-.2.92-.23q.45-.04 1.06-.03zM7.85 2.63q.6 0 1.06.02.45.02.92.23.68.36 1.04 1.04c.15.3.2.62.23.92q.04.45.03 1.06v1.95q0 .6-.03 1.06-.02.45-.23.92-.36.68-1.04 1.04c-.3.15-.62.2-.92.23q-.45.04-1.06.03H5.9q-.6 0-1.06-.03-.45-.02-.92-.23-.68-.36-1.04-1.04-.2-.46-.23-.92-.03-.45-.02-1.06V5.9q0-.6.02-1.06.02-.45.23-.92.36-.68 1.04-1.04.46-.2.92-.23.45-.03 1.06-.02z" />
    </IconBase>
  ))
);

LayoutListFillDuotone.displayName = 'LayoutListFillDuotone';

// Triple export pattern (lucide-react style)
export { LayoutListFillDuotone, LayoutListFillDuotone as LayoutListFillDuotoneIcon, LayoutListFillDuotone as SiLayoutListFillDuotone };
export default LayoutListFillDuotone;
export type { LayoutListFillDuotoneProps };
