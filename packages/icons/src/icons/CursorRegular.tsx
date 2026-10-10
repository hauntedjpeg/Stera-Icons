import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorRegularProps = Omit<IconBaseProps, 'children'>;

const CursorRegular = memo(
  forwardRef<SVGSVGElement, CursorRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M3.34 5.58c-.46-1.38.86-2.7 2.24-2.24L19.54 8c1.64.54 1.6 2.88-.06 3.37l-6.27 1.84-1.84 6.27c-.5 1.66-2.83 1.7-3.37.06zm1.76-.81c-.2-.07-.4.12-.33.33l4.65 13.97c.08.25.44.24.5-.01l1.97-6.66.03-.1q.14-.31.48-.41l6.66-1.96c.25-.07.26-.43 0-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

CursorRegular.displayName = 'CursorRegular';

// Triple export pattern
export { CursorRegular, CursorRegular as CursorRegularIcon, CursorRegular as SiCursorRegular };
export default CursorRegular;
export type { CursorRegularProps };
