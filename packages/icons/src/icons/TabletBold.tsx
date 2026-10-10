import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TabletBoldProps = Omit<IconBaseProps, 'children'>;

const TabletBold = memo(
  forwardRef<SVGSVGElement, TabletBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 16c.83 0 1.5.67 1.5 1.5S12.83 19 12 19s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5" />
        <path fillRule="evenodd" d="M15.2 1q1.23-.01 2.05.04c.56.05 1.08.15 1.57.4.75.38 1.36 1 1.74 1.74.25.49.35 1 .4 1.57q.05.82.04 2.05v10.4q.01 1.23-.04 2.05c-.05.56-.15 1.08-.4 1.57-.38.75-1 1.36-1.74 1.74-.49.25-1 .35-1.57.4q-.82.05-2.05.04H8.8q-1.23.01-2.05-.04c-.56-.05-1.08-.15-1.57-.4-.75-.38-1.36-1-1.74-1.74-.25-.49-.35-1-.4-1.57Q3 18.43 3 17.2V6.8q-.01-1.23.04-2.05c.05-.56.15-1.08.4-1.57.38-.75 1-1.36 1.74-1.74.49-.25 1-.35 1.57-.4Q7.57 1 8.8 1zM8.8 3c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18q-.57.3-.87.87c-.08.16-.15.38-.18.82C5 5.36 5 5.94 5 6.8v10.4c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h6.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18q.57-.3.87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V6.8c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82q-.3-.57-.87-.87c-.16-.08-.38-.15-.82-.18C16.64 3 16.06 3 15.2 3z" clipRule="evenodd" />
    </IconBase>
  ))
);

TabletBold.displayName = 'TabletBold';

// Triple export pattern
export { TabletBold, TabletBold as TabletBoldIcon, TabletBold as SiTabletBold };
export default TabletBold;
export type { TabletBoldProps };
