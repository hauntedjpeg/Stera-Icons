import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyCentFillProps = Omit<IconBaseProps, 'children'>;

const CurrencyCentFill = memo(
  forwardRef<SVGSVGElement, CurrencyCentFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 .75c.69 0 1.25.56 1.25 1.25v2.29a7.8 7.8 0 0 1 4.6 2.1 1.25 1.25 0 0 1-1.73 1.8 5.3 5.3 0 0 0-2.76-1.37l-.11-.01v10.38a5.3 5.3 0 0 0 3.27-1.82 1.25 1.25 0 0 1 1.92 1.61 7.8 7.8 0 0 1-5.19 2.73V22a1.25 1.25 0 1 1-2.5 0v-2.45a7.8 7.8 0 0 1-4.4-2.84 7.75 7.75 0 0 1 4.4-12.26V2c0-.69.56-1.25 1.25-1.25m-1.25 6.3A5.3 5.3 0 0 0 8 9.3a5.25 5.25 0 0 0 2.75 7.65z" clipRule="evenodd" />
    </IconBase>
  ))
);

CurrencyCentFill.displayName = 'CurrencyCentFill';

// Triple export pattern (lucide-react style)
export { CurrencyCentFill, CurrencyCentFill as CurrencyCentFillIcon, CurrencyCentFill as SiCurrencyCentFill };
export default CurrencyCentFill;
export type { CurrencyCentFillProps };
