import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowCircleUpBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowCircleUpBold = memo(
  forwardRef<SVGSVGElement, ArrowCircleUpBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 7q.42 0 .7.3l4 4c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0L13 10.43V16c0 .55-.45 1-1 1s-1-.45-1-1v-5.59l-2.3 2.3c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42l4-4q.28-.28.7-.29" />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowCircleUpBold.displayName = 'ArrowCircleUpBold';

// Triple export pattern
export { ArrowCircleUpBold, ArrowCircleUpBold as ArrowCircleUpBoldIcon, ArrowCircleUpBold as SiArrowCircleUpBold };
export default ArrowCircleUpBold;
export type { ArrowCircleUpBoldProps };
