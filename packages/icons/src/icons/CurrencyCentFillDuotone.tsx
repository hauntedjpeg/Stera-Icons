import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CurrencyCentFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CurrencyCentFillDuotone = memo(
  forwardRef<SVGSVGElement, CurrencyCentFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.75 19.55q1.24.28 2.5.16V22c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25zM10.75 7.05q1.22-.43 2.5-.24v10.38c-.8.12-1.63.05-2.4-.2l-.1-.04zM12 .75c.69 0 1.25.56 1.25 1.25v2.29q-1.26-.12-2.5.16V2c0-.69.56-1.25 1.25-1.25" opacity={0.4} />
        <path d="M9.25 4.97c1.4-.66 2.98-.87 4.52-.62 1.53.26 2.95.97 4.07 2.04.5.47.52 1.27.05 1.77s-1.27.51-1.77.04c-.76-.73-1.72-1.2-2.76-1.38s-2.1-.03-3.06.41C9.34 7.68 8.54 8.4 8 9.3s-.8 1.94-.74 3c.06 1.04.43 2.05 1.07 2.89.64.83 1.51 1.46 2.51 1.8 1 .32 2.08.35 3.09.06s1.92-.87 2.6-1.67c.44-.53 1.22-.6 1.75-.16s.6 1.23.16 1.76c-1 1.2-2.34 2.05-3.83 2.48-1.5.42-3.08.38-4.56-.1-1.47-.5-2.76-1.42-3.7-2.65-.95-1.24-1.5-2.73-1.59-4.28s.3-3.09 1.1-4.42 1.98-2.4 3.39-3.04" />
    </IconBase>
  ))
);

CurrencyCentFillDuotone.displayName = 'CurrencyCentFillDuotone';

// Triple export pattern
export { CurrencyCentFillDuotone, CurrencyCentFillDuotone as CurrencyCentFillDuotoneIcon, CurrencyCentFillDuotone as SiCurrencyCentFillDuotone };
export default CurrencyCentFillDuotone;
export type { CurrencyCentFillDuotoneProps };
