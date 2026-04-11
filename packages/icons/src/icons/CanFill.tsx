import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CanFillProps = Omit<IconBaseProps, 'children'>;

const CanFill = memo(
  forwardRef<SVGSVGElement, CanFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.5 2.13a.88.88 0 0 1 0 1.74l.86 1.5q.52.9.52 1.93v9.4q0 1.03-.52 1.93l-1.31 2.3c-.34.58-.96.94-1.63.95H8.58c-.67 0-1.3-.37-1.63-.95l-1.31-2.3a4 4 0 0 1-.51-1.93V7.3q0-1.03.5-1.93l.86-1.5a.87.87 0 0 1 .01-1.74z" />
    </IconBase>
  ))
);

CanFill.displayName = 'CanFill';

// Triple export pattern (lucide-react style)
export { CanFill, CanFill as CanFillIcon, CanFill as SiCanFill };
export default CanFill;
export type { CanFillProps };
