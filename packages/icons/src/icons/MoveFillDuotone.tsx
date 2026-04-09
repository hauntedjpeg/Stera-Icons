import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoveFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoveFillDuotone = memo(
  forwardRef<SVGSVGElement, MoveFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="move-fill-duotone" {...props}>
      <path d="M12.88 11.13h4.74v1.74h-4.75v4.76h-1.74v-4.75H6.37v-1.76h4.76V6.39h1.74z" opacity={.4} />
        <path d="M14.5 17.63a.88.88 0 0 1 .62 1.49l-2.5 2.5a.9.9 0 0 1-1.17.06l-.07-.06-2.5-2.5a.88.88 0 0 1 .62-1.5zM4.88 8.88a.88.88 0 0 1 1.5.62v5a.88.88 0 0 1-1.5.62l-2.5-2.5a.9.9 0 0 1-.06-1.17l.06-.07zM18.17 8.7c.32-.14.7-.07.95.18l2.5 2.5.06.07a.9.9 0 0 1-.06 1.17l-2.5 2.5a.88.88 0 0 1-1.5-.62v-5c0-.35.22-.67.54-.8M12 2.13q.36 0 .62.25l2.5 2.5a.88.88 0 0 1-.62 1.5h-5a.88.88 0 0 1-.62-1.5l2.5-2.5.07-.06q.24-.19.55-.2" />
    </IconBase>
  ))
);

MoveFillDuotone.displayName = 'MoveFillDuotone';

// Triple export pattern (lucide-react style)
export { MoveFillDuotone, MoveFillDuotone as MoveFillDuotoneIcon, MoveFillDuotone as SiMoveFillDuotone };
export default MoveFillDuotone;
export type { MoveFillDuotoneProps };
