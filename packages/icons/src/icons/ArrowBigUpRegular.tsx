import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowBigUpRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowBigUpRegular = memo(
  forwardRef<SVGSVGElement, ArrowBigUpRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.59 3.85c.78-.78 2.04-.78 2.82 0l8.27 8.27c.78.78.23 2.13-.89 2.13h-4.04V18c0 1.52-1.23 2.75-2.75 2.75h-4c-1.52 0-2.75-1.23-2.75-2.75v-3.75H3.21c-1.12 0-1.67-1.35-.89-2.13zm1.76 1.06c-.2-.2-.5-.2-.7 0L3.8 12.75H8c.41 0 .75.34.75.75V18c0 .69.56 1.25 1.25 1.25h4c.69 0 1.25-.56 1.25-1.25v-4.5c0-.41.34-.75.75-.75h4.19z" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowBigUpRegular.displayName = 'ArrowBigUpRegular';

// Triple export pattern
export { ArrowBigUpRegular, ArrowBigUpRegular as ArrowBigUpRegularIcon, ArrowBigUpRegular as SiArrowBigUpRegular };
export default ArrowBigUpRegular;
export type { ArrowBigUpRegularProps };
