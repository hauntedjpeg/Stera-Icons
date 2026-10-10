import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorBoldProps = Omit<IconBaseProps, 'children'>;

const CursorBold = memo(
  forwardRef<SVGSVGElement, CursorBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M3.1 5.66c-.52-1.58.98-3.08 2.56-2.55l13.96 4.65c1.87.63 1.83 3.3-.07 3.85l-6.14 1.8-1.8 6.14c-.56 1.9-3.22 1.94-3.85.07zM5 5v.01L9.66 19l.01.01h.02v-.01l1.96-6.66.04-.12q.2-.42.64-.56l6.66-1.96.01-.02-.01-.01L5.02 5z" clipRule="evenodd" />
    </IconBase>
  ))
);

CursorBold.displayName = 'CursorBold';

// Triple export pattern
export { CursorBold, CursorBold as CursorBoldIcon, CursorBold as SiCursorBold };
export default CursorBold;
export type { CursorBoldProps };
