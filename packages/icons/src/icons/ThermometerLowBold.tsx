import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ThermometerLowBoldProps = Omit<IconBaseProps, 'children'>;

const ThermometerLowBold = memo(
  forwardRef<SVGSVGElement, ThermometerLowBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 10.5c.55 0 1 .45 1 1v1.11c0 .64.43 1.18.92 1.59.66.54 1.08 1.37 1.08 2.3 0 1.66-1.34 3-3 3s-3-1.34-3-3c0-.93.42-1.76 1.08-2.3.5-.41.92-.95.92-1.59V11.5c0-.55.45-1 1-1" />
        <path fillRule="evenodd" d="M12 1.5c2.2 0 4 1.8 4 4v6.51l.06.07c1.2 1.1 1.94 2.67 1.94 4.42 0 3.31-2.69 6-6 6s-6-2.69-6-6c0-1.75.75-3.32 1.94-4.42q.05-.04.05-.07L8 12V5.5c0-2.2 1.8-4 4-4m0 2c-1.1 0-2 .9-2 2V12c0 .64-.31 1.19-.7 1.55-.8.74-1.3 1.79-1.3 2.95 0 2.2 1.8 4 4 4s4-1.8 4-4c0-1.16-.5-2.21-1.3-2.95-.39-.36-.7-.9-.7-1.55V5.5c0-1.1-.9-2-2-2" clipRule="evenodd" />
    </IconBase>
  ))
);

ThermometerLowBold.displayName = 'ThermometerLowBold';

// Triple export pattern
export { ThermometerLowBold, ThermometerLowBold as ThermometerLowBoldIcon, ThermometerLowBold as SiThermometerLowBold };
export default ThermometerLowBold;
export type { ThermometerLowBoldProps };
