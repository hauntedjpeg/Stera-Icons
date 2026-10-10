import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullDownBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullDownBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullDownBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19 8q-.4 0-.7.3L16.58 10H7.4l-1.7-1.7Q5.4 8 5 8z" opacity={.4} />
        <path d="M18.3 8.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4l-7 7q-.28.3-.7.3t-.7-.3l-7-7c-.4-.38-.4-1.02 0-1.4.38-.4 1.02-.4 1.4 0l6.3 6.29z" />
    </IconBase>
  ))
);

ChevronFullDownBoldDuotone.displayName = 'ChevronFullDownBoldDuotone';

// Triple export pattern
export { ChevronFullDownBoldDuotone, ChevronFullDownBoldDuotone as ChevronFullDownBoldDuotoneIcon, ChevronFullDownBoldDuotone as SiChevronFullDownBoldDuotone };
export default ChevronFullDownBoldDuotone;
export type { ChevronFullDownBoldDuotoneProps };
