import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StethoscopeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const StethoscopeFillDuotone = memo(
  forwardRef<SVGSVGElement, StethoscopeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.88 15.25c0 3.38-2.75 6.13-6.13 6.13h-.25c-2.97 0-5.42-2.2-5.82-5.06q.4.05.82.05.48 0 .95-.07c.38 1.9 2.05 3.32 4.05 3.32h.25c2.42 0 4.38-1.95 4.38-4.37v-1.01q.4.13.87.13t.88-.13z" opacity={.4} />
        <path d="M11 2.63c.48 0 .88.39.88.87v.13H12c1.59 0 2.88 1.28 2.88 2.87V10c0 3.52-2.86 6.38-6.38 6.38S2.13 13.52 2.13 10V6.5C2.13 4.91 3.4 3.63 5 3.63h.13V3.5c0-.48.39-.87.87-.87s.88.39.88.87v2c0 .48-.4.88-.88.88s-.87-.4-.87-.88v-.12H5c-.62 0-1.12.5-1.12 1.12V10c0 2.55 2.07 4.63 4.62 4.63s4.63-2.08 4.63-4.63V6.5c0-.62-.5-1.12-1.13-1.12h-.12v.12c0 .48-.4.88-.88.88s-.87-.4-.87-.88v-2c0-.48.39-.87.87-.87M19 8.63c1.59 0 2.88 1.28 2.88 2.87s-1.3 2.88-2.88 2.88c-1.59 0-2.87-1.3-2.87-2.88 0-1.59 1.28-2.87 2.87-2.87" />
    </IconBase>
  ))
);

StethoscopeFillDuotone.displayName = 'StethoscopeFillDuotone';

// Triple export pattern
export { StethoscopeFillDuotone, StethoscopeFillDuotone as StethoscopeFillDuotoneIcon, StethoscopeFillDuotone as SiStethoscopeFillDuotone };
export default StethoscopeFillDuotone;
export type { StethoscopeFillDuotoneProps };
