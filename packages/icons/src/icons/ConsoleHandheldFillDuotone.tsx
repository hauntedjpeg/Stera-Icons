import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ConsoleHandheldFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ConsoleHandheldFillDuotone = memo(
  forwardRef<SVGSVGElement, ConsoleHandheldFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M19.88 16.2q.01 1.24-.05 2.04-.04.83-.38 1.52-.57 1.11-1.7 1.7-.68.33-1.5.37-.82.06-2.05.05H9.8q-1.24.01-2.04-.05-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.68-.37-1.5-.06-.81-.04-2.05v-3.82h15.75zM9 14.25c-.42 0-.75.34-.75.75v.75H7.5c-.41 0-.75.33-.75.75 0 .41.33.75.75.75h.75V18c0 .42.34.75.76.75.41 0 .75-.34.74-.75v-.75h.75c.41 0 .75-.33.75-.74 0-.42-.33-.75-.75-.76h-.75V15c0-.42-.34-.75-.75-.75m5.7 2.54c-.38-.39-1.02-.39-1.4 0-.4.4-.4 1.03 0 1.42.39.4 1.02.4 1.41 0 .4-.39.4-1.02 0-1.41m2-2c-.38-.39-1.02-.39-1.4 0-.4.4-.4 1.03 0 1.42.39.4 1.02.4 1.41 0 .4-.39.4-1.02 0-1.41" clipRule="evenodd" opacity={.4} />
        <path d="M9 14.25c.41 0 .75.33.75.75v.75h.75c.42 0 .75.34.75.76 0 .41-.34.75-.75.74h-.75V18c0 .41-.33.75-.74.75-.42 0-.75-.33-.76-.75v-.75H7.5c-.42 0-.75-.34-.75-.75 0-.42.34-.75.75-.75h.75V15c0-.41.33-.75.75-.75M13.3 16.8c.38-.4 1.02-.4 1.4 0h.01c.4.39.4 1.02 0 1.41-.39.4-1.02.4-1.41 0-.4-.4-.4-1.03 0-1.42M15.3 14.8c.38-.4 1.02-.4 1.4 0h.01c.4.39.4 1.02 0 1.41-.39.4-1.02.4-1.41 0-.4-.4-.4-1.03 0-1.42M14.2 2.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v4.58H4.13V7.8q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04z" />
    </IconBase>
  ))
);

ConsoleHandheldFillDuotone.displayName = 'ConsoleHandheldFillDuotone';

// Triple export pattern
export { ConsoleHandheldFillDuotone, ConsoleHandheldFillDuotone as ConsoleHandheldFillDuotoneIcon, ConsoleHandheldFillDuotone as SiConsoleHandheldFillDuotone };
export default ConsoleHandheldFillDuotone;
export type { ConsoleHandheldFillDuotoneProps };
