import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorTextCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CursorTextCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, CursorTextCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" opacity={.4} />
        <path d="M10 6.5c.77 0 1.47.3 2 .77a3 3 0 0 1 2-.77h.5a1 1 0 1 1 0 2H14a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h.5a1 1 0 1 1 0 2H14c-.77 0-1.47-.3-2-.77-.53.48-1.23.77-2 .77h-.5a1 1 0 1 1 0-2h.5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-.5a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

CursorTextCircleBoldDuotone.displayName = 'CursorTextCircleBoldDuotone';

// Triple export pattern (lucide-react style)
export { CursorTextCircleBoldDuotone, CursorTextCircleBoldDuotone as CursorTextCircleBoldDuotoneIcon, CursorTextCircleBoldDuotone as SiCursorTextCircleBoldDuotone };
export default CursorTextCircleBoldDuotone;
export type { CursorTextCircleBoldDuotoneProps };
