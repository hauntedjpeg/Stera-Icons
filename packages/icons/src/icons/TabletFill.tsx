import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TabletFillProps = Omit<IconBaseProps, 'children'>;

const TabletFill = memo(
  forwardRef<SVGSVGElement, TabletFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M15.2 1.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.82.05 2.05v10.4q.01 1.24-.05 2.04-.04.83-.38 1.52-.57 1.11-1.7 1.7-.68.33-1.5.37-.81.06-2.05.05H8.8q-1.24.01-2.04-.05-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.68-.37-1.5-.06-.81-.04-2.05V6.8q-.01-1.24.04-2.04.04-.83.38-1.52.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04zM12 16c-.83 0-1.5.67-1.5 1.5S11.17 19 12 19s1.5-.67 1.5-1.5S12.83 16 12 16" clipRule="evenodd" />
    </IconBase>
  ))
);

TabletFill.displayName = 'TabletFill';

// Triple export pattern
export { TabletFill, TabletFill as TabletFillIcon, TabletFill as SiTabletFill };
export default TabletFill;
export type { TabletFillProps };
