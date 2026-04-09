import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MacWindowCursorFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MacWindowCursorFillDuotone = memo(
  forwardRef<SVGSVGElement, MacWindowCursorFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="mac-window-cursor-fill-duotone" {...props}>
      <path d="M16.2 4.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05V11a.88.88 0 0 1-1.75 0V9.8c0-.85 0-1.44-.04-1.9s-.1-.69-.2-.86q-.32-.62-.93-.93a2 2 0 0 0-.86-.2c-.46-.03-1.05-.04-1.9-.04H7.8c-.85 0-1.44 0-1.9.04s-.69.1-.86.2q-.62.32-.93.93c-.1.17-.16.41-.2.86-.03.46-.04 1.05-.04 1.9v4.4c0 .85 0 1.44.04 1.9s.1.69.2.86q.32.61.93.93c.17.1.41.16.86.2.46.03 1.05.04 1.9.04H13a.88.88 0 0 1 0 1.75H7.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.82-.04-2.05V9.8q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04z" opacity={0.4} />
        <path d="M6.75 7.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M10.25 7.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M13.75 7.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" opacity={0.4} />
        <path d="m14.98 11.4.2.05 6.76 2.25a1.37 1.37 0 0 1-.05 2.61l-2.77.81-.81 2.77a1.37 1.37 0 0 1-2.6.05l-2.26-6.76c-.34-1 .53-1.96 1.53-1.79" />
    </IconBase>
  ))
);

MacWindowCursorFillDuotone.displayName = 'MacWindowCursorFillDuotone';

// Triple export pattern (lucide-react style)
export { MacWindowCursorFillDuotone, MacWindowCursorFillDuotone as MacWindowCursorFillDuotoneIcon, MacWindowCursorFillDuotone as SiMacWindowCursorFillDuotone };
export default MacWindowCursorFillDuotone;
export type { MacWindowCursorFillDuotoneProps };
