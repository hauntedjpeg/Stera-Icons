import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleUpLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleUpLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, ArrowCircleUpLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M5.1 5.1c3.81-3.8 9.99-3.8 13.8 0 3.8 3.81 3.8 9.99 0 13.8-3.81 3.8-9.99 3.8-13.8 0-3.8-3.81-3.8-9.99 0-13.8m12.73 1.07c-3.22-3.23-8.44-3.23-11.66 0s-3.23 8.44 0 11.66 8.44 3.23 11.66 0 3.23-8.44 0-11.66" clipRule="evenodd" opacity={.4} />
        <path d="M14.83 8.42c.41 0 .75.34.75.75 0 .42-.34.75-.75.75h-3.85l4.38 4.38c.3.3.3.77 0 1.06s-.77.3-1.06 0l-4.38-4.38v3.85c0 .41-.33.75-.75.75-.41 0-.75-.34-.75-.75V9.17q0-.31.22-.53.22-.21.53-.22z" />
    </IconBase>
  ))
);

ArrowCircleUpLeftRegularDuotone.displayName = 'ArrowCircleUpLeftRegularDuotone';

// Triple export pattern
export { ArrowCircleUpLeftRegularDuotone, ArrowCircleUpLeftRegularDuotone as ArrowCircleUpLeftRegularDuotoneIcon, ArrowCircleUpLeftRegularDuotone as SiArrowCircleUpLeftRegularDuotone };
export default ArrowCircleUpLeftRegularDuotone;
export type { ArrowCircleUpLeftRegularDuotoneProps };
