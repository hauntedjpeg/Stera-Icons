import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerUpRightRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerUpRightRegular = memo(
  forwardRef<SVGSVGElement, ArrowCornerUpRightRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.47 5.47c.3-.3.77-.3 1.06 0l5 5 .1.11a.75.75 0 0 1-.1.95l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H11c-1.92 0-2.7 0-3.31.2a4.3 4.3 0 0 0-2.73 2.74c-.2.6-.21 1.4-.21 3.31a.75.75 0 0 1-1.5 0c0-1.8 0-2.88.28-3.78a5.8 5.8 0 0 1 3.7-3.69c.89-.29 1.97-.28 3.77-.28h7.19l-3.72-3.72a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

ArrowCornerUpRightRegular.displayName = 'ArrowCornerUpRightRegular';

// Triple export pattern (lucide-react style)
export { ArrowCornerUpRightRegular, ArrowCornerUpRightRegular as ArrowCornerUpRightRegularIcon, ArrowCornerUpRightRegular as SiArrowCornerUpRightRegular };
export default ArrowCornerUpRightRegular;
export type { ArrowCornerUpRightRegularProps };
