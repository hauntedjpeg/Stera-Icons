import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlusSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PlusSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, PlusSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.1 2.63q1.64-.01 2.7.05c.72.06 1.34.19 1.91.48.92.46 1.67 1.21 2.13 2.13.3.57.42 1.19.48 1.91.06.71.05 1.6.05 2.7v4.2q.01 1.64-.05 2.7c-.06.72-.19 1.34-.48 1.91-.46.92-1.21 1.67-2.13 2.13-.57.3-1.19.42-1.91.48-.71.06-1.6.05-2.7.05H9.9q-1.64.01-2.7-.05c-.72-.06-1.34-.19-1.91-.48-.92-.46-1.67-1.21-2.13-2.13-.3-.57-.42-1.19-.48-1.91q-.07-1.06-.06-2.7V9.9q-.02-1.64.06-2.7c.06-.72.19-1.34.48-1.91.46-.92 1.21-1.67 2.13-2.13.57-.3 1.19-.42 1.91-.48q1.06-.07 2.7-.06zM12 7.13c-.48 0-.87.39-.87.87v3.12H8c-.48 0-.87.4-.87.88s.39.87.87.87h3.13V16c0 .48.4.88.87.88.49 0 .88-.4.88-.88v-3.13H16c.48 0 .88-.4.88-.87 0-.49-.4-.88-.88-.88h-3.12V8c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M12 7.13c.49 0 .88.39.88.87v3.12H16c.48 0 .87.4.88.88 0 .48-.4.87-.88.87h-3.12V16c0 .48-.4.87-.88.88-.48 0-.87-.4-.87-.88v-3.13H8c-.48 0-.87-.4-.87-.87 0-.49.39-.88.87-.88h3.13V8c0-.48.4-.87.87-.87" />
    </IconBase>
  ))
);

PlusSquareFillDuotone.displayName = 'PlusSquareFillDuotone';

// Triple export pattern
export { PlusSquareFillDuotone, PlusSquareFillDuotone as PlusSquareFillDuotoneIcon, PlusSquareFillDuotone as SiPlusSquareFillDuotone };
export default PlusSquareFillDuotone;
export type { PlusSquareFillDuotoneProps };
