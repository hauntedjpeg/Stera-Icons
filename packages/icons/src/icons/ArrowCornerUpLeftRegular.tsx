import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerUpLeftRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpLeftRegular = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpLeftRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.47 5.47a.75.75 0 1 1 1.06 1.06l-3.72 3.72H13c1.8 0 2.88 0 3.78.28a5.8 5.8 0 0 1 3.69 3.7c.29.89.28 1.97.28 3.77a.75.75 0 0 1-1.5 0c0-1.92 0-2.7-.2-3.31a4.3 4.3 0 0 0-2.74-2.73c-.6-.2-1.39-.21-3.31-.21H5.81l3.72 3.72a.75.75 0 1 1-1.06 1.06l-5-5a.75.75 0 0 1-.1-.95l.1-.11z" />
    </IconBase>
  ))
);

ArrowCornerUpLeftRegular.displayName = 'ArrowCornerUpLeftRegular';

// Triple export pattern (lucide-react style)
export { ArrowCornerUpLeftRegular, ArrowCornerUpLeftRegular as ArrowCornerUpLeftRegularIcon, ArrowCornerUpLeftRegular as SiArrowCornerUpLeftRegular };
export default ArrowCornerUpLeftRegular;
export type { ArrowCornerUpLeftRegularProps };
