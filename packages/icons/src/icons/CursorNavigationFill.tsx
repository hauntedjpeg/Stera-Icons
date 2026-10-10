import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorNavigationFillProps = Omit<IconBaseProps, 'children'>;

const CursorNavigationFill = memo(
  forwardRef<SVGSVGElement, CursorNavigationFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.1 4.1c.78-1.57 3.02-1.57 3.8 0L21 18.3c.93 1.86-1.1 3.8-2.92 2.81L12 17.79l-6.08 3.32c-1.83 1-3.85-.95-2.92-2.82z" />
    </IconBase>
  ))
);

CursorNavigationFill.displayName = 'CursorNavigationFill';

// Triple export pattern
export { CursorNavigationFill, CursorNavigationFill as CursorNavigationFillIcon, CursorNavigationFill as SiCursorNavigationFill };
export default CursorNavigationFill;
export type { CursorNavigationFillProps };
