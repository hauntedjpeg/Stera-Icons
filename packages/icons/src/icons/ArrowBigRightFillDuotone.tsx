import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowBigRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowBigRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowBigRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19 11.73c.14.15.14.39 0 .54l-7.62 7.62V16c0-.48-.4-.87-.88-.87h-5c-.35 0-.62-.28-.62-.63v-5c0-.35.27-.62.62-.62h5c.48 0 .88-.4.88-.88V4.11z" opacity={.4} />
        <path fillRule="evenodd" d="M9.63 3.2c0-1.22 1.48-1.83 2.34-.97l8.26 8.27c.83.83.83 2.17 0 3l-8.26 8.27c-.86.86-2.34.25-2.35-.98v-3.92H5.5c-1.31 0-2.37-1.06-2.37-2.37v-5c0-1.31 1.06-2.38 2.37-2.38h4.13zM11.37 8c0 .48-.39.87-.87.87h-5c-.35 0-.62.28-.62.63v5c0 .35.27.62.62.62h5c.48 0 .88.4.88.88v3.89L19 12.27c.14-.15.14-.39 0-.54l-7.62-7.62z" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowBigRightFillDuotone.displayName = 'ArrowBigRightFillDuotone';

// Triple export pattern
export { ArrowBigRightFillDuotone, ArrowBigRightFillDuotone as ArrowBigRightFillDuotoneIcon, ArrowBigRightFillDuotone as SiArrowBigRightFillDuotone };
export default ArrowBigRightFillDuotone;
export type { ArrowBigRightFillDuotoneProps };
