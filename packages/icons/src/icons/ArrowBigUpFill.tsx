import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowBigUpFillProps = Omit<IconBaseProps, 'children'>;

const ArrowBigUpFill = memo(
  forwardRef<SVGSVGElement, ArrowBigUpFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.5 3.77a2.13 2.13 0 0 1 3 0l8.27 8.26c.86.86.25 2.34-.98 2.34h-3.92V19c0 1.04-.83 1.87-1.87 1.87H9A1.9 1.9 0 0 1 7.12 19v-4.63H3.21a1.38 1.38 0 0 1-.98-2.34z" />
        <path d="M10.5 3.77a2.13 2.13 0 0 1 3 0l8.27 8.26c.86.86.25 2.34-.98 2.34h-3.92V19c0 1.04-.83 1.87-1.87 1.87H9A1.9 1.9 0 0 1 7.12 19v-4.63H3.21a1.38 1.38 0 0 1-.98-2.34z" />
    </IconBase>
  ))
);

ArrowBigUpFill.displayName = 'ArrowBigUpFill';

// Triple export pattern (lucide-react style)
export { ArrowBigUpFill, ArrowBigUpFill as ArrowBigUpFillIcon, ArrowBigUpFill as SiArrowBigUpFill };
export default ArrowBigUpFill;
export type { ArrowBigUpFillProps };
