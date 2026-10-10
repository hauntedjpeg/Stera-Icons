import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowULeftTopRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowULeftTopRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowULeftTopRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.5 7.25c3.45 0 6.25 2.8 6.25 6.25s-2.8 6.25-6.25 6.25H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.5c2.62 0 4.75-2.13 4.75-4.75s-2.13-4.75-4.75-4.75H5.81L5.06 8l.75-.75z" opacity={.4} />
        <path d="M7.47 3.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06L5.06 8l3.47 3.47c.3.3.3.77 0 1.06s-.77.3-1.06 0l-4-4q-.21-.22-.22-.53 0-.23.13-.42l.09-.11z" />
    </IconBase>
  ))
);

ArrowULeftTopRegularDuotone.displayName = 'ArrowULeftTopRegularDuotone';

// Triple export pattern
export { ArrowULeftTopRegularDuotone, ArrowULeftTopRegularDuotone as ArrowULeftTopRegularDuotoneIcon, ArrowULeftTopRegularDuotone as SiArrowULeftTopRegularDuotone };
export default ArrowULeftTopRegularDuotone;
export type { ArrowULeftTopRegularDuotoneProps };
