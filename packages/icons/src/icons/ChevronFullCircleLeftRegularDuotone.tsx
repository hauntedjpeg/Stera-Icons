import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullCircleLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" opacity={.4} />
        <path d="M12.64 8.22c.65-.5 1.61-.04 1.61.8v5.97c0 .83-.96 1.3-1.61.79l-3.85-2.99c-.51-.4-.51-1.18 0-1.58z" />
    </IconBase>
  ))
);

ChevronFullCircleLeftRegularDuotone.displayName = 'ChevronFullCircleLeftRegularDuotone';

// Triple export pattern
export { ChevronFullCircleLeftRegularDuotone, ChevronFullCircleLeftRegularDuotone as ChevronFullCircleLeftRegularDuotoneIcon, ChevronFullCircleLeftRegularDuotone as SiChevronFullCircleLeftRegularDuotone };
export default ChevronFullCircleLeftRegularDuotone;
export type { ChevronFullCircleLeftRegularDuotoneProps };
