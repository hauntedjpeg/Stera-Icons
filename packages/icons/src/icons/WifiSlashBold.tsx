import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WifiSlashBoldProps = Omit<IconBaseProps, 'children'>;

const WifiSlashBold = memo(
  forwardRef<SVGSVGElement, WifiSlashBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.3 3.3c.38-.4 1.02-.4 1.4 0l14 14c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0l-14-14c-.4-.38-.4-1.02 0-1.4M14.37 17.2l-1.11 1.15c-.7.7-1.83.7-2.51 0l-2.02-2.07c-.29-.3-.27-.75.03-.96.77-.57 1.7-.94 2.69-1.04zM9.37 12.2q-1.23.45-2.26 1.26c-.36.28-.86.27-1.15-.03l-.66-.69c-.3-.3-.28-.75 0-1q1-.85 2.18-1.43zM12.08 9.25c2.51.02 4.82.95 6.61 2.5.3.24.3.7.02 1l-.67.68c-.3.3-.79.31-1.15.03q-.72-.58-1.58-.98zM5.64 8.47q-1.06.63-2 1.44c-.33.3-.82.28-1.12-.01l-.66-.7c-.29-.29-.28-.74 0-1q.93-.86 1.98-1.53zM12 4.25c3.89 0 7.43 1.49 10.13 3.95.3.26.3.71.01 1l-.66.7c-.3.3-.79.3-1.12.01C18.1 7.94 15.19 6.75 12 6.75q-1.14 0-2.22.2L7.7 4.88q2.05-.62 4.3-.63" />
    </IconBase>
  ))
);

WifiSlashBold.displayName = 'WifiSlashBold';

// Triple export pattern
export { WifiSlashBold, WifiSlashBold as WifiSlashBoldIcon, WifiSlashBold as SiWifiSlashBold };
export default WifiSlashBold;
export type { WifiSlashBoldProps };
