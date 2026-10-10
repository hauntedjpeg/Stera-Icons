import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorBoxBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorBoxBoldDuotone = memo(
  forwardRef<SVGSVGElement, CursorBoxBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.1 2.5q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48.94.48 1.7 1.25 2.19 2.19.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v.81c0 .56-.45 1-1 1s-1-.44-1-1V9.9c0-1.14 0-1.93-.05-2.55-.05-.6-.14-.95-.28-1.21q-.44-.87-1.3-1.31c-.27-.14-.62-.23-1.22-.28-.62-.05-1.41-.05-2.55-.05H9.9c-1.14 0-1.93 0-2.55.05-.6.05-.95.14-1.21.28-.57.28-1.03.74-1.31 1.3-.14.27-.23.62-.28 1.22-.05.62-.05 1.41-.05 2.55v4.2c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21.28.57.74 1.03 1.3 1.31.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05h.8c.56 0 1 .45 1 1s-.44 1-1 1h-.8q-1.65.02-2.7-.06c-.74-.06-1.38-.18-1.97-.48-.94-.48-1.7-1.25-2.19-2.19-.3-.6-.42-1.23-.48-1.96q-.07-1.06-.06-2.71V9.9q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97.48-.94 1.25-1.7 2.19-2.19.6-.3 1.23-.42 1.96-.48q1.06-.07 2.71-.06z" opacity={.4} />
        <path fillRule="evenodd" d="M11.13 13.11c-.4-1.19.68-2.32 1.87-2.02l.11.04 7.82 2.6c1.45.49 1.42 2.56-.06 3l-3.2.94-.94 3.2c-.44 1.48-2.51 1.51-3 .06zM15.19 19l.71-2.41q.17-.51.68-.68l2.41-.7-5.7-1.9z" clipRule="evenodd" />
    </IconBase>
  ))
);

CursorBoxBoldDuotone.displayName = 'CursorBoxBoldDuotone';

// Triple export pattern
export { CursorBoxBoldDuotone, CursorBoxBoldDuotone as CursorBoxBoldDuotoneIcon, CursorBoxBoldDuotone as SiCursorBoxBoldDuotone };
export default CursorBoxBoldDuotone;
export type { CursorBoxBoldDuotoneProps };
