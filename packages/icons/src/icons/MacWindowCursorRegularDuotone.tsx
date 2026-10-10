import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MacWindowCursorRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MacWindowCursorRegularDuotone = memo(
  forwardRef<SVGSVGElement, MacWindowCursorRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.2 4.25q1.24-.01 2.03.04c.55.05 1.03.14 1.47.37.7.36 1.28.93 1.64 1.64.23.44.32.92.37 1.47q.05.8.04 2.03V11c0 .41-.34.75-.75.75s-.75-.34-.75-.75V9.8c0-.85 0-1.45-.04-1.9-.04-.46-.1-.72-.2-.92q-.34-.65-.99-.98c-.2-.1-.46-.17-.91-.21-.46-.04-1.06-.04-1.91-.04H7.8c-.85 0-1.45 0-1.9.04-.46.04-.72.1-.92.2q-.65.35-.98.99c-.1.2-.17.46-.21.91-.04.46-.04 1.06-.04 1.91v4.4c0 .85 0 1.45.04 1.9.04.46.1.72.2.92q.35.65.99.98c.2.1.46.17.91.21.46.04 1.06.04 1.91.04H13c.41 0 .75.34.75.75s-.34.75-.75.75H7.8q-1.24.01-2.03-.04c-.55-.05-1.03-.14-1.47-.37-.7-.36-1.28-.93-1.64-1.64-.23-.44-.32-.92-.37-1.47q-.05-.8-.04-2.03V9.8q-.01-1.24.04-2.03c.05-.55.14-1.03.37-1.47.36-.7.93-1.28 1.64-1.64.44-.23.92-.32 1.47-.37q.8-.05 2.03-.04z" opacity={0.4} />
        <path d="M6.75 7.5C7.44 7.5 8 8.06 8 8.75S7.44 10 6.75 10 5.5 9.44 5.5 8.75 6.06 7.5 6.75 7.5M10.25 7.5c.69 0 1.25.56 1.25 1.25S10.94 10 10.25 10 9 9.44 9 8.75s.56-1.25 1.25-1.25M13.75 7.5c.69 0 1.25.56 1.25 1.25S14.44 10 13.75 10s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25" opacity={0.4} />
        <path fillRule="evenodd" d="m14.95 11.52.19.04 6.76 2.26c1.15.38 1.12 2.03-.04 2.37l-2.84.83-.83 2.84c-.34 1.17-1.99 1.2-2.37.04l-2.26-6.76c-.3-.91.5-1.78 1.4-1.62m2.03 7.13.72-2.44.03-.1q.14-.31.48-.41l2.44-.72-5.5-1.83z" clipRule="evenodd" />
    </IconBase>
  ))
);

MacWindowCursorRegularDuotone.displayName = 'MacWindowCursorRegularDuotone';

// Triple export pattern
export { MacWindowCursorRegularDuotone, MacWindowCursorRegularDuotone as MacWindowCursorRegularDuotoneIcon, MacWindowCursorRegularDuotone as SiMacWindowCursorRegularDuotone };
export default MacWindowCursorRegularDuotone;
export type { MacWindowCursorRegularDuotoneProps };
