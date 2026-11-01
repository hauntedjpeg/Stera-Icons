import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CoinRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CoinRegularDuotone = memo(
  forwardRef<SVGSVGElement, CoinRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M1.25 10c0 1.15.59 2.16 1.5 2.98V15c0 .94.78 2 2.51 2.86l.49.23V14.7q.7.26 1.5.46v3.45q1.79.52 4 .61v-3.5l.75.02q.38 0 .75-.02v3.5q2.21-.09 4-.61v-3.45q.8-.2 1.5-.46v3.38l.49-.23c1.73-.86 2.51-1.92 2.51-2.86v-2.02c.91-.82 1.5-1.83 1.5-2.98v5c0 1.82-1.45 3.26-3.34 4.2-1.94.97-4.56 1.55-7.41 1.55s-5.47-.58-7.4-1.54c-1.9-.95-3.35-2.4-3.35-4.21z" opacity={.4} />
        <path fillRule="evenodd" d="M12 4.25c2.85 0 5.47.58 7.4 1.54 1.9.95 3.35 2.4 3.35 4.21 0 1.82-1.45 3.26-3.34 4.2-1.94.97-4.56 1.55-7.41 1.55s-5.47-.58-7.4-1.54c-1.9-.95-3.35-2.4-3.35-4.21 0-1.82 1.45-3.26 3.34-4.2C6.53 4.82 9.15 4.24 12 4.24m0 1.5c-2.67 0-5.05.54-6.74 1.39C3.53 8 2.75 9.06 2.75 10s.78 2 2.51 2.86c1.69.85 4.07 1.39 6.74 1.39s5.05-.54 6.74-1.39c1.73-.86 2.51-1.92 2.51-2.86s-.78-2-2.51-2.86c-1.69-.85-4.07-1.39-6.74-1.39" clipRule="evenodd" />
    </IconBase>
  ))
);

CoinRegularDuotone.displayName = 'CoinRegularDuotone';

// Triple export pattern
export { CoinRegularDuotone, CoinRegularDuotone as CoinRegularDuotoneIcon, CoinRegularDuotone as SiCoinRegularDuotone };
export default CoinRegularDuotone;
export type { CoinRegularDuotoneProps };
