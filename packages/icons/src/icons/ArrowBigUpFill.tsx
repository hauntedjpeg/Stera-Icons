import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowBigUpFillProps = Omit<IconBaseProps, 'children'>;

const ArrowBigUpFill = memo(
  forwardRef<SVGSVGElement, ArrowBigUpFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.5 3.77c.83-.83 2.17-.83 3 0l8.27 8.26c.86.86.25 2.34-.98 2.34h-3.92V19c0 1.04-.83 1.87-1.87 1.87H9c-1.04 0-1.88-.83-1.88-1.87v-4.63H3.21c-1.23 0-1.84-1.48-.98-2.34z" />
    </IconBase>
  ))
);

ArrowBigUpFill.displayName = 'ArrowBigUpFill';

// Triple export pattern
export { ArrowBigUpFill, ArrowBigUpFill as ArrowBigUpFillIcon, ArrowBigUpFill as SiArrowBigUpFill };
export default ArrowBigUpFill;
export type { ArrowBigUpFillProps };
