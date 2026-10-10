import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ConsoleHandheldBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ConsoleHandheldBoldDuotone = memo(
  forwardRef<SVGSVGElement, ConsoleHandheldBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.8 4c-.86 0-1.44 0-1.89.04-.44.03-.66.1-.82.18q-.57.3-.87.87c-.08.16-.15.38-.18.82C6 6.36 6 6.94 6 7.8V11H4V7.8q-.01-1.23.04-2.05c.05-.56.15-1.08.4-1.57.38-.75 1-1.36 1.74-1.74.49-.25 1-.35 1.57-.4Q8.57 2 9.8 2h4.4q1.23-.01 2.05.04c.56.05 1.08.15 1.57.4.75.38 1.36 1 1.74 1.74.25.49.35 1 .4 1.57q.05.82.04 2.05V11h-2V7.8c0-.86 0-1.44-.04-1.89-.03-.44-.1-.66-.18-.82q-.3-.57-.87-.87c-.16-.08-.38-.15-.82-.18C15.64 4 15.06 4 14.2 4z" opacity={.4} />
        <path d="M9.25 14.25c.41 0 .75.33.75.75v.75h.75c.42 0 .75.34.75.76 0 .41-.34.75-.75.74H10V18c0 .41-.33.75-.74.75-.42 0-.75-.33-.76-.75v-.75h-.75c-.42 0-.75-.34-.75-.75 0-.42.34-.75.75-.75h.75V15c0-.41.33-.75.75-.75M13.04 16.8c.4-.4 1.03-.4 1.42 0 .4.39.4 1.02 0 1.41-.39.4-1.02.4-1.41 0-.4-.4-.4-1.03 0-1.42M15.04 14.8c.4-.4 1.03-.4 1.42 0 .4.39.4 1.02 0 1.41-.39.4-1.02.4-1.41 0-.4-.4-.4-1.03 0-1.42" />
        <path fillRule="evenodd" d="M20 16.2q.01 1.23-.04 2.05c-.05.56-.15 1.08-.4 1.57-.38.75-1 1.36-1.74 1.74-.49.25-1 .35-1.57.4q-.82.05-2.05.04H9.8q-1.23.01-2.05-.04c-.56-.05-1.08-.15-1.57-.4-.75-.38-1.36-1-1.74-1.74-.25-.49-.35-1-.4-1.57Q4 17.43 4 16.2V11h16zm-14 0c0 .86 0 1.44.04 1.89.03.44.1.66.18.82q.3.57.87.87c.16.08.38.15.82.18.45.04 1.03.04 1.89.04h4.4c.86 0 1.44 0 1.89-.04.44-.03.66-.1.82-.18q.57-.3.87-.87c.08-.16.15-.38.18-.82.04-.45.04-1.03.04-1.89V13H6z" clipRule="evenodd" />
    </IconBase>
  ))
);

ConsoleHandheldBoldDuotone.displayName = 'ConsoleHandheldBoldDuotone';

// Triple export pattern
export { ConsoleHandheldBoldDuotone, ConsoleHandheldBoldDuotone as ConsoleHandheldBoldDuotoneIcon, ConsoleHandheldBoldDuotone as SiConsoleHandheldBoldDuotone };
export default ConsoleHandheldBoldDuotone;
export type { ConsoleHandheldBoldDuotoneProps };
