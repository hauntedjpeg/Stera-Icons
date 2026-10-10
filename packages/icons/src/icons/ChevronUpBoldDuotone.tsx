import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronUpBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronUpBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronUpBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.7 14.3c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0L12 9.42l.7-.7c.4-.4.4-1.03 0-1.42z" opacity={.4} />
        <path d="M11.3 7.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4l-7 7c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4z" />
    </IconBase>
  ))
);

ChevronUpBoldDuotone.displayName = 'ChevronUpBoldDuotone';

// Triple export pattern
export { ChevronUpBoldDuotone, ChevronUpBoldDuotone as ChevronUpBoldDuotoneIcon, ChevronUpBoldDuotone as SiChevronUpBoldDuotone };
export default ChevronUpBoldDuotone;
export type { ChevronUpBoldDuotoneProps };
