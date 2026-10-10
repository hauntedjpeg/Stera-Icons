import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotateRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, RotateRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="m14.59 5 1 1-1 1H12c-3.59 0-6.5 2.91-6.5 6.5S8.41 20 12 20s6.5-2.91 6.5-6.5c0-.55.45-1 1-1s1 .45 1 1c0 4.7-3.8 8.5-8.5 8.5s-8.5-3.8-8.5-8.5S7.3 5 12 5z" opacity={.4} />
        <path d="M12.8 1.8c.38-.4 1.02-.4 1.4 0l3.5 3.5q.3.28.3.7t-.3.7l-3.5 3.5c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4L15.58 6l-2.8-2.8c-.39-.38-.39-1.02 0-1.4" />
    </IconBase>
  ))
);

RotateRightBoldDuotone.displayName = 'RotateRightBoldDuotone';

// Triple export pattern
export { RotateRightBoldDuotone, RotateRightBoldDuotone as RotateRightBoldDuotoneIcon, RotateRightBoldDuotone as SiRotateRightBoldDuotone };
export default RotateRightBoldDuotone;
export type { RotateRightBoldDuotoneProps };
