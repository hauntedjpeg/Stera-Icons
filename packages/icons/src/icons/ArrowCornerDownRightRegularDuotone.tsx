import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCornerDownRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCornerDownRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCornerDownRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M4 5.25c.41 0 .75.34.75.75 0 1.92 0 2.7.2 3.31a4.3 4.3 0 0 0 2.74 2.73c.6.2 1.39.21 3.31.21h7.19l.75.75-.75.75H11c-1.8 0-2.88 0-3.78-.28a5.8 5.8 0 0 1-3.69-3.7C3.24 8.89 3.25 7.8 3.25 6c0-.41.34-.75.75-.75" opacity={.4} />
        <path d="M14.47 7.47c.3-.3.77-.3 1.06 0l5 5a.75.75 0 0 1 .1.95l-.1.11-5 5a.75.75 0 1 1-1.06-1.06L18.94 13l-4.47-4.47a.75.75 0 0 1 0-1.06" />
    </IconBase>
  ))
);

ArrowCornerDownRightRegularDuotone.displayName = 'ArrowCornerDownRightRegularDuotone';

// Triple export pattern (lucide-react style)
export { ArrowCornerDownRightRegularDuotone, ArrowCornerDownRightRegularDuotone as ArrowCornerDownRightRegularDuotoneIcon, ArrowCornerDownRightRegularDuotone as SiArrowCornerDownRightRegularDuotone };
export default ArrowCornerDownRightRegularDuotone;
export type { ArrowCornerDownRightRegularDuotoneProps };
