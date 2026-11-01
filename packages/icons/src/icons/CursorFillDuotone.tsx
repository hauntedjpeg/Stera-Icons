import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorFillDuotone = memo(
  forwardRef<SVGSVGElement, CursorFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m6.1 5.77 13.97 4.65c.24.08.24.43-.01.5L13.4 12.9q-.35.1-.48.42l-.03.09-1.96 6.66c-.08.25-.43.25-.5 0L5.76 6.1c-.07-.2.12-.4.33-.33" opacity={.4} />
        <path fillRule="evenodd" d="M4.34 6.58c-.46-1.38.86-2.7 2.24-2.24L20.54 9c1.64.54 1.6 2.88-.06 3.37l-6.27 1.84-1.84 6.27c-.5 1.66-2.83 1.7-3.37.06zm1.76-.81c-.2-.07-.4.12-.33.33l4.65 13.97c.08.25.44.24.5-.01l1.97-6.66.03-.1q.14-.31.48-.41l6.66-1.96c.25-.07.26-.43 0-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

CursorFillDuotone.displayName = 'CursorFillDuotone';

// Triple export pattern
export { CursorFillDuotone, CursorFillDuotone as CursorFillDuotoneIcon, CursorFillDuotone as SiCursorFillDuotone };
export default CursorFillDuotone;
export type { CursorFillDuotoneProps };
