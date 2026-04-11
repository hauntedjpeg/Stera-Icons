import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronDownFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M16.89 9.88 12 14.76 7.11 9.88z" opacity={.4} />
        <path fillRule="evenodd" d="M19 8.13a.88.88 0 0 1 .62 1.49l-7 7a.9.9 0 0 1-1.24 0l-7-7A.88.88 0 0 1 5 8.12zm-7 6.63 4.89-4.88H7.1z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronDownFillDuotone.displayName = 'ChevronDownFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronDownFillDuotone, ChevronDownFillDuotone as ChevronDownFillDuotoneIcon, ChevronDownFillDuotone as SiChevronDownFillDuotone };
export default ChevronDownFillDuotone;
export type { ChevronDownFillDuotoneProps };
