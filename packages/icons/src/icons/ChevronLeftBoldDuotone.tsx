import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, ChevronLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.7 18.3c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0l-7-7c.38.4 1.02.4 1.4 0l.71-.7z" opacity={.4} />
        <path d="M14.3 4.3c.38-.4 1.02-.4 1.4 0 .4.38.4 1.02 0 1.4l-7 7c-.38.4-1.02.4-1.4 0-.4-.38-.4-1.02 0-1.4z" />
    </IconBase>
  ))
);

ChevronLeftBoldDuotone.displayName = 'ChevronLeftBoldDuotone';

// Triple export pattern
export { ChevronLeftBoldDuotone, ChevronLeftBoldDuotone as ChevronLeftBoldDuotoneIcon, ChevronLeftBoldDuotone as SiChevronLeftBoldDuotone };
export default ChevronLeftBoldDuotone;
export type { ChevronLeftBoldDuotoneProps };
