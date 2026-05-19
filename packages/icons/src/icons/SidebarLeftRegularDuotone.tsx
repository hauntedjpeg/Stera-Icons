import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SidebarLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SidebarLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, SidebarLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.4 3.25q1.44-.01 2.36.05c.63.05 1.17.16 1.67.41.8.41 1.45 1.06 1.86 1.86.25.5.36 1.04.41 1.67q.06.93.05 2.36v4.8q.01 1.44-.05 2.36a4 4 0 0 1-.41 1.67c-.41.8-1.06 1.45-1.86 1.86-.5.25-1.04.36-1.67.41q-.92.06-2.36.05H9.75v-1.5h6.65c1 0 1.7 0 2.24-.04a3 3 0 0 0 1.1-.26q.8-.4 1.21-1.2c.13-.25.21-.58.26-1.11.04-.55.04-1.25.04-2.24V9.6c0-1 0-1.7-.04-2.24a3 3 0 0 0-.26-1.1 2.8 2.8 0 0 0-1.2-1.21 3 3 0 0 0-1.11-.26c-.55-.04-1.25-.04-2.24-.04H9.75v-1.5z" opacity={.4} />
        <path fillRule="evenodd" d="M9.75 20.75H7.6q-1.44.01-2.36-.05a4 4 0 0 1-1.67-.41 4.3 4.3 0 0 1-1.86-1.86 4 4 0 0 1-.41-1.67q-.06-.93-.05-2.36V9.6q-.01-1.44.05-2.36c.05-.63.16-1.17.41-1.67.41-.8 1.06-1.45 1.86-1.86.5-.25 1.04-.36 1.67-.41q.93-.06 2.36-.05h2.15zm-2.15-16c-1 0-1.7 0-2.24.04a3 3 0 0 0-1.1.26q-.8.4-1.21 1.2a3 3 0 0 0-.26 1.11c-.04.55-.04 1.25-.04 2.24v4.8c0 1 0 1.7.04 2.24.05.53.13.86.26 1.1q.4.8 1.2 1.21c.25.13.58.21 1.11.26.55.04 1.25.04 2.24.04h.65V4.75z" clipRule="evenodd" />
    </IconBase>
  ))
);

SidebarLeftRegularDuotone.displayName = 'SidebarLeftRegularDuotone';

// Triple export pattern (lucide-react style)
export { SidebarLeftRegularDuotone, SidebarLeftRegularDuotone as SidebarLeftRegularDuotoneIcon, SidebarLeftRegularDuotone as SiSidebarLeftRegularDuotone };
export default SidebarLeftRegularDuotone;
export type { SidebarLeftRegularDuotoneProps };
