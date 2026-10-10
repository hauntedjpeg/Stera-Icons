import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EyeClosedBoldProps = Omit<IconBaseProps, 'children'>;

const EyeClosedBold = memo(
  forwardRef<SVGSVGElement, EyeClosedBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20.07 8.54c.26-.5.86-.68 1.35-.43s.68.86.42 1.35q-.57 1.08-1.37 2l1.71 1.58c.4.38.43 1.01.05 1.42-.37.4-1 .43-1.4.05L19 12.83q-1.44 1.11-3.2 1.73l.63 2.16c.15.53-.15 1.09-.68 1.24-.54.15-1.09-.15-1.24-.68l-.65-2.23q-.9.15-1.87.15-.96 0-1.87-.15l-.65 2.23c-.15.53-.7.83-1.23.68s-.84-.7-.69-1.24l.63-2.16q-1.76-.62-3.2-1.73l-1.81 1.68c-.4.38-1.04.35-1.41-.05-.38-.4-.35-1.04.05-1.42l1.71-1.58q-.8-.92-1.37-2c-.26-.49-.07-1.09.42-1.35.49-.25 1.1-.06 1.35.43 1.1 2.11 3.19 3.74 5.73 4.37l.04.01h.01q1.1.27 2.29.28 1.2 0 2.29-.28h.05c2.54-.64 4.62-2.27 5.73-4.38" />
    </IconBase>
  ))
);

EyeClosedBold.displayName = 'EyeClosedBold';

// Triple export pattern
export { EyeClosedBold, EyeClosedBold as EyeClosedBoldIcon, EyeClosedBold as SiEyeClosedBold };
export default EyeClosedBold;
export type { EyeClosedBoldProps };
