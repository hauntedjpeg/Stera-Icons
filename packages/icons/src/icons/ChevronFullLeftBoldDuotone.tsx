import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.9 4.57q.1.2.1.43v14q0-.4-.3-.7L14 16.58V7.4l1.7-1.7c.32-.31.38-.77.2-1.14" opacity={.4} />
        <path d="M14.3 4.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4L9.42 12l6.3 6.3c.39.38.39 1.02 0 1.4-.4.4-1.03.4-1.42 0l-7-7q-.28-.28-.29-.7t.3-.7z" />
    </IconBase>
  ))
);

ChevronFullLeftBoldDuotone.displayName = 'ChevronFullLeftBoldDuotone';

// Triple export pattern
export { ChevronFullLeftBoldDuotone, ChevronFullLeftBoldDuotone as ChevronFullLeftBoldDuotoneIcon, ChevronFullLeftBoldDuotone as SiChevronFullLeftBoldDuotone };
export default ChevronFullLeftBoldDuotone;
export type { ChevronFullLeftBoldDuotoneProps };
