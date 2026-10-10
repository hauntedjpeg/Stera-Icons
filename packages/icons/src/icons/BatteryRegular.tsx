import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BatteryRegularProps = Omit<IconBaseProps, 'children'>;

const BatteryRegular = memo(
  forwardRef<SVGSVGElement, BatteryRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.5 5.75q1.36-.01 2.25.05.89.04 1.6.37c.86.42 1.56 1.12 1.98 1.99q.33.7.37 1.59h.8c.69 0 1.25.56 1.25 1.25v2c0 .69-.56 1.25-1.25 1.25h-.8q-.04.89-.37 1.6c-.42.86-1.12 1.56-1.99 1.98q-.7.33-1.6.37-.87.06-2.24.05h-7q-1.37.01-2.25-.05-.89-.04-1.6-.37c-.86-.42-1.56-1.12-1.98-1.99q-.33-.7-.37-1.6-.06-.87-.05-2.24-.01-1.37.05-2.25.04-.89.37-1.6C2.1 7.3 2.8 6.6 3.66 6.18q.7-.33 1.6-.37.87-.06 2.24-.05zm-7 1.5c-.94 0-1.61 0-2.13.04s-.82.12-1.06.23c-.56.27-1.02.73-1.29 1.29-.11.24-.19.55-.23 1.06-.04.52-.04 1.19-.04 2.13s0 1.61.04 2.13.12.82.23 1.06c.27.56.73 1.02 1.29 1.29.24.11.55.19 1.06.23.52.04 1.19.04 2.13.04h7c.94 0 1.61 0 2.13-.04s.82-.12 1.06-.23c.56-.27 1.02-.73 1.29-1.29.11-.24.19-.55.23-1.06.04-.52.04-1.19.04-2.13s0-1.61-.04-2.13-.12-.82-.23-1.06c-.27-.56-.73-1.02-1.29-1.29-.24-.11-.55-.19-1.06-.23-.52-.04-1.19-.04-2.13-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

BatteryRegular.displayName = 'BatteryRegular';

// Triple export pattern
export { BatteryRegular, BatteryRegular as BatteryRegularIcon, BatteryRegular as SiBatteryRegular };
export default BatteryRegular;
export type { BatteryRegularProps };
