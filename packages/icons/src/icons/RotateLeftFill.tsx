import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateLeftFillProps = Omit<IconBaseProps, 'children'>;

const RotateLeftFill = memo(
  forwardRef<SVGSVGElement, RotateLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.88 1.88a.88.88 0 0 1 1.5.62v2.62H12a8.38 8.38 0 1 1-8.37 8.38.88.88 0 0 1 1.75 0A6.62 6.62 0 1 0 12 6.87h-.62V9.5a.88.88 0 0 1-1.5.62l-3.5-3.5a.9.9 0 0 1 0-1.24z" />
    </IconBase>
  ))
);

RotateLeftFill.displayName = 'RotateLeftFill';

// Triple export pattern (lucide-react style)
export { RotateLeftFill, RotateLeftFill as RotateLeftFillIcon, RotateLeftFill as SiRotateLeftFill };
export default RotateLeftFill;
export type { RotateLeftFillProps };
