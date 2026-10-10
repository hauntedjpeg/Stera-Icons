import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowUpRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowUpRegular = memo(
  forwardRef<SVGSVGElement, ArrowUpRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.47 12.53c-.3-.3-.3-.77 0-1.06l7-7c.3-.3.77-.3 1.06 0l7 7c.3.3.3.77 0 1.06s-.77.3-1.06 0l-5.72-5.72V19c0 .41-.34.75-.75.75s-.75-.34-.75-.75V6.81l-5.72 5.72c-.3.3-.77.3-1.06 0" />
    </IconBase>
  ))
);

ArrowUpRegular.displayName = 'ArrowUpRegular';

// Triple export pattern
export { ArrowUpRegular, ArrowUpRegular as ArrowUpRegularIcon, ArrowUpRegular as SiArrowUpRegular };
export default ArrowUpRegular;
export type { ArrowUpRegularProps };
