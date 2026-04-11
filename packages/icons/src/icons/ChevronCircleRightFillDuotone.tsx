import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronCircleRightFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleRightFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronCircleRightFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m-.88 5.25a.88.88 0 0 0-1.24 1.24L13.26 12l-3.38 3.38a.88.88 0 0 0 1.24 1.24l4-4a.9.9 0 0 0 0-1.24z" clipRule="evenodd" opacity={.4} />
        <path d="M9.88 7.38a.9.9 0 0 1 1.24 0l4 4a.9.9 0 0 1 0 1.24l-4 4a.88.88 0 0 1-1.24-1.24L13.26 12 9.88 8.62a.9.9 0 0 1 0-1.24" />
    </IconBase>
  ))
);

ChevronCircleRightFillDuotone.displayName = 'ChevronCircleRightFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronCircleRightFillDuotone, ChevronCircleRightFillDuotone as ChevronCircleRightFillDuotoneIcon, ChevronCircleRightFillDuotone as SiChevronCircleRightFillDuotone };
export default ChevronCircleRightFillDuotone;
export type { ChevronCircleRightFillDuotoneProps };
