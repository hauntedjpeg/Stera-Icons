import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MacWindowFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MacWindowFillDuotone = memo(
  forwardRef<SVGSVGElement, MacWindowFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="mac-window-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M16.2 4.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v4.4q.01 1.24-.05 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.81.06-2.05.05H7.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.82-.04-2.05V9.8q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04zM6.75 7.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m3.5 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m3.5 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5" clipRule="evenodd" opacity={.4} />
        <path d="M8 8.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M11.5 8.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M15 8.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0" />
    </IconBase>
  ))
);

MacWindowFillDuotone.displayName = 'MacWindowFillDuotone';

// Triple export pattern (lucide-react style)
export { MacWindowFillDuotone, MacWindowFillDuotone as MacWindowFillDuotoneIcon, MacWindowFillDuotone as SiMacWindowFillDuotone };
export default MacWindowFillDuotone;
export type { MacWindowFillDuotoneProps };
