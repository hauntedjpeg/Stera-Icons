import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotateLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, RotateLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 5.25c4.56 0 8.25 3.7 8.25 8.25s-3.7 8.25-8.25 8.25-8.25-3.7-8.25-8.25c0-.41.34-.75.75-.75s.75.34.75.75c0 3.73 3.02 6.75 6.75 6.75s6.75-3.02 6.75-6.75S15.73 6.75 12 6.75H8.81L8.06 6l.75-.75z" opacity={.4} />
        <path d="M9.97 1.97c.3-.3.77-.3 1.06 0s.3.77 0 1.06L8.06 6l2.97 2.97c.3.3.3.77 0 1.06s-.77.3-1.06 0l-3.5-3.5q-.21-.22-.22-.53 0-.31.22-.53z" />
    </IconBase>
  ))
);

RotateLeftRegularDuotone.displayName = 'RotateLeftRegularDuotone';

// Triple export pattern
export { RotateLeftRegularDuotone, RotateLeftRegularDuotone as RotateLeftRegularDuotoneIcon, RotateLeftRegularDuotone as SiRotateLeftRegularDuotone };
export default RotateLeftRegularDuotone;
export type { RotateLeftRegularDuotoneProps };
