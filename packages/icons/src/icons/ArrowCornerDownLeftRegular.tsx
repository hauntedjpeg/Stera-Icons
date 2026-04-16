import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerDownLeftRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownLeftRegular = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 5.25c.41 0 .75.34.75.75 0 1.8 0 2.88-.28 3.78a5.8 5.8 0 0 1-3.7 3.69c-.89.29-1.97.28-3.77.28H5.81l3.72 3.72a.75.75 0 1 1-1.06 1.06l-5-5-.1-.11a.75.75 0 0 1 .1-.95l5-5a.75.75 0 1 1 1.06 1.06l-3.72 3.72H13c1.92 0 2.7 0 3.31-.2a4.3 4.3 0 0 0 2.73-2.74c.2-.6.21-1.39.21-3.31 0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

ArrowCornerDownLeftRegular.displayName = 'ArrowCornerDownLeftRegular';

// Triple export pattern (lucide-react style)
export { ArrowCornerDownLeftRegular, ArrowCornerDownLeftRegular as ArrowCornerDownLeftRegularIcon, ArrowCornerDownLeftRegular as SiArrowCornerDownLeftRegular };
export default ArrowCornerDownLeftRegular;
export type { ArrowCornerDownLeftRegularProps };
