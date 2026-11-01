import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorRegularDuotone = memo(
  forwardRef<SVGSVGElement, CursorRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.03 5.5 20.54 9c1.64.54 1.6 2.88-.06 3.37l-6.27 1.84-1.84 6.27c-.5 1.66-2.83 1.7-3.37.06L5.5 10.03c.12.4.55.6.94.47.37-.12.58-.5.5-.87l-.02-.07 3.5 10.5c.08.26.44.25.5 0l1.97-6.66.03-.1q.14-.31.48-.41l6.66-1.96c.25-.07.26-.43 0-.5L9.57 6.91c.39.13.81-.08.94-.48.13-.37-.05-.76-.4-.92z" opacity={.4} />
        <path d="M4.34 6.58c-.46-1.38.86-2.7 2.24-2.24l3.45 1.15c.4.13.6.56.47.95-.13.4-.55.6-.94.48L6.1 5.77c-.2-.07-.4.12-.33.33l1.15 3.46c.13.39-.08.81-.48.95s-.82-.09-.95-.48z" />
    </IconBase>
  ))
);

CursorRegularDuotone.displayName = 'CursorRegularDuotone';

// Triple export pattern
export { CursorRegularDuotone, CursorRegularDuotone as CursorRegularDuotoneIcon, CursorRegularDuotone as SiCursorRegularDuotone };
export default CursorRegularDuotone;
export type { CursorRegularDuotoneProps };
