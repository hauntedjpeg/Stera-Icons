import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanCubeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanCubeFillDuotone = memo(
  forwardRef<SVGSVGElement, ScanCubeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.5 15.13c.48 0 .88.39.88.87v2c0 .9.72 1.63 1.62 1.63h2a.88.88 0 0 1 0 1.75H6A3.37 3.37 0 0 1 2.63 18v-2c0-.48.39-.87.87-.87M20.5 15.13c.48 0 .88.39.88.87v2A3.37 3.37 0 0 1 18 21.38h-2a.88.88 0 0 1 0-1.75h2c.9 0 1.63-.73 1.63-1.63v-2c0-.48.39-.87.87-.87M8 2.63a.87.87 0 1 1 0 1.75H6c-.9 0-1.62.72-1.62 1.62v2a.87.87 0 1 1-1.75 0V6A3.4 3.4 0 0 1 6 2.63zM18 2.63A3.37 3.37 0 0 1 21.38 6v2a.88.88 0 0 1-1.75 0V6c0-.9-.73-1.62-1.63-1.62h-2a.88.88 0 0 1 0-1.75z" opacity={0.4} />
        <path fillRule="evenodd" d="M11.36 5.52q.64-.13 1.28 0c.51.1.98.37 1.6.7l1.7.93c.67.37 1.18.64 1.56 1.05q.48.52.7 1.18c.19.53.17 1.11.17 1.87v1.5c0 .76.02 1.34-.16 1.87q-.23.66-.7 1.18c-.39.41-.9.68-1.57 1.05l-1.7.93c-.62.33-1.09.6-1.6.7q-.64.14-1.28 0c-.51-.1-.98-.37-1.6-.7l-1.7-.93c-.67-.37-1.18-.64-1.57-1.05a3 3 0 0 1-.7-1.18c-.18-.53-.17-1.11-.17-1.87v-1.5c0-.76 0-1.34.17-1.87q.23-.66.7-1.18c.39-.41.9-.68 1.57-1.05l1.7-.93c.62-.33 1.09-.6 1.6-.7m1.51 7v4l.53-.28 1.7-.93c.78-.42.98-.55 1.12-.7q.23-.23.33-.54c.06-.2.07-.44.07-1.32v-2.27zm-.57-5.29a2 2 0 0 0-.6 0c-.19.04-.39.14-1.1.53l-1.7.93-.57.31L12 11l3.67-2-.56-.31-1.71-.93c-.72-.39-.91-.49-1.1-.53" clipRule="evenodd" />
    </IconBase>
  ))
);

ScanCubeFillDuotone.displayName = 'ScanCubeFillDuotone';

// Triple export pattern (lucide-react style)
export { ScanCubeFillDuotone, ScanCubeFillDuotone as ScanCubeFillDuotoneIcon, ScanCubeFillDuotone as SiScanCubeFillDuotone };
export default ScanCubeFillDuotone;
export type { ScanCubeFillDuotoneProps };
