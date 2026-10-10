import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronCircleUpBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleUpBold = memo(
  forwardRef<SVGSVGElement, ChevronCircleUpBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 8.5q.42 0 .7.3l4 4c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0L12 10.92l-3.3 3.3c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42l4-4q.28-.28.7-.29" />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronCircleUpBold.displayName = 'ChevronCircleUpBold';

// Triple export pattern
export { ChevronCircleUpBold, ChevronCircleUpBold as ChevronCircleUpBoldIcon, ChevronCircleUpBold as SiChevronCircleUpBold };
export default ChevronCircleUpBold;
export type { ChevronCircleUpBoldProps };
