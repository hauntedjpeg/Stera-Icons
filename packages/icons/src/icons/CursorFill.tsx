import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorFillProps = Omit<IconBaseProps, 'children'>;

const CursorFill = memo(
  forwardRef<SVGSVGElement, CursorFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4.34 6.58c-.46-1.38.86-2.7 2.24-2.24L20.54 9c1.64.54 1.6 2.88-.06 3.37l-6.27 1.84-1.84 6.27c-.5 1.66-2.83 1.7-3.37.06z" />
    </IconBase>
  ))
);

CursorFill.displayName = 'CursorFill';

// Triple export pattern
export { CursorFill, CursorFill as CursorFillIcon, CursorFill as SiCursorFill };
export default CursorFill;
export type { CursorFillProps };
