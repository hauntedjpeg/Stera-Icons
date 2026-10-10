import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleRightBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleRightBold = memo(
  forwardRef<SVGSVGElement, ArrowCircleRightBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.3 7.3c.38-.4 1.02-.4 1.4 0l4 4q.3.28.3.7t-.3.7l-4 4c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4l2.29-2.3H8c-.55 0-1-.45-1-1s.45-1 1-1h5.59l-2.3-2.3c-.39-.38-.39-1.02 0-1.4" />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleRightBold.displayName = 'ArrowCircleRightBold';

// Triple export pattern
export { ArrowCircleRightBold, ArrowCircleRightBold as ArrowCircleRightBoldIcon, ArrowCircleRightBold as SiArrowCircleRightBold };
export default ArrowCircleRightBold;
export type { ArrowCircleRightBoldProps };
