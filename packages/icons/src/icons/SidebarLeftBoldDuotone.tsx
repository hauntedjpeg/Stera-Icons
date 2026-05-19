import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SidebarLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SidebarLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, SidebarLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.4 3q1.44-.01 2.38.05a5 5 0 0 1 1.76.44 4.5 4.5 0 0 1 1.97 1.97q.39.8.44 1.76.06.94.05 2.38v4.8q.01 1.44-.05 2.38a5 5 0 0 1-.44 1.76 4.5 4.5 0 0 1-1.97 1.97 5 5 0 0 1-1.76.44q-.94.06-2.38.05H10v-2h6.4c1 0 1.68 0 2.22-.04.52-.05.8-.13 1.01-.23a2.5 2.5 0 0 0 1.1-1.1c.1-.2.18-.5.23-1.01.04-.54.04-1.22.04-2.22V9.6c0-1 0-1.68-.04-2.22-.05-.52-.13-.8-.23-1.01a2.5 2.5 0 0 0-1.1-1.1c-.2-.1-.5-.18-1.01-.23C18.08 5 17.4 5 16.4 5H10V3z" opacity={.4} />
        <path fillRule="evenodd" d="M10 21H7.6q-1.44.01-2.38-.05a5 5 0 0 1-1.76-.44 4.5 4.5 0 0 1-1.97-1.97 5 5 0 0 1-.44-1.76Q1 15.84 1 14.4V9.6q-.01-1.44.05-2.38a5 5 0 0 1 .44-1.76 4.5 4.5 0 0 1 1.97-1.97 5 5 0 0 1 1.76-.44Q6.16 3 7.6 3H10zM7.6 5c-1 0-1.68 0-2.22.04-.52.05-.8.13-1.01.23a2.5 2.5 0 0 0-1.1 1.1c-.1.2-.18.5-.23 1.01C3 7.92 3 8.6 3 9.6v4.8c0 1 0 1.68.04 2.22.05.52.13.8.23 1.01q.37.73 1.1 1.1c.2.1.5.18 1.01.23.54.04 1.22.04 2.22.04H8V5z" clipRule="evenodd" />
    </IconBase>
  ))
);

SidebarLeftBoldDuotone.displayName = 'SidebarLeftBoldDuotone';

// Triple export pattern (lucide-react style)
export { SidebarLeftBoldDuotone, SidebarLeftBoldDuotone as SidebarLeftBoldDuotoneIcon, SidebarLeftBoldDuotone as SiSidebarLeftBoldDuotone };
export default SidebarLeftBoldDuotone;
export type { SidebarLeftBoldDuotoneProps };
