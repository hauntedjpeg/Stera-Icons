import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StethoscopeFillProps = Omit<IconBaseProps, 'children'>;

const StethoscopeFill = memo(
  forwardRef<SVGSVGElement, StethoscopeFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11 2.63c.48 0 .88.39.88.87v.13H12a2.9 2.9 0 0 1 2.88 2.87V10c0 3.2-2.36 5.84-5.43 6.3a4.1 4.1 0 0 0 4.05 3.32h.25a4.4 4.4 0 0 0 4.38-4.37v-1.01a2.88 2.88 0 1 1 1.75 0v1.01a6.13 6.13 0 0 1-6.13 6.13h-.25a5.9 5.9 0 0 1-5.82-5.06A6.4 6.4 0 0 1 2.13 10V6.5A2.87 2.87 0 0 1 5 3.63h.13V3.5a.87.87 0 1 1 1.75 0v2a.87.87 0 1 1-1.75 0v-.12H5c-.62 0-1.12.5-1.12 1.12V10a4.63 4.63 0 0 0 9.25 0V6.5c0-.62-.5-1.12-1.13-1.12h-.12v.12a.88.88 0 0 1-1.76 0v-2c0-.48.4-.87.88-.87" />
    </IconBase>
  ))
);

StethoscopeFill.displayName = 'StethoscopeFill';

// Triple export pattern (lucide-react style)
export { StethoscopeFill, StethoscopeFill as StethoscopeFillIcon, StethoscopeFill as SiStethoscopeFill };
export default StethoscopeFill;
export type { StethoscopeFillProps };
