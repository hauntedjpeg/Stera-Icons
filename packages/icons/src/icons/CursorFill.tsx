import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorFillProps = Omit<IconBaseProps, 'children'>;

const CursorFill = memo(
  forwardRef<SVGSVGElement, CursorFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.22 5.62c-.49-1.48.92-2.89 2.4-2.4l13.96 4.66c1.76.58 1.71 3.08-.06 3.6l-6.2 1.83-1.83 6.2c-.53 1.78-3.03 1.83-3.61.07z" />
    </IconBase>
  ))
);

CursorFill.displayName = 'CursorFill';

// Triple export pattern
export { CursorFill, CursorFill as CursorFillIcon, CursorFill as SiCursorFill };
export default CursorFill;
export type { CursorFillProps };
