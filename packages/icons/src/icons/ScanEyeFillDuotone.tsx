import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanEyeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanEyeFillDuotone = memo(
  forwardRef<SVGSVGElement, ScanEyeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.5 15.13c.48 0 .88.39.88.87v2c0 .9.72 1.63 1.62 1.63h2c.48 0 .88.39.88.87s-.4.88-.88.88H6c-1.86 0-3.37-1.52-3.37-3.38v-2c0-.48.39-.87.87-.87M20.5 15.13c.48 0 .88.39.88.87v2c0 1.86-1.52 3.38-3.38 3.38h-2c-.48 0-.87-.4-.87-.88s.39-.87.87-.87h2c.9 0 1.63-.73 1.63-1.63v-2c0-.48.39-.87.87-.87M8 2.63c.48 0 .88.39.88.87s-.4.88-.88.88H6c-.9 0-1.62.72-1.62 1.62v2c0 .48-.4.88-.88.88s-.87-.4-.87-.88V6c0-1.86 1.5-3.37 3.37-3.37zM18 2.63c1.86 0 3.38 1.5 3.38 3.37v2c0 .48-.4.88-.88.88s-.87-.4-.87-.88V6c0-.9-.73-1.62-1.63-1.62h-2c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" opacity={0.4} />
        <path fillRule="evenodd" d="M12 6.75c3.24 0 6 2.06 7.2 4.96q.1.3 0 .58c-1.2 2.9-3.96 4.96-7.2 4.96s-6-2.06-7.2-4.96q-.1-.3 0-.58C6 8.81 8.77 6.75 12 6.75M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2" clipRule="evenodd" />
    </IconBase>
  ))
);

ScanEyeFillDuotone.displayName = 'ScanEyeFillDuotone';

// Triple export pattern
export { ScanEyeFillDuotone, ScanEyeFillDuotone as ScanEyeFillDuotoneIcon, ScanEyeFillDuotone as SiScanEyeFillDuotone };
export default ScanEyeFillDuotone;
export type { ScanEyeFillDuotoneProps };
