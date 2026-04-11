import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MinusSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MinusSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, MinusSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13.6 3.13q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v3.2q.01 1.64-.05 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05h-3.2q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7v-3.2q-.02-1.64.06-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zm-5.1 8a.88.88 0 0 0 0 1.74h7a.88.88 0 0 0 0-1.74z" clipRule="evenodd" opacity={.4} />
        <path d="M15.5 11.13a.88.88 0 0 1 0 1.74h-7a.88.88 0 0 1 0-1.74z" />
    </IconBase>
  ))
);

MinusSquareFillDuotone.displayName = 'MinusSquareFillDuotone';

// Triple export pattern (lucide-react style)
export { MinusSquareFillDuotone, MinusSquareFillDuotone as MinusSquareFillDuotoneIcon, MinusSquareFillDuotone as SiMinusSquareFillDuotone };
export default MinusSquareFillDuotone;
export type { MinusSquareFillDuotoneProps };
