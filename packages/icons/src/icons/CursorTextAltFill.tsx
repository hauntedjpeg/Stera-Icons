import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorTextAltFillProps = Omit<IconBaseProps, 'children'>;

const CursorTextAltFill = memo(
  forwardRef<SVGSVGElement, CursorTextAltFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-text-alt-fill" {...props}>
      <path d="M9 2.25c1.17 0 2.23.47 3 1.24a4.2 4.2 0 0 1 3-1.24h1a1.25 1.25 0 1 1 0 2.5h-1c-.97 0-1.75.78-1.75 1.75v4.25h1.25a1.25 1.25 0 1 1 0 2.5h-1.25v4.25c0 .97.78 1.75 1.75 1.75h1a1.25 1.25 0 1 1 0 2.5h-1a4.2 4.2 0 0 1-3-1.24 4.2 4.2 0 0 1-3 1.24H8a1.25 1.25 0 1 1 0-2.5h1c.97 0 1.75-.78 1.75-1.75v-4.25H9.5a1.25 1.25 0 1 1 0-2.5h1.25V6.5c0-.97-.78-1.75-1.75-1.75H8a1.25 1.25 0 1 1 0-2.5z" />
    </IconBase>
  ))
);

CursorTextAltFill.displayName = 'CursorTextAltFill';

// Triple export pattern (lucide-react style)
export { CursorTextAltFill, CursorTextAltFill as CursorTextAltFillIcon, CursorTextAltFill as SiCursorTextAltFill };
export default CursorTextAltFill;
export type { CursorTextAltFillProps };
