import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScanCheckFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScanCheckFillDuotone = memo(
  forwardRef<SVGSVGElement, ScanCheckFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.5 15.13c.48 0 .88.39.88.87v2c0 .9.72 1.63 1.62 1.63h2c.48 0 .88.39.88.87s-.4.88-.88.88H6c-1.86 0-3.37-1.52-3.37-3.38v-2c0-.48.39-.87.87-.87M20.5 15.13c.48 0 .88.39.88.87v2c0 1.86-1.52 3.38-3.38 3.38h-2c-.48 0-.87-.4-.87-.88s.39-.87.87-.87h2c.9 0 1.63-.73 1.63-1.63v-2c0-.48.39-.87.87-.87M8 2.63c.48 0 .88.39.88.87s-.4.88-.88.88H6c-.9 0-1.62.72-1.62 1.62v2c0 .48-.4.88-.88.88s-.87-.4-.87-.88V6c0-1.86 1.5-3.37 3.37-3.37zM18 2.63c1.86 0 3.38 1.5 3.38 3.37v2c0 .48-.4.88-.88.88s-.87-.4-.87-.88V6c0-.9-.73-1.62-1.63-1.62h-2c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" opacity={0.4} />
        <path d="M15.08 8.4c.47-.5 1.26-.54 1.77-.07.5.46.54 1.26.07 1.76l-4.88 5.33-.33.34c-.13.12-.34.3-.64.4q-.6.17-1.18-.03c-.3-.12-.5-.3-.62-.42l-.32-.36-1.9-2.3c-.45-.53-.38-1.32.15-1.76s1.32-.37 1.76.16l1.58 1.9z" />
    </IconBase>
  ))
);

ScanCheckFillDuotone.displayName = 'ScanCheckFillDuotone';

// Triple export pattern
export { ScanCheckFillDuotone, ScanCheckFillDuotone as ScanCheckFillDuotoneIcon, ScanCheckFillDuotone as SiScanCheckFillDuotone };
export default ScanCheckFillDuotone;
export type { ScanCheckFillDuotoneProps };
