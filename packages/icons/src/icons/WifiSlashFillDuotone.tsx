import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type WifiSlashFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const WifiSlashFillDuotone = memo(
  forwardRef<SVGSVGElement, WifiSlashFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 14q.32 0 .62.03l2.63 2.63-1.82 1.87c-.78.8-2.08.8-2.86 0l-2.02-2.08c-.37-.38-.38-1.01.06-1.33.95-.7 2.12-1.12 3.39-1.12M10.7 12.11c-1.28.22-2.45.77-3.44 1.54-.44.35-1.08.36-1.48-.04l-.66-.7c-.38-.38-.38-1 .03-1.35q1.39-1.2 3.12-1.87zM12 9c2.6 0 5 .96 6.85 2.56.41.35.41.97.03 1.36l-.66.69c-.4.4-1.04.4-1.48.04-.92-.72-2-1.24-3.16-1.49l-3.06-3.05Q11.25 9 12 9M12 4c3.95 0 7.56 1.52 10.3 4.01.4.37.4.99.02 1.37l-.67.69c-.39.4-1.03.4-1.46.03C18 8.17 15.13 7 12 7q-1.65 0-3.17.42L6.46 5.04Q9.06 4.02 12 4M6.76 8.17q-1.62.75-2.95 1.93c-.43.37-1.07.37-1.46-.03l-.67-.69c-.38-.38-.38-1 .02-1.37Q3 6.82 4.54 5.96z" opacity={0.4} />
        <path d="M3.3 3.3c.38-.4 1.02-.4 1.4 0l14 14c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0l-14-14c-.4-.38-.4-1.02 0-1.4" />
    </IconBase>
  ))
);

WifiSlashFillDuotone.displayName = 'WifiSlashFillDuotone';

// Triple export pattern
export { WifiSlashFillDuotone, WifiSlashFillDuotone as WifiSlashFillDuotoneIcon, WifiSlashFillDuotone as SiWifiSlashFillDuotone };
export default WifiSlashFillDuotone;
export type { WifiSlashFillDuotoneProps };
