import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CoinFillProps = Omit<IconBaseProps, 'children'>;

const CoinFill = memo(
  forwardRef<SVGSVGElement, CoinFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="coin-fill" {...props}>
      <path fillRule="evenodd" d="M12 6.13c2.82 0 5.41.34 7.32.91.95.29 1.79.64 2.4 1.08.6.42 1.16 1.04 1.16 1.88v4c0 .84-.57 1.46-1.16 1.88a8 8 0 0 1-2.34 1.06V17h-.2c-1.9.55-4.43.88-7.18.88s-5.28-.33-7.18-.88h-.2v-.06a8 8 0 0 1-2.34-1.06c-.6-.42-1.15-1.04-1.15-1.88v-4c0-.84.56-1.46 1.15-1.88.61-.44 1.45-.8 2.4-1.08 1.91-.57 4.5-.91 7.32-.91m-1.62 9.95a32 32 0 0 0 3.24 0v-2.24a34 34 0 0 1-3.24 0zm7.24-2.7q-1.05.2-2.25.32v2.24q1.23-.13 2.26-.35zm-11.24 2.2q1.02.22 2.25.36V13.7q-1.2-.13-2.26-.33zM2.88 14v.03l.05.08q.07.13.36.34.45.33 1.34.65v-2.16a10 10 0 0 1-1.75-.7zm18.25-1.76q-.77.4-1.75.7v2.16q.87-.31 1.33-.65.29-.2.36-.34l.05-.08v-1.79" clipRule="evenodd" />
    </IconBase>
  ))
);

CoinFill.displayName = 'CoinFill';

// Triple export pattern (lucide-react style)
export { CoinFill, CoinFill as CoinFillIcon, CoinFill as SiCoinFill };
export default CoinFill;
export type { CoinFillProps };
