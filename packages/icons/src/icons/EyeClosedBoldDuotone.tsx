import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EyeClosedBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const EyeClosedBoldDuotone = memo(
  forwardRef<SVGSVGElement, EyeClosedBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.19 14.56q.93.33 1.94.49l-.65 2.23c-.15.53-.7.83-1.24.68-.53-.15-.83-.7-.68-1.24zM16.44 16.72c.15.53-.15 1.09-.69 1.24s-1.08-.15-1.23-.68l-.65-2.23q1-.16 1.94-.49zM3.53 11.46q.66.75 1.46 1.37l-1.81 1.68c-.4.38-1.04.35-1.41-.05-.38-.4-.35-1.04.05-1.42zM22.18 13.04c.4.38.43 1.01.05 1.42-.37.4-1 .43-1.41.05l-1.81-1.68q.8-.62 1.46-1.37z" opacity={0.4} />
        <path d="M20.07 8.54c.26-.5.86-.68 1.35-.43s.68.86.42 1.35c-1.8 3.42-5.54 5.74-9.84 5.74s-8.05-2.32-9.84-5.74c-.26-.49-.07-1.09.42-1.35.49-.25 1.1-.06 1.35.43C5.36 11.27 8.42 13.2 12 13.2s6.64-1.93 8.07-4.66" />
    </IconBase>
  ))
);

EyeClosedBoldDuotone.displayName = 'EyeClosedBoldDuotone';

// Triple export pattern
export { EyeClosedBoldDuotone, EyeClosedBoldDuotone as EyeClosedBoldDuotoneIcon, EyeClosedBoldDuotone as SiEyeClosedBoldDuotone };
export default EyeClosedBoldDuotone;
export type { EyeClosedBoldDuotoneProps };
