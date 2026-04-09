import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorFillProps = Omit<IconBaseProps, 'children'>;

const CursorFill = memo(
  forwardRef<SVGSVGElement, CursorFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-fill" {...props}>
      <path d="M3.22 5.62a1.9 1.9 0 0 1 2.4-2.4l13.96 4.66a1.9 1.9 0 0 1-.06 3.6l-6.2 1.83-1.83 6.2a1.9 1.9 0 0 1-3.61.07z" />
    </IconBase>
  ))
);

CursorFill.displayName = 'CursorFill';

// Triple export pattern (lucide-react style)
export { CursorFill, CursorFill as CursorFillIcon, CursorFill as SiCursorFill };
export default CursorFill;
export type { CursorFillProps };
