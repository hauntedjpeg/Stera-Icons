import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowBigUpFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowBigUpFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowBigUpFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.73 5a.4.4 0 0 1 .54 0l7.62 7.62H16c-.48 0-.87.4-.87.88v5c0 .34-.28.62-.63.62h-5a.6.6 0 0 1-.62-.62v-5c0-.48-.4-.88-.88-.88H4.11z" opacity={.4} />
        <path fillRule="evenodd" d="M10.5 3.77a2.13 2.13 0 0 1 3 0l8.27 8.26c.86.86.25 2.34-.98 2.34h-3.92v4.13a2.37 2.37 0 0 1-2.37 2.37h-5a2.4 2.4 0 0 1-2.38-2.37v-4.13H3.21a1.38 1.38 0 0 1-.98-2.34zM12.27 5a.4.4 0 0 0-.54 0l-7.62 7.62H8c.48 0 .87.4.87.88v5c0 .34.28.62.63.62h5c.35 0 .62-.28.62-.62v-5c0-.48.4-.88.88-.88h3.89z" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowBigUpFillDuotone.displayName = 'ArrowBigUpFillDuotone';

// Triple export pattern (lucide-react style)
export { ArrowBigUpFillDuotone, ArrowBigUpFillDuotone as ArrowBigUpFillDuotoneIcon, ArrowBigUpFillDuotone as SiArrowBigUpFillDuotone };
export default ArrowBigUpFillDuotone;
export type { ArrowBigUpFillDuotoneProps };
