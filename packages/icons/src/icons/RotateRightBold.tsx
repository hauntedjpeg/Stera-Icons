import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateRightBoldProps = Omit<IconBaseProps, 'children'>;

const RotateRightBold = memo(
  forwardRef<SVGSVGElement, RotateRightBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.8 1.8c.38-.4 1.02-.4 1.4 0l3.5 3.5q.3.28.3.7t-.3.7l-3.5 3.5c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4L14.58 7H12c-3.59 0-6.5 2.91-6.5 6.5S8.41 20 12 20s6.5-2.91 6.5-6.5c0-.55.45-1 1-1s1 .45 1 1c0 4.7-3.8 8.5-8.5 8.5s-8.5-3.8-8.5-8.5S7.3 5 12 5h2.59l-1.8-1.8c-.39-.38-.39-1.02 0-1.4" />
    </IconBase>
  ))
);

RotateRightBold.displayName = 'RotateRightBold';

// Triple export pattern
export { RotateRightBold, RotateRightBold as RotateRightBoldIcon, RotateRightBold as SiRotateRightBold };
export default RotateRightBold;
export type { RotateRightBoldProps };
