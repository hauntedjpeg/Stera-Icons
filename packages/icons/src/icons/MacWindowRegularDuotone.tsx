import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MacWindowRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MacWindowRegularDuotone = memo(
  forwardRef<SVGSVGElement, MacWindowRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.2 4.25q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v4.4q.01 1.24-.04 2.03c-.05.55-.14 1.03-.37 1.47-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H7.8q-1.24.01-2.03-.04c-.55-.05-1.03-.14-1.47-.37-.7-.36-1.28-.93-1.64-1.64-.23-.44-.32-.92-.37-1.47q-.05-.8-.04-2.03V9.8q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04zm-8.4 1.5c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2q-.65.35-.98.99c-.1.2-.17.46-.21.91-.04.46-.04 1.06-.04 1.91v4.4c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h8.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91V9.8c0-.85 0-1.45-.04-1.9-.04-.46-.1-.72-.2-.92q-.34-.65-.99-.98c-.2-.1-.46-.17-.91-.21-.46-.04-1.06-.04-1.91-.04z" clipRule="evenodd" opacity={.4} />
        <path d="M8 8.75C8 9.44 7.44 10 6.75 10S5.5 9.44 5.5 8.75 6.06 7.5 6.75 7.5 8 8.06 8 8.75M11.5 8.75c0 .69-.56 1.25-1.25 1.25S9 9.44 9 8.75s.56-1.25 1.25-1.25 1.25.56 1.25 1.25M15 8.75c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25S15 8.06 15 8.75" />
    </IconBase>
  ))
);

MacWindowRegularDuotone.displayName = 'MacWindowRegularDuotone';

// Triple export pattern
export { MacWindowRegularDuotone, MacWindowRegularDuotone as MacWindowRegularDuotoneIcon, MacWindowRegularDuotone as SiMacWindowRegularDuotone };
export default MacWindowRegularDuotone;
export type { MacWindowRegularDuotoneProps };
