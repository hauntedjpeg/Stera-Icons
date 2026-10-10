import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" opacity={.4} />
        <path d="M11.3 7.3c.38-.4 1.02-.4 1.4 0l4 4q.3.29.3.7 0 .42-.3.7l-4 4c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4l2.29-2.3H8c-.55 0-1-.45-1-1s.45-1 1-1h5.59l-2.3-2.3c-.39-.38-.39-1.02 0-1.4" />
    </IconBase>
  ))
);

ArrowCircleRightBoldDuotone.displayName = 'ArrowCircleRightBoldDuotone';

// Triple export pattern
export { ArrowCircleRightBoldDuotone, ArrowCircleRightBoldDuotone as ArrowCircleRightBoldDuotoneIcon, ArrowCircleRightBoldDuotone as SiArrowCircleRightBoldDuotone };
export default ArrowCircleRightBoldDuotone;
export type { ArrowCircleRightBoldDuotoneProps };
