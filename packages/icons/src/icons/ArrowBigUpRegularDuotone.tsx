import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowBigUpRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowBigUpRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowBigUpRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.25 13.5c0 .41.34.75.75.75h.75v4.25c0 1.24-1 2.25-2.25 2.25h-5c-1.24 0-2.25-1-2.25-2.25v-4.25H8c.41 0 .75-.34.75-.75v5c0 .41.34.75.75.75h5c.41 0 .75-.34.75-.75z" opacity={.4} />
        <path d="M10.59 3.85c.78-.78 2.04-.78 2.82 0l8.27 8.27c.78.78.23 2.13-.89 2.13H16c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.19l-7.84-7.84c-.2-.2-.5-.2-.7 0L3.8 12.75H8c.41 0 .75.34.75.75s-.34.75-.75.75H3.2c-1.1 0-1.66-1.35-.88-2.13z" />
    </IconBase>
  ))
);

ArrowBigUpRegularDuotone.displayName = 'ArrowBigUpRegularDuotone';

// Triple export pattern
export { ArrowBigUpRegularDuotone, ArrowBigUpRegularDuotone as ArrowBigUpRegularDuotoneIcon, ArrowBigUpRegularDuotone as SiArrowBigUpRegularDuotone };
export default ArrowBigUpRegularDuotone;
export type { ArrowBigUpRegularDuotoneProps };
