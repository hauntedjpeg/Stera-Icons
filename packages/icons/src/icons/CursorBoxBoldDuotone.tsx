import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorBoxBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorBoxBoldDuotone = memo(
  forwardRef<SVGSVGElement, CursorBoxBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-box-bold-duotone" {...props}>
      <path d="M14.1 2.5q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48a5 5 0 0 1 2.19 2.19c.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v.81a1 1 0 0 1-2 0V9.9c0-1.14 0-1.93-.05-2.55a3 3 0 0 0-.28-1.21 3 3 0 0 0-1.3-1.31 3 3 0 0 0-1.22-.28c-.62-.05-1.41-.05-2.55-.05H9.9c-1.14 0-1.93 0-2.55.05-.6.05-.95.14-1.21.28a3 3 0 0 0-1.31 1.3 3 3 0 0 0-.28 1.22c-.05.62-.05 1.41-.05 2.55v4.2c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21a3 3 0 0 0 1.3 1.31c.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05h.8a1 1 0 0 1 0 2h-.8q-1.65.02-2.7-.06a5 5 0 0 1-1.97-.48 5 5 0 0 1-2.19-2.19c-.3-.6-.42-1.23-.48-1.96q-.07-1.06-.06-2.71V9.9q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97a5 5 0 0 1 2.19-2.19c.6-.3 1.23-.42 1.96-.48q1.06-.07 2.71-.06z" opacity={.4} />
        <path fillRule="evenodd" d="M11.13 13.11A1.57 1.57 0 0 1 13 11.1l.11.04 7.82 2.6a1.57 1.57 0 0 1-.06 3l-3.2.94-.94 3.2a1.57 1.57 0 0 1-3 .06zM15.19 19l.71-2.4a1 1 0 0 1 .68-.69l2.41-.7-5.7-1.9z" clipRule="evenodd" />
    </IconBase>
  ))
);

CursorBoxBoldDuotone.displayName = 'CursorBoxBoldDuotone';

// Triple export pattern (lucide-react style)
export { CursorBoxBoldDuotone, CursorBoxBoldDuotone as CursorBoxBoldDuotoneIcon, CursorBoxBoldDuotone as SiCursorBoxBoldDuotone };
export default CursorBoxBoldDuotone;
export type { CursorBoxBoldDuotoneProps };
