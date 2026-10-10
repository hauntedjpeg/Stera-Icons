import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayoutListFillProps = Omit<IconBaseProps, 'children'>;

const LayoutListFill = memo(
  forwardRef<SVGSVGElement, LayoutListFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.85 12.88q.6 0 1.06.02.45.02.92.23.68.36 1.04 1.04c.15.3.2.62.23.92q.04.45.03 1.06v1.95q0 .6-.03 1.06-.02.45-.23.92-.36.68-1.04 1.04-.46.2-.92.23-.45.03-1.06.02H5.9q-.6 0-1.06-.02-.45-.02-.92-.23-.68-.36-1.04-1.04-.2-.46-.23-.92-.03-.45-.02-1.06v-1.95q0-.6.02-1.06.02-.45.23-.92.36-.68 1.04-1.04c.3-.15.62-.2.92-.23q.45-.04 1.06-.03zM20.5 18.5c.55 0 1 .45 1 1s-.45 1-1 1h-6.75c-.55 0-1-.45-1-1s.45-1 1-1zM20.5 13.75c.55 0 1 .45 1 1s-.45 1-1 1h-6.75c-.55 0-1-.45-1-1s.45-1 1-1zM7.85 2.63q.6 0 1.06.02.45.02.92.23.68.36 1.04 1.04c.15.3.2.62.23.92q.04.45.03 1.06v1.95q0 .6-.03 1.06-.02.45-.23.92-.36.68-1.04 1.04c-.3.15-.62.2-.92.23q-.45.04-1.06.03H5.9q-.6 0-1.06-.03-.45-.02-.92-.23-.68-.36-1.04-1.04-.2-.46-.23-.92-.03-.45-.02-1.06V5.9q0-.6.02-1.06.02-.45.23-.92.36-.68 1.04-1.04.46-.2.92-.23.45-.03 1.06-.02zM20.5 8.25c.55 0 1 .45 1 1s-.45 1-1 1h-6.75c-.55 0-1-.45-1-1s.45-1 1-1zM20.5 3.5c.55 0 1 .45 1 1s-.45 1-1 1h-6.75c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

LayoutListFill.displayName = 'LayoutListFill';

// Triple export pattern
export { LayoutListFill, LayoutListFill as LayoutListFillIcon, LayoutListFill as SiLayoutListFill };
export default LayoutListFill;
export type { LayoutListFillProps };
