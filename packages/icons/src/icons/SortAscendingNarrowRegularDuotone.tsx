import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SortAscendingNarrowRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SortAscendingNarrowRegularDuotone = memo(
  forwardRef<SVGSVGElement, SortAscendingNarrowRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M22 19.25c.41 0 .75.34.75.75s-.34.75-.75.75H10c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM19 15.25c.41 0 .75.34.75.75s-.34.75-.75.75h-9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM16 11.25c.41 0 .75.34.75.75s-.34.75-.75.75h-6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={0.4} />
        <path d="M6 3.25h.09l.04.01.04.01.1.03.04.02q.06.01.1.06.08.04.12.09l4 4c.3.3.3.77 0 1.06s-.77.3-1.06 0L6.75 5.81V20c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5.81L2.53 8.53c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l4-4 .11-.1q.03 0 .05-.02l.08-.04q.04-.02.1-.03l.04-.02z" />
    </IconBase>
  ))
);

SortAscendingNarrowRegularDuotone.displayName = 'SortAscendingNarrowRegularDuotone';

// Triple export pattern
export { SortAscendingNarrowRegularDuotone, SortAscendingNarrowRegularDuotone as SortAscendingNarrowRegularDuotoneIcon, SortAscendingNarrowRegularDuotone as SiSortAscendingNarrowRegularDuotone };
export default SortAscendingNarrowRegularDuotone;
export type { SortAscendingNarrowRegularDuotoneProps };
