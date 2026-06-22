import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StethoscopeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const StethoscopeFillDuotone = memo(
  forwardRef<SVGSVGElement, StethoscopeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.88 15.25a6.13 6.13 0 0 1-6.13 6.13h-.25a5.9 5.9 0 0 1-5.82-5.06 6 6 0 0 0 1.77-.02 4.1 4.1 0 0 0 4.05 3.32h.25a4.4 4.4 0 0 0 4.38-4.37v-1.01a3 3 0 0 0 1.75 0z" opacity={.4} />
        <path d="M11 2.63c.48 0 .88.39.88.87v.13H12a2.9 2.9 0 0 1 2.88 2.87V10a6.38 6.38 0 0 1-12.75 0V6.5A2.87 2.87 0 0 1 5 3.63h.13V3.5a.87.87 0 1 1 1.75 0v2a.87.87 0 1 1-1.75 0v-.12H5c-.62 0-1.12.5-1.12 1.12V10a4.63 4.63 0 0 0 9.25 0V6.5c0-.62-.5-1.12-1.13-1.12h-.12v.12a.88.88 0 0 1-1.76 0v-2c0-.48.4-.87.88-.87M19 8.63a2.88 2.88 0 1 1 0 5.75 2.88 2.88 0 0 1 0-5.76" />
    </IconBase>
  ))
);

StethoscopeFillDuotone.displayName = 'StethoscopeFillDuotone';

// Triple export pattern (lucide-react style)
export { StethoscopeFillDuotone, StethoscopeFillDuotone as StethoscopeFillDuotoneIcon, StethoscopeFillDuotone as SiStethoscopeFillDuotone };
export default StethoscopeFillDuotone;
export type { StethoscopeFillDuotoneProps };
