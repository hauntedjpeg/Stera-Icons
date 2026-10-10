import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowULeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowULeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowULeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.5 4.25c3.45 0 6.25 2.8 6.25 6.25s-2.8 6.25-6.25 6.25H5.81L5.06 16l.75-.75h7.69c2.62 0 4.75-2.13 4.75-4.75s-2.13-4.75-4.75-4.75H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={.4} />
        <path d="M7.47 11.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06L5.06 16l3.47 3.47c.3.3.3.77 0 1.06s-.77.3-1.06 0l-4-4-.1-.11q-.12-.2-.12-.42 0-.31.22-.53z" />
    </IconBase>
  ))
);

ArrowULeftRegularDuotone.displayName = 'ArrowULeftRegularDuotone';

// Triple export pattern
export { ArrowULeftRegularDuotone, ArrowULeftRegularDuotone as ArrowULeftRegularDuotoneIcon, ArrowULeftRegularDuotone as SiArrowULeftRegularDuotone };
export default ArrowULeftRegularDuotone;
export type { ArrowULeftRegularDuotoneProps };
