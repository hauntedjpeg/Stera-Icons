import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowBigRightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowBigRightFill = memo(
  forwardRef<SVGSVGElement, ArrowBigRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.63 3.2a1.38 1.38 0 0 1 2.34-.97l8.26 8.27c.83.83.83 2.17 0 3l-8.26 8.27c-.86.86-2.34.25-2.35-.98v-3.92H5A1.87 1.87 0 0 1 3.13 15V9c0-1.04.83-1.88 1.87-1.88h4.63z" />
    </IconBase>
  ))
);

ArrowBigRightFill.displayName = 'ArrowBigRightFill';

// Triple export pattern (lucide-react style)
export { ArrowBigRightFill, ArrowBigRightFill as ArrowBigRightFillIcon, ArrowBigRightFill as SiArrowBigRightFill };
export default ArrowBigRightFill;
export type { ArrowBigRightFillProps };
