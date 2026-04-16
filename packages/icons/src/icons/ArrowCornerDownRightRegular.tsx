import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerDownRightRegularProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownRightRegular = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownRightRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4 5.25c.41 0 .75.34.75.75 0 1.92 0 2.7.2 3.31a4.3 4.3 0 0 0 2.74 2.73c.6.2 1.39.21 3.31.21h7.19l-3.72-3.72a.75.75 0 1 1 1.06-1.06l5 5a.75.75 0 0 1 .1.95l-.1.11-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H11c-1.8 0-2.88 0-3.78-.28a5.8 5.8 0 0 1-3.69-3.7C3.24 8.89 3.25 7.8 3.25 6c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

ArrowCornerDownRightRegular.displayName = 'ArrowCornerDownRightRegular';

// Triple export pattern (lucide-react style)
export { ArrowCornerDownRightRegular, ArrowCornerDownRightRegular as ArrowCornerDownRightRegularIcon, ArrowCornerDownRightRegular as SiArrowCornerDownRightRegular };
export default ArrowCornerDownRightRegular;
export type { ArrowCornerDownRightRegularProps };
