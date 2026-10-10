import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoveFillProps = Omit<IconBaseProps, 'children'>;

const MoveFill = memo(
  forwardRef<SVGSVGElement, MoveFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m12 2.13.17.01.21.07q.14.06.24.17l2.5 2.5c.25.25.32.63.19.95-.14.33-.46.54-.81.54h-1.62v4.76h4.74V9.5c0-.35.22-.67.54-.8.33-.14.7-.07.96.18l2.5 2.5.14.18v.01l.06.12v.02l.04.13v.03l.02.13-.02.17-.07.21q-.07.14-.17.24l-2.5 2.5c-.25.25-.63.32-.96.19-.32-.14-.54-.46-.54-.81v-1.62h-4.75v4.74h1.63c.35 0 .67.22.8.54.14.33.07.7-.18.96l-2.5 2.5q-.1.1-.24.17l-.2.07-.18.02-.13-.02h-.03l-.13-.03-.02-.01-.12-.06-.12-.08-.07-.06-2.5-2.5c-.25-.25-.32-.63-.19-.96.14-.32.46-.54.81-.54h1.63v-4.75H6.37v1.63c0 .35-.2.67-.54.8-.32.14-.7.07-.95-.18l-2.5-2.5q-.1-.1-.17-.24l-.07-.2-.02-.18q0-.07.02-.13v-.03l.03-.13.01-.02.06-.12q.06-.11.14-.19l2.5-2.5c.25-.25.63-.32.95-.19.33.14.54.46.54.81v1.63h4.76V6.37H9.5c-.35 0-.67-.2-.8-.54-.14-.32-.07-.7.18-.95l2.5-2.5.07-.06.11-.08h.01l.12-.06h.02l.13-.04h.03z" />
    </IconBase>
  ))
);

MoveFill.displayName = 'MoveFill';

// Triple export pattern
export { MoveFill, MoveFill as MoveFillIcon, MoveFill as SiMoveFill };
export default MoveFill;
export type { MoveFillProps };
