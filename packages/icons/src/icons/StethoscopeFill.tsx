import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type StethoscopeFillProps = Omit<IconBaseProps, 'children'>;

const StethoscopeFill = memo(
  forwardRef<SVGSVGElement, StethoscopeFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11 2.63c.48 0 .88.39.88.87v.13H12c1.59 0 2.88 1.28 2.88 2.87V10c0 3.2-2.36 5.84-5.43 6.3.38 1.9 2.05 3.32 4.05 3.32h.25c2.42 0 4.38-1.95 4.38-4.37v-1.01c-1.16-.37-2-1.46-2-2.74 0-1.59 1.28-2.87 2.87-2.87s2.88 1.28 2.88 2.87c0 1.28-.85 2.37-2 2.74v1.01c0 3.38-2.75 6.13-6.13 6.13h-.25c-2.97 0-5.42-2.2-5.82-5.06-3.13-.4-5.55-3.08-5.55-6.32V6.5C2.13 4.91 3.4 3.63 5 3.63h.13V3.5c0-.48.39-.87.87-.87s.88.39.88.87v2c0 .48-.4.88-.88.88s-.87-.4-.87-.88v-.12H5c-.62 0-1.12.5-1.12 1.12V10c0 2.55 2.07 4.63 4.62 4.63s4.63-2.08 4.63-4.63V6.5c0-.62-.5-1.12-1.13-1.12h-.12v.12c0 .48-.4.88-.88.88s-.87-.4-.87-.88v-2c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

StethoscopeFill.displayName = 'StethoscopeFill';

// Triple export pattern
export { StethoscopeFill, StethoscopeFill as StethoscopeFillIcon, StethoscopeFill as SiStethoscopeFill };
export default StethoscopeFill;
export type { StethoscopeFillProps };
