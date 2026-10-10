import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SortAscendingNarrowFillProps = Omit<IconBaseProps, 'children'>;

const SortAscendingNarrowFill = memo(
  forwardRef<SVGSVGElement, SortAscendingNarrowFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6 3.13h.13l.03.01q.14.03.27.1l.12.08.07.06 4 4c.25.25.32.63.19.95-.14.33-.46.54-.81.54H6.87V20c0 .48-.39.88-.87.88s-.88-.4-.88-.88V8.88H2c-.35 0-.67-.22-.8-.55-.14-.32-.07-.7.18-.95l4-4q.11-.1.25-.17l.2-.07zM22 19.13c.48 0 .87.39.87.87s-.39.88-.87.88H10c-.48 0-.88-.4-.88-.88s.4-.87.88-.87zM19 15.13c.48 0 .87.39.87.87s-.39.88-.87.88h-9c-.48 0-.88-.4-.88-.88s.4-.87.88-.87z" />
        <path d="M16 11.13c.48 0 .87.39.87.87s-.39.88-.87.88h-6c-.48 0-.88-.4-.88-.88s.4-.87.88-.87z" />
    </IconBase>
  ))
);

SortAscendingNarrowFill.displayName = 'SortAscendingNarrowFill';

// Triple export pattern
export { SortAscendingNarrowFill, SortAscendingNarrowFill as SortAscendingNarrowFillIcon, SortAscendingNarrowFill as SiSortAscendingNarrowFill };
export default SortAscendingNarrowFill;
export type { SortAscendingNarrowFillProps };
