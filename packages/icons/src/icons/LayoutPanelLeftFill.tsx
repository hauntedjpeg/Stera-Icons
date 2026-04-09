import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayoutPanelLeftFillProps = Omit<IconBaseProps, 'children'>;

const LayoutPanelLeftFill = memo(
  forwardRef<SVGSVGElement, LayoutPanelLeftFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="layout-panel-left-fill" {...props}>
      <path d="M7.6 2.13q.6 0 1.06.02.45.02.92.23.68.36 1.04 1.04c.15.3.2.62.23.92q.04.45.03 1.06v13.2q0 .6-.03 1.06-.02.45-.23.92-.36.68-1.04 1.04-.46.2-.92.23-.45.03-1.06.02H5.4q-.6 0-1.06-.02-.45-.02-.92-.23-.68-.36-1.04-1.04-.2-.46-.23-.92-.03-.45-.02-1.06V5.4q0-.6.02-1.06.02-.45.23-.92.36-.68 1.04-1.04.46-.2.92-.23.45-.03 1.06-.02zM18.6 13.13q.6 0 1.06.02.45.02.92.23.68.36 1.04 1.04.2.46.23.92.03.45.02 1.06v2.2q0 .6-.02 1.06-.02.45-.23.92-.36.68-1.04 1.04-.46.2-.92.23-.45.03-1.06.02h-2.2q-.6 0-1.06-.02-.45-.02-.92-.23-.68-.36-1.04-1.04c-.15-.3-.2-.62-.23-.92q-.04-.45-.03-1.06v-2.2q0-.6.03-1.06.02-.45.23-.92.36-.68 1.04-1.04c.3-.15.62-.2.92-.23q.45-.04 1.06-.03zM18.6 2.13q.6 0 1.06.02.45.02.92.23.68.36 1.04 1.04.2.46.23.92.03.45.02 1.06v2.2q0 .6-.02 1.06-.02.45-.23.92-.36.68-1.04 1.04c-.3.15-.62.2-.92.23q-.45.04-1.06.03h-2.2q-.6 0-1.06-.03-.45-.02-.92-.23-.68-.36-1.04-1.04c-.15-.3-.2-.62-.23-.92q-.04-.45-.03-1.06V5.4q0-.6.03-1.06.02-.45.23-.92.36-.68 1.04-1.04.46-.2.92-.23.45-.03 1.06-.02z" />
    </IconBase>
  ))
);

LayoutPanelLeftFill.displayName = 'LayoutPanelLeftFill';

// Triple export pattern (lucide-react style)
export { LayoutPanelLeftFill, LayoutPanelLeftFill as LayoutPanelLeftFillIcon, LayoutPanelLeftFill as SiLayoutPanelLeftFill };
export default LayoutPanelLeftFill;
export type { LayoutPanelLeftFillProps };
