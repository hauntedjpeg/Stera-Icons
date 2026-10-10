import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorPointerBoldProps = Omit<IconBaseProps, 'children'>;

const CursorPointerBold = memo(
  forwardRef<SVGSVGElement, CursorPointerBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.14 2c1.55 0 2.8 1.25 2.8 2.8v1.82q.4-.12.8-.12c.96 0 1.8.48 2.31 1.22q.59-.31 1.3-.32c1.54 0 2.8 1.25 2.8 2.8v3.6c0 4.53-3.68 8.2-8.2 8.2-4.03 0-7.38-2.9-8.07-6.73l-1.05-2.68c-.7-1.33-.24-2.97 1.07-3.73.58-.33 1.24-.44 1.85-.34.6.1 1.16.4 1.6.85V4.8c0-1.55 1.25-2.8 2.8-2.8m0 2c-.44 0-.8.36-.8.8v8.1c0 .45-.3.85-.73.96-.44.12-.9-.06-1.13-.45L6 10.89q-.21-.34-.57-.4-.27-.04-.53.1c-.38.22-.51.71-.3 1.1l.07.13 1.1 2.8.03.1.03.1C6.32 17.77 8.87 20 11.94 20c3.43 0 6.2-2.78 6.2-6.2v-3.6c0-.44-.36-.8-.8-.8-.41 0-.75.31-.8.72v1.43c0 .55-.44 1-1 1-.55 0-1-.45-1-1V9.3c0-.44-.35-.8-.8-.8-.41 0-.75.31-.8.72v1.88c0 .55-.44 1-1 1-.55 0-1-.45-1-1V4.8c0-.44-.35-.8-.8-.8" clipRule="evenodd" />
    </IconBase>
  ))
);

CursorPointerBold.displayName = 'CursorPointerBold';

// Triple export pattern
export { CursorPointerBold, CursorPointerBold as CursorPointerBoldIcon, CursorPointerBold as SiCursorPointerBold };
export default CursorPointerBold;
export type { CursorPointerBoldProps };
