import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ConsoleHandheldFillProps = Omit<IconBaseProps, 'children'>;

const ConsoleHandheldFill = memo(
  forwardRef<SVGSVGElement, ConsoleHandheldFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.2 2.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v8.4q.01 1.24-.05 2.04-.04.83-.38 1.52-.57 1.11-1.7 1.7-.68.33-1.5.37-.82.06-2.05.05H9.8q-1.24.01-2.04-.05-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.68-.37-1.5-.06-.81-.04-2.05V7.8q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04zM9 14.25c-.42 0-.75.34-.75.75v.75H7.5c-.41 0-.75.33-.75.75 0 .41.33.75.75.75h.75V18c0 .42.34.75.76.75.41 0 .75-.34.74-.75v-.75h.75c.41 0 .75-.33.75-.74 0-.42-.33-.75-.75-.76h-.75V15c0-.42-.34-.75-.75-.75m5.7 2.54c-.38-.39-1.02-.39-1.4 0-.4.4-.4 1.03 0 1.42.39.4 1.02.4 1.41 0 .4-.39.4-1.02 0-1.41m2-2c-.38-.39-1.02-.39-1.4 0-.4.4-.4 1.03 0 1.42.39.4 1.02.4 1.41 0 .4-.39.4-1.02 0-1.41M9.8 3.88c-.85 0-1.44 0-1.9.03-.45.04-.69.1-.86.2q-.62.32-.93.93c-.1.17-.16.41-.2.86-.03.46-.04 1.05-.04 1.9v3.33h12.26V7.8c0-.85 0-1.44-.04-1.9s-.1-.69-.2-.86q-.32-.62-.93-.93c-.17-.1-.41-.16-.86-.2-.46-.03-1.05-.04-1.9-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

ConsoleHandheldFill.displayName = 'ConsoleHandheldFill';

// Triple export pattern
export { ConsoleHandheldFill, ConsoleHandheldFill as ConsoleHandheldFillIcon, ConsoleHandheldFill as SiConsoleHandheldFill };
export default ConsoleHandheldFill;
export type { ConsoleHandheldFillProps };
