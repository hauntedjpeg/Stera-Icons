import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronCircleDownRegularProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleDownRegular = memo(
  forwardRef<SVGSVGElement, ChevronCircleDownRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15.47 9.97c.3-.3.77-.3 1.06 0s.3.77 0 1.06l-4 4q-.22.21-.53.22-.31 0-.53-.22l-4-4c-.3-.3-.3-.77 0-1.06s.77-.3 1.06 0L12 13.44z" />
        <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronCircleDownRegular.displayName = 'ChevronCircleDownRegular';

// Triple export pattern
export { ChevronCircleDownRegular, ChevronCircleDownRegular as ChevronCircleDownRegularIcon, ChevronCircleDownRegular as SiChevronCircleDownRegular };
export default ChevronCircleDownRegular;
export type { ChevronCircleDownRegularProps };
