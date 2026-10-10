import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MacWindowFillProps = Omit<IconBaseProps, 'children'>;

const MacWindowFill = memo(
  forwardRef<SVGSVGElement, MacWindowFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.2 4.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v4.4q.01 1.24-.05 2.04-.04.83-.38 1.52-.57 1.11-1.7 1.7-.68.33-1.5.37-.81.06-2.05.05H7.8q-1.24.01-2.04-.05-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.68-.37-1.5-.06-.82-.04-2.05V9.8q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04zM6.75 7.5c-.69 0-1.25.56-1.25 1.25S6.06 10 6.75 10 8 9.44 8 8.75 7.44 7.5 6.75 7.5m3.5 0C9.56 7.5 9 8.06 9 8.75S9.56 10 10.25 10s1.25-.56 1.25-1.25-.56-1.25-1.25-1.25m3.5 0c-.69 0-1.25.56-1.25 1.25S13.06 10 13.75 10 15 9.44 15 8.75s-.56-1.25-1.25-1.25" clipRule="evenodd" />
    </IconBase>
  ))
);

MacWindowFill.displayName = 'MacWindowFill';

// Triple export pattern
export { MacWindowFill, MacWindowFill as MacWindowFillIcon, MacWindowFill as SiMacWindowFill };
export default MacWindowFill;
export type { MacWindowFillProps };
