import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CoinBoldProps = Omit<IconBaseProps, 'children'>;

const CoinBold = memo(
  forwardRef<SVGSVGElement, CoinBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 4c2.88 0 5.54.58 7.52 1.57C21.43 6.53 23 8.04 23 10v5c0 1.96-1.57 3.47-3.48 4.43C17.54 20.42 14.88 21 12 21s-5.54-.58-7.52-1.57C2.57 18.47 1 16.96 1 15v-5c0-1.96 1.57-3.47 3.48-4.43C6.46 4.58 9.12 4 12 4M7.5 18.43q1.59.44 3.5.54v-3q-1.86-.08-3.5-.48zm9-2.94q-1.64.4-3.5.48v3q1.91-.1 3.5-.54zM3 15c0 .8.67 1.79 2.38 2.64l.12.06v-2.82q-.54-.21-1.02-.45-.8-.4-1.48-.92zm18-1.5q-.68.53-1.48.93-.48.23-1.02.45v2.82l.12-.06C20.32 16.8 21 15.8 21 15zM12 6c-2.64 0-4.98.54-6.62 1.36C3.68 8.2 3 9.2 3 10s.67 1.79 2.38 2.64C7.02 13.46 9.36 14 12 14s4.98-.54 6.62-1.36C20.32 11.8 21 10.8 21 10s-.67-1.79-2.38-2.64C16.98 6.54 14.64 6 12 6" clipRule="evenodd" />
    </IconBase>
  ))
);

CoinBold.displayName = 'CoinBold';

// Triple export pattern
export { CoinBold, CoinBold as CoinBoldIcon, CoinBold as SiCoinBold };
export default CoinBold;
export type { CoinBoldProps };
