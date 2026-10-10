import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanFaceFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanFaceFillDuotone = memo(
  forwardRef<SVGSVGElement, ScanFaceFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.5 15.13c.48 0 .88.39.88.87v2c0 .9.72 1.63 1.62 1.63h2c.48 0 .88.39.88.87s-.4.88-.88.88H6c-1.86 0-3.37-1.52-3.37-3.38v-2c0-.48.39-.87.87-.87M20.5 15.13c.48 0 .88.39.88.87v2c0 1.86-1.52 3.38-3.38 3.38h-2c-.48 0-.87-.4-.87-.88s.39-.87.87-.87h2c.9 0 1.63-.73 1.63-1.63v-2c0-.48.39-.87.87-.87M8 2.63c.48 0 .88.39.88.87s-.4.88-.88.88H6c-.9 0-1.62.72-1.62 1.62v2c0 .48-.4.88-.88.88s-.87-.4-.87-.88V6c0-1.86 1.5-3.37 3.37-3.37zM18 2.63c1.86 0 3.38 1.5 3.38 3.37v2c0 .48-.4.88-.88.88s-.87-.4-.87-.88V6c0-.9-.73-1.62-1.63-1.62h-2c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" opacity={0.4} />
        <path fillRule="evenodd" d="M12 5.75c3.45 0 6.25 2.8 6.25 6.25s-2.8 6.25-6.25 6.25-6.25-2.8-6.25-6.25S8.55 5.75 12 5.75m2.68 7.4c-.28-.21-.67-.16-.88.12-.4.55-1.06.9-1.8.9-.73 0-1.39-.35-1.8-.9-.2-.28-.6-.33-.87-.13-.28.21-.33.6-.13.88.64.85 1.66 1.4 2.8 1.4 1.15 0 2.17-.55 2.8-1.4.21-.28.15-.67-.12-.88m-4.7-3.6c-.55 0-1 .46-1 1.01 0 .56.45 1 1 1 .56 0 1.02-.44 1.02-1 0-.55-.46-1-1.01-1m4.04 0c-.56 0-1.01.46-1.01 1.01 0 .56.45 1 1 1 .56 0 1.01-.44 1.01-1 0-.55-.45-1-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

ScanFaceFillDuotone.displayName = 'ScanFaceFillDuotone';

// Triple export pattern
export { ScanFaceFillDuotone, ScanFaceFillDuotone as ScanFaceFillDuotoneIcon, ScanFaceFillDuotone as SiScanFaceFillDuotone };
export default ScanFaceFillDuotone;
export type { ScanFaceFillDuotoneProps };
