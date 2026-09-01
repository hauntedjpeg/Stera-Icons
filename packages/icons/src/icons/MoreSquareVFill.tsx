import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreSquareVFillProps = Omit<IconBaseProps, 'children'>;

const MoreSquareVFill = memo(
  forwardRef<SVGSVGElement, MoreSquareVFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.1 2.63q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v4.2q.01 1.64-.05 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05H9.9q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7V9.9q-.02-1.64.06-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zm-2.1 12a1.37 1.37 0 1 0 0 2.74 1.37 1.37 0 0 0 0-2.75m0-4a1.37 1.37 0 1 0 0 2.74 1.37 1.37 0 0 0 0-2.74m0-4a1.37 1.37 0 1 0 0 2.74 1.37 1.37 0 0 0 0-2.74" clipRule="evenodd" />
    </IconBase>
  ))
);

MoreSquareVFill.displayName = 'MoreSquareVFill';

// Triple export pattern (lucide-react style)
export { MoreSquareVFill, MoreSquareVFill as MoreSquareVFillIcon, MoreSquareVFill as SiMoreSquareVFill };
export default MoreSquareVFill;
export type { MoreSquareVFillProps };
