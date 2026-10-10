import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WifiSlashBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const WifiSlashBoldDuotone = memo(
  forwardRef<SVGSVGElement, WifiSlashBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 14.25q.47 0 .91.08l2.16 2.15-1.81 1.87c-.7.7-1.83.7-2.51 0l-2.02-2.07c-.29-.3-.27-.75.03-.96.91-.67 2.03-1.07 3.24-1.07M10.48 11.9c-1.25.24-2.4.79-3.37 1.56-.36.28-.86.27-1.15-.03l-.66-.68c-.3-.3-.28-.76 0-1q1.41-1.21 3.17-1.87zM12 9.25c2.55 0 4.88.94 6.7 2.5.28.24.3.7 0 1l-.66.68c-.3.3-.79.31-1.15.03-1.03-.82-2.27-1.39-3.62-1.6l-2.53-2.53q.63-.08 1.26-.08M6.57 7.98q-1.6.77-2.93 1.93c-.33.3-.82.28-1.12-.01l-.66-.7c-.29-.29-.28-.74 0-1Q3.19 7 4.74 6.14zM12 4.25c3.89 0 7.43 1.49 10.13 3.95.3.26.3.71.01 1l-.66.7c-.3.3-.79.3-1.12.01C18.1 7.94 15.19 6.75 12 6.75q-1.76 0-3.38.46L6.65 5.24q2.52-.97 5.35-.99" opacity={0.4} />
        <path d="M3.3 3.3c.38-.4 1.02-.4 1.4 0l14 14c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0l-14-14c-.4-.38-.4-1.02 0-1.4" />
    </IconBase>
  ))
);

WifiSlashBoldDuotone.displayName = 'WifiSlashBoldDuotone';

// Triple export pattern
export { WifiSlashBoldDuotone, WifiSlashBoldDuotone as WifiSlashBoldDuotoneIcon, WifiSlashBoldDuotone as SiWifiSlashBoldDuotone };
export default WifiSlashBoldDuotone;
export type { WifiSlashBoldDuotoneProps };
