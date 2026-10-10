import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowULeftTopRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowULeftTopRegular = memo(
  forwardRef<SVGSVGElement, ArrowULeftTopRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.47 3.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06L5.81 7.25h7.69c3.45 0 6.25 2.8 6.25 6.25s-2.8 6.25-6.25 6.25H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.5c2.62 0 4.75-2.13 4.75-4.75s-2.13-4.75-4.75-4.75H5.81l2.72 2.72c.3.3.3.77 0 1.06s-.77.3-1.06 0l-4-4q-.21-.22-.22-.53 0-.23.13-.42l.09-.11z" />
    </IconBase>
  ))
);

ArrowULeftTopRegular.displayName = 'ArrowULeftTopRegular';

// Triple export pattern
export { ArrowULeftTopRegular, ArrowULeftTopRegular as ArrowULeftTopRegularIcon, ArrowULeftTopRegular as SiArrowULeftTopRegular };
export default ArrowULeftTopRegular;
export type { ArrowULeftTopRegularProps };
