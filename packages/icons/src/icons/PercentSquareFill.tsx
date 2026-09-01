import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PercentSquareFillProps = Omit<IconBaseProps, 'children'>;

const PercentSquareFill = memo(
  forwardRef<SVGSVGElement, PercentSquareFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.1 2.63q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v4.2q.01 1.64-.05 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05H9.9q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7V9.9q-.02-1.64.06-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zm2.02 5.25a.9.9 0 0 0-1.24 0l-7 7a.88.88 0 0 0 1.24 1.24l7-7a.9.9 0 0 0 0-1.24m-1.37 5.37a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-5.5-5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

PercentSquareFill.displayName = 'PercentSquareFill';

// Triple export pattern (lucide-react style)
export { PercentSquareFill, PercentSquareFill as PercentSquareFillIcon, PercentSquareFill as SiPercentSquareFill };
export default PercentSquareFill;
export type { PercentSquareFillProps };
