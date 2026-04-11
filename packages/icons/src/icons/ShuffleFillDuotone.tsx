import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ShuffleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ShuffleFillDuotone = memo(
  forwardRef<SVGSVGElement, ShuffleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.5 14.28a.88.88 0 0 1 1.4 1.05c-.97 1.3-2.23 2.54-3.9 2.54H3a.87.87 0 1 1 0-1.75h3c.75 0 1.55-.57 2.5-1.84M18.17 3.7c.32-.14.7-.07.95.18l2.5 2.5a.9.9 0 0 1 0 1.24l-2.5 2.5a.88.88 0 0 1-1.5-.62V7.87H16c-.75 0-1.55.58-2.5 1.85a.88.88 0 0 1-1.4-1.05c.97-1.29 2.23-2.55 3.9-2.55h1.63V4.5c0-.35.2-.67.54-.8" opacity={0.4} />
        <path d="M6 6.13c1.39 0 2.49.86 3.35 1.86.87 1 1.66 2.33 2.4 3.56a25 25 0 0 0 2.22 3.31c.77.88 1.42 1.27 2.03 1.27h1.63V14.5a.88.88 0 0 1 1.49-.62l2.5 2.5a.9.9 0 0 1 0 1.24l-2.5 2.5a.88.88 0 0 1-1.5-.62v-1.62H16c-1.39 0-2.49-.87-3.35-1.87-.87-1-1.66-2.33-2.4-3.56a25 25 0 0 0-2.22-3.31C7.26 8.26 6.6 7.87 6 7.87H3a.87.87 0 1 1 0-1.74z" />
    </IconBase>
  ))
);

ShuffleFillDuotone.displayName = 'ShuffleFillDuotone';

// Triple export pattern (lucide-react style)
export { ShuffleFillDuotone, ShuffleFillDuotone as ShuffleFillDuotoneIcon, ShuffleFillDuotone as SiShuffleFillDuotone };
export default ShuffleFillDuotone;
export type { ShuffleFillDuotoneProps };
