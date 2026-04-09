import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorTextCircleBoldProps = Omit<IconBaseProps, 'children'>;

const CursorTextCircleBold = memo(
  forwardRef<SVGSVGElement, CursorTextCircleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-text-circle-bold" {...props}>
      <path d="M10 6.5c.77 0 1.47.3 2 .77a3 3 0 0 1 2-.77h.5a1 1 0 1 1 0 2H14a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h.5a1 1 0 1 1 0 2H14c-.77 0-1.47-.3-2-.77-.53.48-1.23.77-2 .77h-.5a1 1 0 1 1 0-2h.5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-.5a1 1 0 0 1 0-2z" />
        <path fillRule="evenodd" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20m0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" clipRule="evenodd" />
    </IconBase>
  ))
);

CursorTextCircleBold.displayName = 'CursorTextCircleBold';

// Triple export pattern (lucide-react style)
export { CursorTextCircleBold, CursorTextCircleBold as CursorTextCircleBoldIcon, CursorTextCircleBold as SiCursorTextCircleBold };
export default CursorTextCircleBold;
export type { CursorTextCircleBoldProps };
