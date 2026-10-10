import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArchwayFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArchwayFillDuotone = memo(
  forwardRef<SVGSVGElement, ArchwayFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 3.88c3.38 0 6.13 2.74 6.13 6.12v6.2c0 .85 0 1.44-.04 1.9s-.1.69-.2.86q-.32.61-.93.93c-.17.1-.41.16-.86.2-.46.03-1.05.04-1.9.04H9.8c-.85 0-1.44 0-1.9-.04s-.69-.1-.86-.2q-.62-.32-.93-.93c-.1-.17-.16-.41-.2-.86-.03-.46-.04-1.05-.04-1.9V10c0-3.38 2.75-6.12 6.13-6.12" opacity={.4} />
        <path fillRule="evenodd" d="M12 2.13c4.35 0 7.88 3.52 7.88 7.87v6.2q.01 1.24-.05 2.04-.04.83-.38 1.52-.57 1.11-1.7 1.7-.68.33-1.5.37-.82.06-2.05.05H9.8q-1.24.01-2.04-.05-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.68-.37-1.5-.06-.81-.04-2.05V10c0-4.35 3.52-7.87 7.87-7.87m0 1.75c-3.38 0-6.12 2.74-6.12 6.12v6.2c0 .85 0 1.44.03 1.9.04.45.1.69.2.86q.32.61.93.93c.17.1.41.16.86.2.46.03 1.05.04 1.9.04h4.4c.85 0 1.44 0 1.9-.04s.69-.1.86-.2q.61-.32.93-.93c.1-.17.16-.41.2-.86.03-.46.04-1.05.04-1.9V10c0-3.38-2.75-6.12-6.13-6.12" clipRule="evenodd" />
    </IconBase>
  ))
);

ArchwayFillDuotone.displayName = 'ArchwayFillDuotone';

// Triple export pattern
export { ArchwayFillDuotone, ArchwayFillDuotone as ArchwayFillDuotoneIcon, ArchwayFillDuotone as SiArchwayFillDuotone };
export default ArchwayFillDuotone;
export type { ArchwayFillDuotoneProps };
