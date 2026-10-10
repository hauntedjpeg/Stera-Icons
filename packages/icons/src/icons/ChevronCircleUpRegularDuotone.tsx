import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronCircleUpRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleUpRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronCircleUpRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" opacity={.4} />
        <path d="M12 8.75q.31 0 .53.22l4 4c.3.3.3.77 0 1.06s-.77.3-1.06 0L12 10.56l-3.47 3.47c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06l4-4q.22-.21.53-.22" />
    </IconBase>
  ))
);

ChevronCircleUpRegularDuotone.displayName = 'ChevronCircleUpRegularDuotone';

// Triple export pattern
export { ChevronCircleUpRegularDuotone, ChevronCircleUpRegularDuotone as ChevronCircleUpRegularDuotoneIcon, ChevronCircleUpRegularDuotone as SiChevronCircleUpRegularDuotone };
export default ChevronCircleUpRegularDuotone;
export type { ChevronCircleUpRegularDuotoneProps };
