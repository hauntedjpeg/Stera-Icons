import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowBigRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowBigRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowBigRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.75 3.2c0-1.1 1.35-1.66 2.13-.88l8.27 8.27c.78.78.78 2.04 0 2.82l-8.27 8.27c-.78.78-2.13.23-2.13-.89V16c0-.41.34-.75.75-.75s.75.34.75.75v4.19l7.84-7.84c.2-.2.2-.5 0-.7L11.25 3.8V8c0 .41-.34.75-.75.75s-.75-.34-.75-.75z" />
        <path d="M9.75 7.25V8c0 .39.3.7.67.75h.08-5c-.41 0-.75.34-.75.75v5c0 .41.34.75.75.75h5c-.41 0-.75.34-.75.75v.75H5.5c-1.24 0-2.25-1-2.25-2.25v-5c0-1.24 1-2.25 2.25-2.25z" opacity={.4} />
    </IconBase>
  ))
);

ArrowBigRightRegularDuotone.displayName = 'ArrowBigRightRegularDuotone';

// Triple export pattern
export { ArrowBigRightRegularDuotone, ArrowBigRightRegularDuotone as ArrowBigRightRegularDuotoneIcon, ArrowBigRightRegularDuotone as SiArrowBigRightRegularDuotone };
export default ArrowBigRightRegularDuotone;
export type { ArrowBigRightRegularDuotoneProps };
