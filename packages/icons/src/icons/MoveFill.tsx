import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoveFillProps = Omit<IconBaseProps, 'children'>;

const MoveFill = memo(
  forwardRef<SVGSVGElement, MoveFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.13a1 1 0 0 1 .62.25l2.5 2.5a.88.88 0 0 1-.62 1.5h-1.62v4.75h4.74V9.5a.88.88 0 0 1 1.5-.62l2.5 2.5.14.18v.01l.06.12v.02l.04.13v.03a1 1 0 0 1 0 .3 1 1 0 0 1-.24.45l-2.5 2.5a.88.88 0 0 1-1.5-.62v-1.62h-4.75v4.74h1.63a.88.88 0 0 1 .62 1.5l-2.5 2.5a.9.9 0 0 1-.75.24h-.03l-.13-.03-.02-.01-.12-.06-.12-.08-.07-.06-2.5-2.5a.88.88 0 0 1 .62-1.5h1.63v-4.75H6.37v1.63a.88.88 0 0 1-1.49.62l-2.5-2.5a.9.9 0 0 1-.24-.75v-.03l.03-.13.01-.02.06-.12.14-.19 2.5-2.5a.88.88 0 0 1 1.5.62v1.63h4.75V6.37H9.5a.88.88 0 0 1-.62-1.49l2.5-2.5.07-.06.11-.08h.01l.12-.06h.02l.13-.04h.03z" />
    </IconBase>
  ))
);

MoveFill.displayName = 'MoveFill';

// Triple export pattern (lucide-react style)
export { MoveFill, MoveFill as MoveFillIcon, MoveFill as SiMoveFill };
export default MoveFill;
export type { MoveFillProps };
