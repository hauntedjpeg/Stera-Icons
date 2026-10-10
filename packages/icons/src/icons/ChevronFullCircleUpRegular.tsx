import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullCircleUpRegularProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleUpRegular = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleUpRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.21 8.8c.4-.52 1.18-.52 1.58 0l2.99 3.84c.5.65.04 1.61-.8 1.61H9.02c-.83 0-1.3-.96-.79-1.61z" />
        <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullCircleUpRegular.displayName = 'ChevronFullCircleUpRegular';

// Triple export pattern
export { ChevronFullCircleUpRegular, ChevronFullCircleUpRegular as ChevronFullCircleUpRegularIcon, ChevronFullCircleUpRegular as SiChevronFullCircleUpRegular };
export default ChevronFullCircleUpRegular;
export type { ChevronFullCircleUpRegularProps };
