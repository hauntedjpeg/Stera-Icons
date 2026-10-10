import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerUpLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 10.25c1.8 0 2.88 0 3.78.28 1.75.57 3.12 1.94 3.69 3.7.29.89.28 1.97.28 3.77 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-1.92 0-2.7-.2-3.31-.43-1.3-1.44-2.31-2.74-2.73-.6-.2-1.39-.21-3.31-.21H5.81L5.06 11l.75-.75z" opacity={.4} />
        <path d="M8.47 5.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06L5.06 11l4.47 4.47c.3.3.3.77 0 1.06s-.77.3-1.06 0l-5-5q-.21-.22-.22-.53 0-.23.13-.42l.09-.11z" />
    </IconBase>
  ))
);

ArrowCornerUpLeftRegularDuotone.displayName = 'ArrowCornerUpLeftRegularDuotone';

// Triple export pattern
export { ArrowCornerUpLeftRegularDuotone, ArrowCornerUpLeftRegularDuotone as ArrowCornerUpLeftRegularDuotoneIcon, ArrowCornerUpLeftRegularDuotone as SiArrowCornerUpLeftRegularDuotone };
export default ArrowCornerUpLeftRegularDuotone;
export type { ArrowCornerUpLeftRegularDuotoneProps };
