import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullDownFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-full-down-fill-duotone" {...props}>
      <path d="M16.89 9.88 12 14.76 7.11 9.88z" opacity={.4} />
        <path fillRule="evenodd" d="M19 8.13a.88.88 0 0 1 .62 1.49l-7 7a.9.9 0 0 1-1.24 0l-7-7A.88.88 0 0 1 5 8.12zm-7 6.63 4.89-4.88H7.1z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullDownFillDuotone.displayName = 'ChevronFullDownFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronFullDownFillDuotone, ChevronFullDownFillDuotone as ChevronFullDownFillDuotoneIcon, ChevronFullDownFillDuotone as SiChevronFullDownFillDuotone };
export default ChevronFullDownFillDuotone;
export type { ChevronFullDownFillDuotoneProps };
