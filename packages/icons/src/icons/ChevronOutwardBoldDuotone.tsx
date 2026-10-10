import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronOutwardBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronOutwardBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronOutwardBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.3 15.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4l-6 6c-.38.4-1.02.4-1.4 0l-6-6c-.4-.38-.4-1.02 0-1.4.38-.4 1.02-.4 1.4 0l5.3 5.29z" opacity={.4} />
        <path d="M11.3 1.3c.38-.4 1.02-.4 1.4 0l6 6c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0L12 3.42l-5.3 5.3c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42z" />
    </IconBase>
  ))
);

ChevronOutwardBoldDuotone.displayName = 'ChevronOutwardBoldDuotone';

// Triple export pattern
export { ChevronOutwardBoldDuotone, ChevronOutwardBoldDuotone as ChevronOutwardBoldDuotoneIcon, ChevronOutwardBoldDuotone as SiChevronOutwardBoldDuotone };
export default ChevronOutwardBoldDuotone;
export type { ChevronOutwardBoldDuotoneProps };
