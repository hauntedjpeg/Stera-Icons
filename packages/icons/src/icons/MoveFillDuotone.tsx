import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoveFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoveFillDuotone = memo(
  forwardRef<SVGSVGElement, MoveFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.88 11.13h4.74v1.74h-4.75v4.76h-1.74v-4.75H6.37v-1.76h4.76V6.39h1.74z" opacity={.4} />
        <path d="M14.5 17.63c.35 0 .67.2.8.54.14.32.07.7-.18.95l-2.5 2.5q-.26.24-.62.25-.31 0-.55-.2l-.07-.05-2.5-2.5c-.25-.25-.32-.63-.19-.96.14-.32.46-.54.81-.54zM4.88 8.88c.25-.25.63-.32.95-.19.33.14.54.46.54.81v5c0 .35-.2.67-.54.8-.32.14-.7.07-.95-.18l-2.5-2.5q-.25-.26-.25-.62 0-.31.2-.55l.05-.07zM18.17 8.7c.32-.14.7-.07.95.18l2.5 2.5.06.07q.19.24.2.55-.01.36-.26.62l-2.5 2.5c-.25.25-.63.32-.96.19-.32-.14-.54-.46-.54-.81v-5c0-.35.22-.67.54-.8M12 2.13q.36 0 .62.25l2.5 2.5c.25.25.32.63.19.95-.14.33-.46.54-.81.54h-5c-.35 0-.67-.2-.8-.54-.14-.32-.07-.7.18-.95l2.5-2.5.07-.06q.24-.19.55-.2" />
    </IconBase>
  ))
);

MoveFillDuotone.displayName = 'MoveFillDuotone';

// Triple export pattern
export { MoveFillDuotone, MoveFillDuotone as MoveFillDuotoneIcon, MoveFillDuotone as SiMoveFillDuotone };
export default MoveFillDuotone;
export type { MoveFillDuotoneProps };
