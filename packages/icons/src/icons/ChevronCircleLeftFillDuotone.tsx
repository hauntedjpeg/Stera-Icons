import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronCircleLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronCircleLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="chevron-circle-left-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m2.12 5.25a.9.9 0 0 0-1.24 0l-4 4a.9.9 0 0 0 0 1.24l4 4a.88.88 0 0 0 1.24-1.24L10.74 12l3.38-3.38a.9.9 0 0 0 0-1.24" clipRule="evenodd" opacity={.4} />
        <path d="M12.88 7.38a.88.88 0 0 1 1.24 1.24L10.74 12l3.38 3.38a.88.88 0 0 1-1.24 1.24l-4-4a.9.9 0 0 1 0-1.24z" />
    </IconBase>
  ))
);

ChevronCircleLeftFillDuotone.displayName = 'ChevronCircleLeftFillDuotone';

// Triple export pattern (lucide-react style)
export { ChevronCircleLeftFillDuotone, ChevronCircleLeftFillDuotone as ChevronCircleLeftFillDuotoneIcon, ChevronCircleLeftFillDuotone as SiChevronCircleLeftFillDuotone };
export default ChevronCircleLeftFillDuotone;
export type { ChevronCircleLeftFillDuotoneProps };
