import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CoinFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CoinFillDuotone = memo(
  forwardRef<SVGSVGElement, CoinFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="coin-fill-duotone" {...props}>
      <path d="M1.13 10c0 .84.56 1.46 1.15 1.88q.27.2.6.36v1.79l.05.08q.07.13.36.34.45.33 1.34.65v-2.16l.05.02q.78.23 1.7.41v2.22q1.02.21 2.25.35V13.7q.84.08 1.74.14v2.24a32 32 0 0 0 3.26 0v-2.24q.9-.05 1.74-.14v2.24q1.23-.13 2.26-.35v-2.22q.9-.18 1.7-.41l.05-.02v2.16q.87-.31 1.33-.65.29-.2.36-.34l.05-.08v-1.79q.33-.17.6-.36c.6-.42 1.16-1.04 1.16-1.88v4c0 .84-.57 1.46-1.16 1.88a8 8 0 0 1-2.34 1.06V17h-.2c-1.9.55-4.43.88-7.18.88s-5.28-.33-7.18-.88h-.2v-.06a8 8 0 0 1-2.34-1.06c-.6-.42-1.15-1.04-1.15-1.88z" opacity={.4} />
        <path d="M12 6.13c2.82 0 5.41.34 7.32.91.95.29 1.79.64 2.4 1.08.6.42 1.16 1.04 1.16 1.88s-.57 1.46-1.16 1.88c-.61.44-1.45.8-2.4 1.08-1.91.57-4.5.91-7.32.91s-5.41-.34-7.32-.91a8 8 0 0 1-2.4-1.08c-.6-.42-1.15-1.04-1.15-1.88s.56-1.46 1.15-1.88c.61-.44 1.45-.8 2.4-1.08 1.91-.57 4.5-.91 7.32-.91" />
    </IconBase>
  ))
);

CoinFillDuotone.displayName = 'CoinFillDuotone';

// Triple export pattern (lucide-react style)
export { CoinFillDuotone, CoinFillDuotone as CoinFillDuotoneIcon, CoinFillDuotone as SiCoinFillDuotone };
export default CoinFillDuotone;
export type { CoinFillDuotoneProps };
