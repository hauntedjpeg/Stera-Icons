import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorTextAltFillProps = Omit<IconBaseProps, 'children'>;

const CursorTextAltFill = memo(
  forwardRef<SVGSVGElement, CursorTextAltFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9 2.25c1.17 0 2.23.47 3 1.24.77-.77 1.83-1.24 3-1.24h1c.69 0 1.25.56 1.25 1.25S16.69 4.75 16 4.75h-1c-.97 0-1.75.78-1.75 1.75v4.25h1.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25h-1.25v4.25c0 .97.78 1.75 1.75 1.75h1c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25h-1c-1.17 0-2.23-.47-3-1.24-.77.77-1.83 1.24-3 1.24H8c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25h1c.97 0 1.75-.78 1.75-1.75v-4.25H9.5c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25h1.25V6.5c0-.97-.78-1.75-1.75-1.75H8c-.69 0-1.25-.56-1.25-1.25S7.31 2.25 8 2.25z" />
    </IconBase>
  ))
);

CursorTextAltFill.displayName = 'CursorTextAltFill';

// Triple export pattern
export { CursorTextAltFill, CursorTextAltFill as CursorTextAltFillIcon, CursorTextAltFill as SiCursorTextAltFill };
export default CursorTextAltFill;
export type { CursorTextAltFillProps };
