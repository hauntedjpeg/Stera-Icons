import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MacWindowCursorFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MacWindowCursorFillDuotone = memo(
  forwardRef<SVGSVGElement, MacWindowCursorFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.2 4.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05V11c0 .48-.4.88-.88.88s-.87-.4-.87-.88V9.8c0-.85 0-1.44-.04-1.9s-.1-.69-.2-.86q-.32-.62-.93-.93c-.17-.1-.41-.16-.86-.2-.46-.03-1.05-.04-1.9-.04H7.8c-.85 0-1.44 0-1.9.04s-.69.1-.86.2q-.62.32-.93.93c-.1.17-.16.41-.2.86-.03.46-.04 1.05-.04 1.9v4.4c0 .85 0 1.44.04 1.9s.1.69.2.86q.32.61.93.93c.17.1.41.16.86.2.46.03 1.05.04 1.9.04H13c.48 0 .88.39.88.87s-.4.88-.88.88H7.8q-1.24.01-2.04-.05-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.68-.37-1.5-.06-.82-.04-2.05V9.8q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04z" opacity={0.4} />
        <path d="M6.75 7.5C7.44 7.5 8 8.06 8 8.75S7.44 10 6.75 10 5.5 9.44 5.5 8.75 6.06 7.5 6.75 7.5M10.25 7.5c.69 0 1.25.56 1.25 1.25S10.94 10 10.25 10 9 9.44 9 8.75s.56-1.25 1.25-1.25M13.75 7.5c.69 0 1.25.56 1.25 1.25S14.44 10 13.75 10s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25" opacity={0.4} />
        <path d="m14.97 11.4.2.05 6.77 2.25c1.27.42 1.24 2.23-.05 2.61l-2.77.81-.81 2.77c-.38 1.29-2.19 1.32-2.61.05l-2.25-6.76c-.34-1 .53-1.96 1.52-1.79" />
    </IconBase>
  ))
);

MacWindowCursorFillDuotone.displayName = 'MacWindowCursorFillDuotone';

// Triple export pattern
export { MacWindowCursorFillDuotone, MacWindowCursorFillDuotone as MacWindowCursorFillDuotoneIcon, MacWindowCursorFillDuotone as SiMacWindowCursorFillDuotone };
export default MacWindowCursorFillDuotone;
export type { MacWindowCursorFillDuotoneProps };
