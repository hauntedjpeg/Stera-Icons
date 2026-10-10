import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronCircleUpFillProps = Omit<IconBaseProps, 'children'>;

const ChevronCircleUpFill = memo(
  forwardRef<SVGSVGElement, ChevronCircleUpFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 21.88c-5.45 0-9.87-4.43-9.87-9.88S6.55 2.13 12 2.13s9.88 4.42 9.88 9.87-4.43 9.88-9.88 9.88m-4.62-7.76c.34.34.9.34 1.24 0L12 10.74l3.38 3.38c.34.34.9.34 1.24 0s.34-.9 0-1.24l-4-4q-.26-.25-.62-.26-.36.01-.62.26l-4 4c-.34.34-.34.9 0 1.24" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronCircleUpFill.displayName = 'ChevronCircleUpFill';

// Triple export pattern
export { ChevronCircleUpFill, ChevronCircleUpFill as ChevronCircleUpFillIcon, ChevronCircleUpFill as SiChevronCircleUpFill };
export default ChevronCircleUpFill;
export type { ChevronCircleUpFillProps };
