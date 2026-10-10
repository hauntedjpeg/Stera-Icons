import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanSearchFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanSearchFillDuotone = memo(
  forwardRef<SVGSVGElement, ScanSearchFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.5 15.13c.48 0 .88.39.88.87v2c0 .9.72 1.63 1.62 1.63h2c.48 0 .88.39.88.87s-.4.88-.88.88H6c-1.86 0-3.37-1.52-3.37-3.38v-2c0-.48.39-.87.87-.87M20.5 15.13c.48 0 .88.39.88.87v2c0 1.86-1.52 3.38-3.38 3.38h-2c-.48 0-.87-.4-.87-.88s.39-.87.87-.87h2c.9 0 1.63-.73 1.63-1.63v-2c0-.48.39-.87.87-.87M8 2.63c.48 0 .88.39.88.87s-.4.88-.88.88H6c-.9 0-1.62.72-1.62 1.62v2c0 .48-.4.88-.88.88s-.87-.4-.87-.88V6c0-1.86 1.5-3.37 3.37-3.37zM18 2.63c1.86 0 3.38 1.5 3.38 3.37v2c0 .48-.4.88-.88.88s-.87-.4-.87-.88V6c0-.9-.73-1.62-1.63-1.62h-2c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" opacity={0.4} />
        <path fillRule="evenodd" d="M11.04 6c2.78 0 5.04 2.26 5.04 5.04q-.01 1.28-.58 2.34l1.81 1.8c.59.6.59 1.54 0 2.13s-1.53.59-2.12 0l-1.81-1.8q-1.07.55-2.34.57C8.26 16.08 6 13.82 6 11.04S8.26 6 11.04 6m0 2.5c-1.4 0-2.54 1.14-2.54 2.54s1.14 2.54 2.54 2.54 2.54-1.14 2.54-2.54-1.14-2.54-2.54-2.54" clipRule="evenodd" />
    </IconBase>
  ))
);

ScanSearchFillDuotone.displayName = 'ScanSearchFillDuotone';

// Triple export pattern
export { ScanSearchFillDuotone, ScanSearchFillDuotone as ScanSearchFillDuotoneIcon, ScanSearchFillDuotone as SiScanSearchFillDuotone };
export default ScanSearchFillDuotone;
export type { ScanSearchFillDuotoneProps };
