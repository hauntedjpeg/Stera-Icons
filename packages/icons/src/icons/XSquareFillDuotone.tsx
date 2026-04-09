import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type XSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const XSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, XSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="x-square-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M13.6 3.13q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v3.2q.01 1.64-.05 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05h-3.2q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7v-3.2q-.02-1.64.06-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zM9.62 8.38a.88.88 0 0 0-1.24 1.24L10.76 12l-2.38 2.38a.88.88 0 0 0 1.24 1.24L12 13.24l2.38 2.37a.88.88 0 0 0 1.24-1.24L13.24 12l2.38-2.37a.88.88 0 0 0-1.24-1.24L12 10.76z" clipRule="evenodd" opacity={.4} />
        <path d="M8.38 8.38a.9.9 0 0 1 1.24 0L12 10.76l2.38-2.37a.87.87 0 1 1 1.24 1.24L13.24 12l2.38 2.37a.88.88 0 0 1-1.24 1.24L12 13.24l-2.38 2.38a.88.88 0 0 1-1.24-1.24L10.76 12 8.38 9.62a.9.9 0 0 1 0-1.24" />
    </IconBase>
  ))
);

XSquareFillDuotone.displayName = 'XSquareFillDuotone';

// Triple export pattern (lucide-react style)
export { XSquareFillDuotone, XSquareFillDuotone as XSquareFillDuotoneIcon, XSquareFillDuotone as SiXSquareFillDuotone };
export default XSquareFillDuotone;
export type { XSquareFillDuotoneProps };
