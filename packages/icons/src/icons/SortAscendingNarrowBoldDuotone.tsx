import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SortAscendingNarrowBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SortAscendingNarrowBoldDuotone = memo(
  forwardRef<SVGSVGElement, SortAscendingNarrowBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M22 19c.55 0 1 .45 1 1s-.45 1-1 1H10c-.55 0-1-.45-1-1s.45-1 1-1zM19 15c.55 0 1 .45 1 1s-.45 1-1 1h-9c-.55 0-1-.45-1-1s.45-1 1-1zM16 11c.55 0 1 .45 1 1s-.45 1-1 1h-6c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={0.4} />
        <path d="M6 3h.1l.05.01h.03l.15.05h.01l.15.07h.01l.13.1.08.06 4 4c.39.4.39 1.03 0 1.42-.4.39-1.03.39-1.42 0L7 6.4V20c0 .55-.45 1-1 1s-1-.45-1-1V6.41l-2.3 2.3c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42l4-4 .1-.09q.14-.1.3-.16h.05l.05-.02h.04z" />
    </IconBase>
  ))
);

SortAscendingNarrowBoldDuotone.displayName = 'SortAscendingNarrowBoldDuotone';

// Triple export pattern
export { SortAscendingNarrowBoldDuotone, SortAscendingNarrowBoldDuotone as SortAscendingNarrowBoldDuotoneIcon, SortAscendingNarrowBoldDuotone as SiSortAscendingNarrowBoldDuotone };
export default SortAscendingNarrowBoldDuotone;
export type { SortAscendingNarrowBoldDuotoneProps };
