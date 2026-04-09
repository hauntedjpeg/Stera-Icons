import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateRightFillProps = Omit<IconBaseProps, 'children'>;

const RotateRightFill = memo(
  forwardRef<SVGSVGElement, RotateRightFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="rotate-right-fill" {...props}>
      <path d="M13.17 1.7c.32-.14.7-.07.95.18l3.5 3.5a.9.9 0 0 1 0 1.24l-3.5 3.5a.88.88 0 0 1-1.5-.62V6.87H12a6.63 6.63 0 1 0 6.63 6.63.88.88 0 0 1 1.75 0A8.37 8.37 0 1 1 12 5.12h.63V2.5c0-.35.2-.67.53-.8" />
    </IconBase>
  ))
);

RotateRightFill.displayName = 'RotateRightFill';

// Triple export pattern (lucide-react style)
export { RotateRightFill, RotateRightFill as RotateRightFillIcon, RotateRightFill as SiRotateRightFill };
export default RotateRightFill;
export type { RotateRightFillProps };
