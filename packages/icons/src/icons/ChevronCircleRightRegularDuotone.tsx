import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronCircleRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronCircleRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" opacity={.4} />
        <path d="M9.97 7.47c.3-.3.77-.3 1.06 0l4 4q.21.22.22.53 0 .31-.22.53l-4 4c-.3.3-.77.3-1.06 0s-.3-.77 0-1.06L13.44 12 9.97 8.53c-.3-.3-.3-.77 0-1.06" />
    </IconBase>
  ))
);

ChevronCircleRightRegularDuotone.displayName = 'ChevronCircleRightRegularDuotone';

// Triple export pattern
export { ChevronCircleRightRegularDuotone, ChevronCircleRightRegularDuotone as ChevronCircleRightRegularDuotoneIcon, ChevronCircleRightRegularDuotone as SiChevronCircleRightRegularDuotone };
export default ChevronCircleRightRegularDuotone;
export type { ChevronCircleRightRegularDuotoneProps };
