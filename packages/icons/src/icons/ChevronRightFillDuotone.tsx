import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-right-fill-duotone" {...props}>
      <path d="m14.76 12-4.88 4.89V7.1z" opacity={.4} />
        <path fillRule="evenodd" d="M8.67 4.2c.32-.14.7-.07.95.18l7 7c.34.34.34.9 0 1.24l-7 7a.88.88 0 0 1-1.5-.62V5c0-.35.22-.67.55-.8m1.2 12.69 4.9-4.89-4.9-4.89z" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronRightFillDuotone.displayName = 'ChevronRightFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronRightFillDuotone, ChevronRightFillDuotone as ChevronRightFillDuotoneIcon, ChevronRightFillDuotone as SiChevronRightFillDuotone };
export default ChevronRightFillDuotone;
export type { ChevronRightFillDuotoneProps };
