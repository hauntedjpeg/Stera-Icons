import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowSquareLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowSquareLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowSquareLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.1 2.63q1.64-.01 2.7.05c.72.06 1.34.19 1.91.48.92.46 1.67 1.21 2.13 2.13.3.57.42 1.19.48 1.91.06.71.05 1.6.05 2.7v4.2q.01 1.64-.05 2.7c-.06.72-.19 1.34-.48 1.91-.46.92-1.21 1.67-2.13 2.13-.57.3-1.19.42-1.91.48-.71.06-1.6.05-2.7.05H9.9q-1.64.01-2.7-.05c-.72-.06-1.34-.19-1.91-.48-.92-.46-1.67-1.21-2.13-2.13-.3-.57-.42-1.19-.48-1.91q-.07-1.06-.06-2.7V9.9q-.02-1.64.06-2.7c.06-.72.19-1.34.48-1.91.46-.92 1.21-1.67 2.13-2.13.57-.3 1.19-.42 1.91-.48q1.06-.07 2.7-.06zm-1.48 4.75c-.34-.34-.9-.34-1.24 0l-4 4q-.25.26-.25.62t.25.62l4 4c.34.34.9.34 1.24 0s.34-.9 0-1.24l-2.5-2.5H16c.48 0 .87-.4.88-.88 0-.48-.4-.87-.88-.87h-5.89l2.5-2.51c.35-.34.35-.9 0-1.24" clipRule="evenodd" opacity={.4} />
        <path d="M11.38 7.38c.34-.34.9-.34 1.24 0s.34.9 0 1.24l-2.5 2.5H16c.48 0 .87.4.88.88 0 .48-.4.87-.88.87h-5.89l2.5 2.51c.35.34.35.9 0 1.24-.33.34-.89.34-1.23 0l-4-4q-.25-.27-.25-.62 0-.36.25-.62z" />
    </IconBase>
  ))
);

ArrowSquareLeftFillDuotone.displayName = 'ArrowSquareLeftFillDuotone';

// Triple export pattern
export { ArrowSquareLeftFillDuotone, ArrowSquareLeftFillDuotone as ArrowSquareLeftFillDuotoneIcon, ArrowSquareLeftFillDuotone as SiArrowSquareLeftFillDuotone };
export default ArrowSquareLeftFillDuotone;
export type { ArrowSquareLeftFillDuotoneProps };
