import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MacWindowBoldProps = Omit<IconBaseProps, 'children'>;

const MacWindowBold = memo(
  forwardRef<SVGSVGElement, MacWindowBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.75 7.5C7.44 7.5 8 8.06 8 8.75S7.44 10 6.75 10 5.5 9.44 5.5 8.75 6.06 7.5 6.75 7.5M10.25 7.5c.69 0 1.25.56 1.25 1.25S10.94 10 10.25 10 9 9.44 9 8.75s.56-1.25 1.25-1.25M13.75 7.5c.69 0 1.25.56 1.25 1.25S14.44 10 13.75 10s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25" />
        <path fillRule="evenodd" d="M16.2 4q1.23-.01 2.05.04c.56.05 1.08.15 1.57.4.75.38 1.36 1 1.74 1.74.25.49.35 1 .4 1.57q.05.82.04 2.05v4.4q.01 1.23-.04 2.05c-.05.56-.15 1.08-.4 1.57-.38.75-1 1.36-1.74 1.74-.49.25-1 .35-1.57.4q-.82.05-2.05.04H7.8q-1.23.01-2.05-.04c-.56-.05-1.08-.15-1.57-.4-.75-.38-1.36-1-1.74-1.74-.25-.49-.35-1-.4-1.57Q2 15.43 2 14.2V9.8q-.01-1.23.04-2.05c.05-.56.15-1.08.4-1.57.38-.75 1-1.36 1.74-1.74.49-.25 1-.35 1.57-.4Q6.57 4 7.8 4zM7.8 6c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18q-.57.3-.87.87c-.08.16-.15.38-.18.82C4 8.36 4 8.94 4 9.8v4.4c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h8.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18q.57-.3.87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V9.8c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82q-.3-.57-.87-.87c-.16-.08-.38-.15-.82-.18C17.64 6 17.06 6 16.2 6z" clipRule="evenodd" />
    </IconBase>
  ))
);

MacWindowBold.displayName = 'MacWindowBold';

// Triple export pattern
export { MacWindowBold, MacWindowBold as MacWindowBoldIcon, MacWindowBold as SiMacWindowBold };
export default MacWindowBold;
export type { MacWindowBoldProps };
