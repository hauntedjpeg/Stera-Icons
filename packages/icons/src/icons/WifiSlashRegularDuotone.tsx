import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WifiSlashRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const WifiSlashRegularDuotone = memo(
  forwardRef<SVGSVGElement, WifiSlashRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 14.5q.91 0 1.74.3l1.25 1.25q-.06.22-.24.4l-1.67 1.73c-.6.6-1.57.6-2.16 0l-1.67-1.73c-.4-.42-.32-.96.02-1.18q1.21-.75 2.73-.77M10.57 11.63c-1.35.24-2.58.81-3.62 1.63-.27.22-.62.19-.8 0l-.68-.69c-.2-.2-.17-.49 0-.64Q7 10.63 8.93 10zM12 9.5c2.48 0 4.76.91 6.53 2.43.17.15.2.44 0 .64l-.67.69c-.19.19-.54.22-.81 0-1.26-.99-2.8-1.62-4.47-1.74L10.65 9.6q.67-.09 1.35-.09M6.62 7.68q-1.72.8-3.14 2.04c-.24.22-.59.2-.78 0l-.66-.68c-.2-.2-.18-.5 0-.66q1.4-1.28 3.1-2.18zM12 4.5c3.82 0 7.3 1.46 9.96 3.88.18.16.2.45 0 .66l-.66.68c-.2.2-.54.22-.78 0-2.3-2-5.27-3.22-8.52-3.22q-2.02 0-3.85.6L6.6 5.52Q9.12 4.51 12 4.5" opacity={0.4} />
        <path d="M3.47 3.47c.3-.3.77-.3 1.06 0l14 14c.3.3.3.77 0 1.06s-.77.3-1.06 0l-14-14c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

WifiSlashRegularDuotone.displayName = 'WifiSlashRegularDuotone';

// Triple export pattern
export { WifiSlashRegularDuotone, WifiSlashRegularDuotone as WifiSlashRegularDuotoneIcon, WifiSlashRegularDuotone as SiWifiSlashRegularDuotone };
export default WifiSlashRegularDuotone;
export type { WifiSlashRegularDuotoneProps };
