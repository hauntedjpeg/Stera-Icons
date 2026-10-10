import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronCircleRightBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleRightBold = memo(
  forwardRef<SVGSVGElement, ChevronCircleRightBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.8 7.3c.38-.4 1.02-.4 1.4 0l4 4q.3.28.3.7t-.3.7l-4 4c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4l3.29-3.3-3.3-3.3c-.39-.38-.39-1.02 0-1.4" />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronCircleRightBold.displayName = 'ChevronCircleRightBold';

// Triple export pattern
export { ChevronCircleRightBold, ChevronCircleRightBold as ChevronCircleRightBoldIcon, ChevronCircleRightBold as SiChevronCircleRightBold };
export default ChevronCircleRightBold;
export type { ChevronCircleRightBoldProps };
