import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BatteryLowBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const BatteryLowBoldDuotone = memo(
  forwardRef<SVGSVGElement, BatteryLowBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.5 5.5q1.37-.01 2.27.05.9.04 1.68.4c.92.44 1.66 1.18 2.1 2.1.22.45.32.93.38 1.45h.57c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5h-.57q-.07.78-.38 1.45c-.44.92-1.18 1.66-2.1 2.1q-.77.36-1.68.4-.9.06-2.27.05h-7q-1.37.01-2.27-.05-.9-.04-1.68-.4c-.92-.44-1.66-1.18-2.1-2.1q-.36-.77-.4-1.68Q.99 13.37 1 12q-.01-1.37.05-2.27.04-.9.4-1.68c.44-.92 1.18-1.66 2.1-2.1q.77-.36 1.68-.4.9-.06 2.27-.05zm-7 2c-.95 0-1.6 0-2.11.04s-.77.11-.97.2c-.51.25-.93.67-1.17 1.18-.1.2-.17.47-.21.97S3 11.05 3 12s0 1.6.04 2.11.11.77.2.98c.25.5.67.92 1.18 1.16.2.1.47.17.97.21s1.16.04 2.11.04h7c.95 0 1.6 0 2.11-.04s.77-.11.98-.2c.5-.25.92-.67 1.16-1.18.1-.2.17-.47.21-.97S19 12.95 19 12s0-1.6-.04-2.11-.11-.77-.2-.97c-.25-.51-.67-.93-1.18-1.17-.2-.1-.47-.17-.97-.21s-1.16-.04-2.11-.04z" clipRule="evenodd" opacity={.4} />
        <path d="M5.5 8.5c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5S4 14.83 4 14v-4c0-.83.67-1.5 1.5-1.5" />
    </IconBase>
  ))
);

BatteryLowBoldDuotone.displayName = 'BatteryLowBoldDuotone';

// Triple export pattern
export { BatteryLowBoldDuotone, BatteryLowBoldDuotone as BatteryLowBoldDuotoneIcon, BatteryLowBoldDuotone as SiBatteryLowBoldDuotone };
export default BatteryLowBoldDuotone;
export type { BatteryLowBoldDuotoneProps };
