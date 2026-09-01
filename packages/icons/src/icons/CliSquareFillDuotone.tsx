import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CliSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CliSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, CliSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.1 2.63q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v4.2q.01 1.64-.05 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05H9.9q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7V9.9q-.02-1.64.06-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zM8.62 8.38a.88.88 0 0 0-1.24 1.24L9.76 12l-2.38 2.38a.88.88 0 0 0 1.24 1.24l3-3a.9.9 0 0 0 0-1.24zm3.88 5.74a.88.88 0 0 0 0 1.76h4a.88.88 0 0 0 0-1.76z" clipRule="evenodd" opacity={.4} />
        <path d="M7.38 8.38a.9.9 0 0 1 1.24 0l3 3a.9.9 0 0 1 0 1.24l-3 3a.88.88 0 0 1-1.24-1.24L9.76 12 7.38 9.62a.9.9 0 0 1 0-1.24M16.5 14.12a.88.88 0 0 1 0 1.75h-4a.88.88 0 0 1 0-1.75z" />
    </IconBase>
  ))
);

CliSquareFillDuotone.displayName = 'CliSquareFillDuotone';

// Triple export pattern (lucide-react style)
export { CliSquareFillDuotone, CliSquareFillDuotone as CliSquareFillDuotoneIcon, CliSquareFillDuotone as SiCliSquareFillDuotone };
export default CliSquareFillDuotone;
export type { CliSquareFillDuotoneProps };
