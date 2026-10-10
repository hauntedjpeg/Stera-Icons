import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FlagBoldProps = Omit<IconBaseProps, 'children'>;

const FlagBold = memo(
  forwardRef<SVGSVGElement, FlagBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M5.8 2.04c1.69-.15 2.9-.06 3.9.19.99.24 1.7.63 2.33.96.62.33 1.2.62 2.03.81.84.2 2 .32 3.77.2 1.13-.06 2.17.82 2.17 2.02v7.92c0 1.02-.78 1.9-1.82 1.98-2.05.15-3.5.04-4.63-.23-1.14-.27-1.92-.7-2.59-1.05s-1.2-.64-2.02-.8c-.68-.14-1.6-.2-2.94-.09V21c0 .55-.45 1-1 1s-1-.45-1-1V4c0-1 .76-1.88 1.8-1.97m3.42 2.13C8.5 3.99 7.52 3.9 6 4.03v7.92c1.4-.11 2.46-.05 3.34.13 1.12.22 1.89.63 2.56 1 .67.35 1.25.66 2.12.87s2.09.32 3.98.17v-7.9l-.05-.02c-1.9.12-3.27 0-4.35-.25-1.1-.26-1.85-.65-2.5-.99s-1.16-.61-1.88-.8" clipRule="evenodd" />
    </IconBase>
  ))
);

FlagBold.displayName = 'FlagBold';

// Triple export pattern
export { FlagBold, FlagBold as FlagBoldIcon, FlagBold as SiFlagBold };
export default FlagBold;
export type { FlagBoldProps };
