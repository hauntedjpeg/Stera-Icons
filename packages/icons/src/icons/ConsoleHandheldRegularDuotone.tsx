import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ConsoleHandheldRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ConsoleHandheldRegularDuotone = memo(
  forwardRef<SVGSVGElement, ConsoleHandheldRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.8 3.75c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2q-.65.35-.98.99c-.1.2-.17.46-.21.91-.04.46-.04 1.06-.04 1.91v3.45h-1.5V7.8q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04h4.4q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v3.45h-1.5V7.8c0-.85 0-1.45-.04-1.9-.04-.46-.1-.72-.2-.92q-.34-.65-.99-.98c-.2-.1-.46-.17-.91-.21-.46-.04-1.06-.04-1.91-.04z" opacity={.4} />
        <path d="M9.25 14.25c.41 0 .75.33.75.75v.75h.75c.42 0 .75.34.75.76 0 .41-.34.75-.75.74H10V18c0 .41-.33.75-.74.75-.42 0-.75-.33-.76-.75v-.75h-.75c-.42 0-.75-.34-.75-.75 0-.42.34-.75.75-.75h.75V15c0-.41.33-.75.75-.75M13.04 16.8c.4-.4 1.03-.4 1.42 0 .4.39.4 1.02 0 1.41-.39.4-1.02.4-1.41 0-.4-.4-.4-1.03 0-1.42M15.04 14.8c.4-.4 1.03-.4 1.42 0 .4.39.4 1.02 0 1.41-.39.4-1.02.4-1.41 0-.4-.4-.4-1.03 0-1.42" />
        <path fillRule="evenodd" d="M19.75 16.2q.01 1.24-.04 2.03c-.05.55-.14 1.03-.37 1.47-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H9.8q-1.24.01-2.03-.04c-.55-.05-1.03-.14-1.47-.37-.7-.36-1.28-.93-1.64-1.64-.23-.44-.32-.92-.37-1.47q-.05-.8-.04-2.03v-4.95h15.5zm-14 0c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h4.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91v-3.45H5.75z" clipRule="evenodd" />
    </IconBase>
  ))
);

ConsoleHandheldRegularDuotone.displayName = 'ConsoleHandheldRegularDuotone';

// Triple export pattern
export { ConsoleHandheldRegularDuotone, ConsoleHandheldRegularDuotone as ConsoleHandheldRegularDuotoneIcon, ConsoleHandheldRegularDuotone as SiConsoleHandheldRegularDuotone };
export default ConsoleHandheldRegularDuotone;
export type { ConsoleHandheldRegularDuotoneProps };
