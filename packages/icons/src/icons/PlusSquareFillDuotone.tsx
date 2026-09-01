import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlusSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PlusSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, PlusSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.1 2.63q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v4.2q.01 1.64-.05 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05H9.9q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7V9.9q-.02-1.64.06-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zM12 7.13c-.48 0-.87.39-.87.87v3.12H8a.88.88 0 0 0 0 1.75h3.13V16a.87.87 0 1 0 1.75 0v-3.13H16a.87.87 0 1 0 0-1.75h-3.12V8c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 7.13c.49 0 .88.39.88.87v3.12H16a.88.88 0 0 1 0 1.75h-3.12V16a.88.88 0 0 1-1.75 0v-3.13H8a.87.87 0 1 1 0-1.75h3.13V8c0-.48.4-.87.87-.87" />
    </IconBase>
  ))
);

PlusSquareFillDuotone.displayName = 'PlusSquareFillDuotone';

// Triple export pattern (lucide-react style)
export { PlusSquareFillDuotone, PlusSquareFillDuotone as PlusSquareFillDuotoneIcon, PlusSquareFillDuotone as SiPlusSquareFillDuotone };
export default PlusSquareFillDuotone;
export type { PlusSquareFillDuotoneProps };
