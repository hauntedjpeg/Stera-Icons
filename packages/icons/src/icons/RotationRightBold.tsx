import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotationRightBoldProps = Omit<IconBaseProps, 'children'>;

const RotationRightBold = memo(
  forwardRef<SVGSVGElement, RotationRightBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.18 6.92a1 1 0 0 0-1.55 1.27A6 6 0 0 1 12 18h-.59l1.3-1.3a1 1 0 0 0-1.42-1.4l-3 3a1 1 0 0 0 0 1.4l3 3a1 1 0 0 0 1.42-1.4L11.4 20h.87a8 8 0 0 0 5.9-13.08M12.7 1.3a1 1 0 0 0-1.4 1.4L12.58 4h-.88a8 8 0 0 0-5.87 13.1 1 1 0 0 0 1.54-1.28A6 6 0 0 1 11.78 6h.8099999999999999l-1.3 1.3a1 1 0 1 0 1.42 1.4l3-3a1 1 0 0 0 0-1.4z" />
    </IconBase>
  ))
);

RotationRightBold.displayName = 'RotationRightBold';

// Triple export pattern (lucide-react style)
export { RotationRightBold, RotationRightBold as RotationRightBoldIcon, RotationRightBold as SiRotationRightBold };
export default RotationRightBold;
export type { RotationRightBoldProps };
