import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotateLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, RotateLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 5c4.7 0 8.5 3.8 8.5 8.5S16.7 22 12 22s-8.5-3.8-8.5-8.5c0-.55.45-1 1-1s1 .45 1 1c0 3.59 2.91 6.5 6.5 6.5s6.5-2.91 6.5-6.5S15.59 7 12 7H9.41l-1-1 1-1z" opacity={.4} />
        <path d="M9.8 1.8c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L8.42 6l2.8 2.8c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0L6.3 6.7Q6.01 6.43 6 6t.3-.7z" />
    </IconBase>
  ))
);

RotateLeftBoldDuotone.displayName = 'RotateLeftBoldDuotone';

// Triple export pattern
export { RotateLeftBoldDuotone, RotateLeftBoldDuotone as RotateLeftBoldDuotoneIcon, RotateLeftBoldDuotone as SiRotateLeftBoldDuotone };
export default RotateLeftBoldDuotone;
export type { RotateLeftBoldDuotoneProps };
