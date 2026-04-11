import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorNavigationFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorNavigationFillDuotone = memo(
  forwardRef<SVGSVGElement, CursorNavigationFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.66 4.88a.38.38 0 0 1 .67 0l7.1 14.2c.17.32-.19.67-.51.5l-6.5-3.55a.9.9 0 0 0-.74-.05l-.1.05-6.5 3.54a.38.38 0 0 1-.51-.5z" opacity={.4} />
        <path fillRule="evenodd" d="M10.1 4.1a2.12 2.12 0 0 1 3.8 0L21 18.3a2.12 2.12 0 0 1-2.92 2.81L12 17.79l-6.08 3.32A2.12 2.12 0 0 1 3 18.29zm2.24.78a.38.38 0 0 0-.68 0l-7.1 14.2c-.16.32.2.67.52.5l6.5-3.55.1-.05q.38-.15.74.05l6.5 3.54c.32.18.68-.17.51-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

CursorNavigationFillDuotone.displayName = 'CursorNavigationFillDuotone';

// Triple export pattern (lucide-react style)
export { CursorNavigationFillDuotone, CursorNavigationFillDuotone as CursorNavigationFillDuotoneIcon, CursorNavigationFillDuotone as SiCursorNavigationFillDuotone };
export default CursorNavigationFillDuotone;
export type { CursorNavigationFillDuotoneProps };
