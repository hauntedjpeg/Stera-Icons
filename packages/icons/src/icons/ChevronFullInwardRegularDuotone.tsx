import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullInwardRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullInwardRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullInwardRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18 2.25a.75.75 0 0 1 .53 1.28l-6 6c-.3.3-.77.3-1.06 0l-6-6A.75.75 0 0 1 6 2.25zm-6 5.69 4.19-4.19H7.8z" clipRule="evenodd" />
        <path fillRule="evenodd" d="M11.47 14.47c.3-.3.77-.3 1.06 0l6 6a.75.75 0 0 1-.53 1.28H6a.75.75 0 0 1-.53-1.28zM7.8 20.25h8.38l-4.2-4.19z" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

ChevronFullInwardRegularDuotone.displayName = 'ChevronFullInwardRegularDuotone';

// Triple export pattern (lucide-react style)
export { ChevronFullInwardRegularDuotone, ChevronFullInwardRegularDuotone as ChevronFullInwardRegularDuotoneIcon, ChevronFullInwardRegularDuotone as SiChevronFullInwardRegularDuotone };
export default ChevronFullInwardRegularDuotone;
export type { ChevronFullInwardRegularDuotoneProps };
