import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorNavigationFillProps = Omit<IconBaseProps, 'children'>;

const CursorNavigationFill = memo(
  forwardRef<SVGSVGElement, CursorNavigationFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.1 4.1a2.12 2.12 0 0 1 3.8 0L21 18.3a2.12 2.12 0 0 1-2.92 2.81L12 17.79l-6.08 3.32A2.12 2.12 0 0 1 3 18.29z" />
    </IconBase>
  ))
);

CursorNavigationFill.displayName = 'CursorNavigationFill';

// Triple export pattern (lucide-react style)
export { CursorNavigationFill, CursorNavigationFill as CursorNavigationFillIcon, CursorNavigationFill as SiCursorNavigationFill };
export default CursorNavigationFill;
export type { CursorNavigationFillProps };
