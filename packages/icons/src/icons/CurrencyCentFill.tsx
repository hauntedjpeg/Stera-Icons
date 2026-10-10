import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyCentFillProps = Omit<IconBaseProps, 'children'>;

const CurrencyCentFill = memo(
  forwardRef<SVGSVGElement, CurrencyCentFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 .75c.69 0 1.25.56 1.25 1.25v2.29l.52.06c1.53.26 2.95.97 4.07 2.04.5.47.52 1.27.05 1.77s-1.27.51-1.77.04c-.76-.73-1.72-1.2-2.76-1.38l-.11-.01v10.38q.35-.04.68-.14c1.01-.28 1.92-.87 2.6-1.68.43-.52 1.22-.6 1.75-.15s.6 1.23.16 1.76c-1 1.2-2.34 2.05-3.83 2.48q-.67.18-1.36.25V22c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25v-2.45q-.35-.09-.7-.2c-1.47-.49-2.76-1.4-3.7-2.64s-1.5-2.73-1.59-4.28.3-3.09 1.1-4.42 1.98-2.4 3.39-3.05q.73-.33 1.5-.5V2c0-.69.56-1.25 1.25-1.25m-1.25 6.3-.45.18C9.34 7.68 8.54 8.4 8 9.3s-.8 1.94-.74 3c.06 1.04.43 2.05 1.07 2.89.62.8 1.46 1.42 2.42 1.76z" clipRule="evenodd" />
    </IconBase>
  ))
);

CurrencyCentFill.displayName = 'CurrencyCentFill';

// Triple export pattern
export { CurrencyCentFill, CurrencyCentFill as CurrencyCentFillIcon, CurrencyCentFill as SiCurrencyCentFill };
export default CurrencyCentFill;
export type { CurrencyCentFillProps };
