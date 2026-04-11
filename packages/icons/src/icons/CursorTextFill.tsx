import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorTextFillProps = Omit<IconBaseProps, 'children'>;

const CursorTextFill = memo(
  forwardRef<SVGSVGElement, CursorTextFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9 2.25c1.17 0 2.23.47 3 1.24a4.2 4.2 0 0 1 3-1.24h1a1.25 1.25 0 1 1 0 2.5h-1c-.97 0-1.75.78-1.75 1.75v11c0 .97.78 1.75 1.75 1.75h1a1.25 1.25 0 1 1 0 2.5h-1a4.2 4.2 0 0 1-3-1.24 4.2 4.2 0 0 1-3 1.24H8a1.25 1.25 0 1 1 0-2.5h1c.97 0 1.75-.78 1.75-1.75v-11c0-.97-.78-1.75-1.75-1.75H8a1.25 1.25 0 1 1 0-2.5z" />
    </IconBase>
  ))
);

CursorTextFill.displayName = 'CursorTextFill';

// Triple export pattern (lucide-react style)
export { CursorTextFill, CursorTextFill as CursorTextFillIcon, CursorTextFill as SiCursorTextFill };
export default CursorTextFill;
export type { CursorTextFillProps };
