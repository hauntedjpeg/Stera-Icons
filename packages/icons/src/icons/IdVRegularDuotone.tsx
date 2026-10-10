import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type IdVRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const IdVRegularDuotone = memo(
  forwardRef<SVGSVGElement, IdVRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.2 2.25q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03v8.4q.01 1.24-.04 2.03c-.05.55-.14 1.03-.37 1.47-.36.7-.93 1.28-1.64 1.64-.44.23-.92.32-1.47.37q-.8.05-2.03.04H9.8q-1.24.01-2.03-.04c-.55-.05-1.03-.14-1.47-.37-.7-.36-1.28-.93-1.64-1.64-.23-.44-.32-.92-.37-1.47q-.05-.8-.04-2.03V7.8q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04zm-4.4 1.5c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2q-.65.35-.98.99c-.1.2-.17.46-.21.91-.04.46-.04 1.06-.04 1.91v8.4c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04h4.4c.85 0 1.45 0 1.9-.04.46-.04.72-.1.92-.2q.65-.34.98-.99c.1-.2.17-.46.21-.91.04-.46.04-1.06.04-1.91V7.8c0-.85 0-1.45-.04-1.9-.04-.46-.1-.72-.2-.92q-.34-.65-.99-.98c-.2-.1-.46-.17-.91-.21-.46-.04-1.06-.04-1.91-.04z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M12 10.25c1.93 0 3.5 1.57 3.5 3.5 0 .9-.34 1.72-.9 2.34 1.5.64 2.55 2.08 2.64 3.78q-.1.08-.22.13c-.2.1-.46.17-.91.21l-.45.03q.08-.05.09-.14c0-1.57-1.28-2.85-2.85-2.85h-1.8c-1.57 0-2.85 1.28-2.85 2.85q0 .1.09.14l-.45-.03c-.45-.04-.71-.1-.91-.2l-.22-.14c.08-1.7 1.15-3.14 2.64-3.78-.56-.62-.9-1.44-.9-2.34 0-1.93 1.57-3.5 3.5-3.5m0 1.5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2" clipRule="evenodd" />
        <path d="M14.5 5.75c.41 0 .75.34.75.75s-.34.75-.75.75h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

IdVRegularDuotone.displayName = 'IdVRegularDuotone';

// Triple export pattern
export { IdVRegularDuotone, IdVRegularDuotone as IdVRegularDuotoneIcon, IdVRegularDuotone as SiIdVRegularDuotone };
export default IdVRegularDuotone;
export type { IdVRegularDuotoneProps };
