import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronOutwardBoldProps = Omit<IconBaseProps, 'children'>;

const ChevronOutwardBold = memo(
  forwardRef<SVGSVGElement, ChevronOutwardBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.3 15.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4l-6 6c-.38.4-1.02.4-1.4 0l-6-6c-.4-.38-.4-1.02 0-1.4.38-.4 1.02-.4 1.4 0l5.3 5.29zM11.3 1.3c.38-.4 1.02-.4 1.4 0l6 6c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0L12 3.42l-5.3 5.3c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42z" />
    </IconBase>
  ))
);

ChevronOutwardBold.displayName = 'ChevronOutwardBold';

// Triple export pattern
export { ChevronOutwardBold, ChevronOutwardBold as ChevronOutwardBoldIcon, ChevronOutwardBold as SiChevronOutwardBold };
export default ChevronOutwardBold;
export type { ChevronOutwardBoldProps };
