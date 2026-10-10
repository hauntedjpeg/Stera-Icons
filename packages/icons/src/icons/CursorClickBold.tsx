import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorClickBoldProps = Omit<IconBaseProps, 'children'>;

const CursorClickBold = memo(
  forwardRef<SVGSVGElement, CursorClickBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M8.58 10.77c-.44-1.31.75-2.56 2.06-2.23l.13.04 10.05 3.35c1.6.53 1.56 2.82-.06 3.3l-4.27 1.26-1.26 4.27c-.48 1.62-2.77 1.66-3.3.06zm4.97 8.6 1.17-3.97.04-.12q.2-.41.64-.56l3.97-1.17-8.73-2.9z" clipRule="evenodd" />
        <path d="M4.94 12.62c.4-.4 1.03-.4 1.42 0 .39.39.39 1.02 0 1.41L5 15.4c-.4.39-1.02.39-1.41 0-.4-.4-.4-1.02 0-1.41zM2.03 7.5c.15-.54.7-.86 1.23-.72l1.85.5c.54.14.85.7.7 1.23-.13.53-.68.85-1.22.7l-1.85-.5c-.53-.14-.85-.69-.7-1.22M13.97 3.59c.4-.4 1.03-.4 1.42 0 .39.39.39 1.02 0 1.41l-1.36 1.36c-.39.39-1.02.39-1.41 0-.4-.4-.4-1.03 0-1.42zM7.49 2.03c.53-.14 1.08.18 1.22.71l.5 1.85c.14.54-.17 1.09-.7 1.23-.54.14-1.09-.17-1.23-.7l-.5-1.86c-.14-.53.18-1.08.71-1.23" />
    </IconBase>
  ))
);

CursorClickBold.displayName = 'CursorClickBold';

// Triple export pattern
export { CursorClickBold, CursorClickBold as CursorClickBoldIcon, CursorClickBold as SiCursorClickBold };
export default CursorClickBold;
export type { CursorClickBoldProps };
