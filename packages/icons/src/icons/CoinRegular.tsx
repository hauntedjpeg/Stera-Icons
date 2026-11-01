import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CoinRegularProps = Omit<IconBaseProps, 'children'>;

const CoinRegular = memo(
  forwardRef<SVGSVGElement, CoinRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 4.25c2.85 0 5.47.58 7.4 1.54 1.9.95 3.35 2.4 3.35 4.21v5c0 1.82-1.45 3.26-3.34 4.2-1.94.97-4.56 1.55-7.41 1.55s-5.47-.58-7.4-1.54c-1.9-.95-3.35-2.4-3.35-4.21v-5c0-1.82 1.45-3.26 3.34-4.2C6.53 4.82 9.15 4.24 12 4.24M7.25 18.62q1.79.52 4 .61v-3.5q-2.15-.08-4-.56zm9.5-3.45q-1.85.48-4 .56v3.5q2.21-.09 4-.61zm-14-.17c0 .94.78 2 2.51 2.86l.49.23V14.7q-.61-.23-1.16-.5-1.05-.52-1.84-1.23zm18.5-2.02q-.8.7-1.84 1.23-.55.27-1.16.5v3.38l.49-.23c1.73-.86 2.51-1.92 2.51-2.86zM12 5.75c-2.67 0-5.05.54-6.74 1.39C3.53 8 2.75 9.06 2.75 10s.78 2 2.51 2.86c1.69.85 4.07 1.39 6.74 1.39s5.05-.54 6.74-1.39c1.73-.86 2.51-1.92 2.51-2.86s-.78-2-2.51-2.86c-1.69-.85-4.07-1.39-6.74-1.39" clipRule="evenodd" />
    </IconBase>
  ))
);

CoinRegular.displayName = 'CoinRegular';

// Triple export pattern
export { CoinRegular, CoinRegular as CoinRegularIcon, CoinRegular as SiCoinRegular };
export default CoinRegular;
export type { CoinRegularProps };
