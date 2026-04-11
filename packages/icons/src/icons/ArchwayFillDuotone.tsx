import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArchwayFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArchwayFillDuotone = memo(
  forwardRef<SVGSVGElement, ArchwayFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 3.88A6.13 6.13 0 0 1 18.13 10v6.2c0 .85 0 1.44-.04 1.9s-.1.69-.2.86q-.32.61-.93.93c-.17.1-.41.16-.86.2-.46.03-1.05.04-1.9.04H9.8c-.85 0-1.44 0-1.9-.04s-.69-.1-.86-.2q-.62-.32-.93-.93a2 2 0 0 1-.2-.86c-.03-.46-.04-1.05-.04-1.9V10A6.13 6.13 0 0 1 12 3.88" opacity={.4} />
        <path fillRule="evenodd" d="M12 2.13A7.9 7.9 0 0 1 19.88 10v6.2q.01 1.24-.05 2.04a4 4 0 0 1-.38 1.52 4 4 0 0 1-1.7 1.7q-.68.33-1.5.37-.82.06-2.05.05H9.8q-1.24.01-2.04-.05a4 4 0 0 1-1.52-.38 4 4 0 0 1-1.7-1.7 4 4 0 0 1-.37-1.5q-.06-.81-.04-2.05V10A7.9 7.9 0 0 1 12 2.13m0 1.75A6.13 6.13 0 0 0 5.88 10v6.2c0 .85 0 1.44.03 1.9.04.45.1.69.2.86q.32.61.93.93c.17.1.41.16.86.2.46.03 1.05.04 1.9.04h4.4c.85 0 1.44 0 1.9-.04s.69-.1.86-.2q.61-.32.93-.93c.1-.17.16-.41.2-.86.03-.46.04-1.05.04-1.9V10A6.13 6.13 0 0 0 12 3.88" clipRule="evenodd" />
    </IconBase>
  ))
);

ArchwayFillDuotone.displayName = 'ArchwayFillDuotone';

// Triple export pattern (lucide-react style)
export { ArchwayFillDuotone, ArchwayFillDuotone as ArchwayFillDuotoneIcon, ArchwayFillDuotone as SiArchwayFillDuotone };
export default ArchwayFillDuotone;
export type { ArchwayFillDuotoneProps };
