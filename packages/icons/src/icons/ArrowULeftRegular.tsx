import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowULeftRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowULeftRegular = memo(
  forwardRef<SVGSVGElement, ArrowULeftRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.5 4.25c3.45 0 6.25 2.8 6.25 6.25s-2.8 6.25-6.25 6.25H5.81l2.72 2.72c.3.3.3.77 0 1.06s-.77.3-1.06 0l-4-4-.1-.11q-.12-.2-.12-.42 0-.31.22-.53l4-4c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-2.72 2.72h7.69c2.62 0 4.75-2.13 4.75-4.75s-2.13-4.75-4.75-4.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

ArrowULeftRegular.displayName = 'ArrowULeftRegular';

// Triple export pattern
export { ArrowULeftRegular, ArrowULeftRegular as ArrowULeftRegularIcon, ArrowULeftRegular as SiArrowULeftRegular };
export default ArrowULeftRegular;
export type { ArrowULeftRegularProps };
