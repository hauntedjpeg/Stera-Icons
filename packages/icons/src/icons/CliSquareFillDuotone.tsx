import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CliSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CliSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, CliSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.1 2.63q1.64-.01 2.7.05c.72.06 1.34.19 1.91.48.92.46 1.67 1.21 2.13 2.13.3.57.42 1.19.48 1.91.06.71.05 1.6.05 2.7v4.2q.01 1.64-.05 2.7c-.06.72-.19 1.34-.48 1.91-.46.92-1.21 1.67-2.13 2.13-.57.3-1.19.42-1.91.48-.71.06-1.6.05-2.7.05H9.9q-1.64.01-2.7-.05c-.72-.06-1.34-.19-1.91-.48-.92-.46-1.67-1.21-2.13-2.13-.3-.57-.42-1.19-.48-1.91q-.07-1.06-.06-2.7V9.9q-.02-1.64.06-2.7c.06-.72.19-1.34.48-1.91.46-.92 1.21-1.67 2.13-2.13.57-.3 1.19-.42 1.91-.48q1.06-.07 2.7-.06zM8.62 8.38c-.34-.34-.9-.34-1.24 0s-.34.9 0 1.24L9.76 12l-2.38 2.38c-.34.34-.34.9 0 1.24s.9.34 1.24 0l3-3q.24-.26.26-.62-.01-.36-.26-.62zm3.88 5.74c-.48 0-.87.4-.87.88s.39.87.87.88h4c.48 0 .87-.4.88-.88 0-.48-.4-.87-.88-.87z" clipRule="evenodd" opacity={.4} />
        <path d="M7.38 8.38c.34-.34.9-.34 1.24 0l3 3q.25.26.25.62t-.25.62l-3 3c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24L9.76 12 7.38 9.62c-.34-.34-.34-.9 0-1.24M16.5 14.12c.48 0 .87.4.87.88s-.39.87-.87.87h-4c-.48 0-.88-.39-.88-.87s.4-.88.88-.88z" />
    </IconBase>
  ))
);

CliSquareFillDuotone.displayName = 'CliSquareFillDuotone';

// Triple export pattern
export { CliSquareFillDuotone, CliSquareFillDuotone as CliSquareFillDuotoneIcon, CliSquareFillDuotone as SiCliSquareFillDuotone };
export default CliSquareFillDuotone;
export type { CliSquareFillDuotoneProps };
