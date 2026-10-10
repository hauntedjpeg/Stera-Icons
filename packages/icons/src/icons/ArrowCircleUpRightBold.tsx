import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleUpRightBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleUpRightBold = memo(
  forwardRef<SVGSVGElement, ArrowCircleUpRightBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.83 8.17c.26 0 .52.1.7.3q.3.29.3.7v5.66c0 .55-.45 1-1 1s-1-.45-1-1v-3.24l-3.95 3.95c-.4.39-1.03.39-1.42 0-.39-.4-.39-1.03 0-1.42l3.95-3.95H9.17c-.55 0-1-.45-1-1s.45-1 1-1z" />
        <path fillRule="evenodd" d="M4.93 4.93c3.9-3.9 10.24-3.9 14.14 0s3.9 10.24 0 14.14-10.24 3.9-14.14 0-3.9-10.24 0-14.14m12.73 1.41c-3.13-3.12-8.2-3.12-11.32 0s-3.12 8.2 0 11.32 8.2 3.12 11.32 0 3.12-8.2 0-11.32" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleUpRightBold.displayName = 'ArrowCircleUpRightBold';

// Triple export pattern
export { ArrowCircleUpRightBold, ArrowCircleUpRightBold as ArrowCircleUpRightBoldIcon, ArrowCircleUpRightBold as SiArrowCircleUpRightBold };
export default ArrowCircleUpRightBold;
export type { ArrowCircleUpRightBoldProps };
