import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronRightBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronRightBold = memo(
  forwardRef<SVGSVGElement, ChevronRightBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8.3 4.3c.38-.4 1.02-.4 1.4 0l7 7c.4.38.4 1.02 0 1.4l-7 7c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4l6.29-6.3-6.3-6.3c-.39-.38-.39-1.02 0-1.4" />
    </IconBase>
  ))
);

ChevronRightBold.displayName = 'ChevronRightBold';

// Triple export pattern
export { ChevronRightBold, ChevronRightBold as ChevronRightBoldIcon, ChevronRightBold as SiChevronRightBold };
export default ChevronRightBold;
export type { ChevronRightBoldProps };
