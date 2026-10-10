import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RectangleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const RectangleBoldDuotone = memo(
  forwardRef<SVGSVGElement, RectangleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4 14.7c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h8.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18q.57-.3.87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V12h2v2.7q.01 1.23-.04 2.05c-.05.56-.15 1.08-.4 1.57-.38.75-1 1.36-1.74 1.74-.49.25-1 .35-1.57.4q-.82.05-2.05.04H7.8q-1.23.01-2.05-.04c-.56-.05-1.08-.15-1.57-.4-.75-.38-1.36-1-1.74-1.74-.25-.49-.35-1-.4-1.57Q2 15.93 2 14.7V12h2z" opacity={.4} />
        <path d="M16.2 3.5q1.23-.01 2.05.04c.56.05 1.08.15 1.57.4.75.38 1.36 1 1.74 1.74.25.49.35 1 .4 1.57q.05.82.04 2.05V12h-2V9.3c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82q-.3-.57-.87-.87c-.16-.08-.38-.15-.82-.18-.45-.04-1.03-.04-1.89-.04H7.8c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18q-.57.3-.87.87c-.08.16-.15.38-.18.82C4 7.86 4 8.44 4 9.3V12H2V9.3q-.01-1.23.04-2.05c.05-.56.15-1.08.4-1.57.38-.75 1-1.36 1.74-1.74.49-.25 1-.35 1.57-.4q.82-.05 2.05-.04z" />
    </IconBase>
  ))
);

RectangleBoldDuotone.displayName = 'RectangleBoldDuotone';

// Triple export pattern
export { RectangleBoldDuotone, RectangleBoldDuotone as RectangleBoldDuotoneIcon, RectangleBoldDuotone as SiRectangleBoldDuotone };
export default RectangleBoldDuotone;
export type { RectangleBoldDuotoneProps };
