import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorNavigationFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorNavigationFillDuotone = memo(
  forwardRef<SVGSVGElement, CursorNavigationFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.66 4.88c.14-.28.54-.28.67 0l7.1 14.2c.17.32-.19.67-.51.5l-6.5-3.55q-.36-.19-.74-.05l-.1.05-6.5 3.54c-.32.18-.68-.17-.51-.5z" opacity={.4} />
        <path fillRule="evenodd" d="M10.1 4.1c.78-1.57 3.02-1.57 3.8 0L21 18.3c.93 1.86-1.1 3.8-2.92 2.81L12 17.79l-6.08 3.32c-1.83 1-3.85-.95-2.92-2.82zm2.24.78c-.14-.28-.54-.28-.68 0l-7.1 14.2c-.16.32.2.67.52.5l6.5-3.55.1-.05q.38-.15.74.05l6.5 3.54c.32.18.68-.17.51-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

CursorNavigationFillDuotone.displayName = 'CursorNavigationFillDuotone';

// Triple export pattern
export { CursorNavigationFillDuotone, CursorNavigationFillDuotone as CursorNavigationFillDuotoneIcon, CursorNavigationFillDuotone as SiCursorNavigationFillDuotone };
export default CursorNavigationFillDuotone;
export type { CursorNavigationFillDuotoneProps };
