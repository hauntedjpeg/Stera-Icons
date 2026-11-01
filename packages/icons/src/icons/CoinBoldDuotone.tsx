import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CoinBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CoinBoldDuotone = memo(
  forwardRef<SVGSVGElement, CoinBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M1 10c0 1.42.82 2.6 2 3.5V15c0 .8.67 1.79 2.38 2.64l.12.06v-2.82q.94.36 2 .61v2.94q1.59.44 3.5.54v-3q.5.03 1 .03t1-.03v3q1.91-.1 3.5-.54V15.5q1.06-.24 2-.61v2.82l.12-.06C20.32 16.8 21 15.8 21 15v-1.5c1.18-.9 2-2.08 2-3.5v5c0 1.96-1.57 3.47-3.48 4.43C17.54 20.42 14.88 21 12 21s-5.54-.58-7.52-1.57C2.57 18.47 1 16.96 1 15z" opacity={.4} />
        <path fillRule="evenodd" d="M12 4c2.88 0 5.54.58 7.52 1.57C21.43 6.53 23 8.04 23 10s-1.57 3.47-3.48 4.43C17.54 15.42 14.88 16 12 16s-5.54-.58-7.52-1.57C2.57 13.47 1 11.96 1 10s1.57-3.47 3.48-4.43C6.46 4.58 9.12 4 12 4m0 2c-2.64 0-4.98.54-6.62 1.36C3.68 8.2 3 9.2 3 10s.67 1.79 2.38 2.64C7.02 13.46 9.36 14 12 14s4.98-.54 6.62-1.36C20.32 11.8 21 10.8 21 10s-.67-1.79-2.38-2.64C16.98 6.54 14.64 6 12 6" clipRule="evenodd" />
    </IconBase>
  ))
);

CoinBoldDuotone.displayName = 'CoinBoldDuotone';

// Triple export pattern
export { CoinBoldDuotone, CoinBoldDuotone as CoinBoldDuotoneIcon, CoinBoldDuotone as SiCoinBoldDuotone };
export default CoinBoldDuotone;
export type { CoinBoldDuotoneProps };
