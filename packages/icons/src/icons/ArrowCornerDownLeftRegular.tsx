import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerDownLeftRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownLeftRegular = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M20 5.25c.41 0 .75.34.75.75 0 1.8 0 2.88-.28 3.78-.57 1.75-1.94 3.12-3.7 3.69-.89.29-1.97.28-3.77.28H5.81l3.72 3.72c.3.3.3.77 0 1.06s-.77.3-1.06 0l-5-5-.1-.11q-.12-.2-.12-.42 0-.31.22-.53l5-5c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-3.72 3.72H13c1.92 0 2.7 0 3.31-.2 1.3-.43 2.31-1.44 2.73-2.74.2-.6.21-1.39.21-3.31 0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

ArrowCornerDownLeftRegular.displayName = 'ArrowCornerDownLeftRegular';

// Triple export pattern
export { ArrowCornerDownLeftRegular, ArrowCornerDownLeftRegular as ArrowCornerDownLeftRegularIcon, ArrowCornerDownLeftRegular as SiArrowCornerDownLeftRegular };
export default ArrowCornerDownLeftRegular;
export type { ArrowCornerDownLeftRegularProps };
