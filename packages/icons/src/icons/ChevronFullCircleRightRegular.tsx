import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullCircleRightRegularProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleRightRegular = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleRightRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.75 9.01c0-.83.96-1.3 1.61-.79l3.85 3c.51.4.51 1.17 0 1.57l-3.85 2.99c-.65.5-1.61.04-1.61-.8z" />
        <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullCircleRightRegular.displayName = 'ChevronFullCircleRightRegular';

// Triple export pattern
export { ChevronFullCircleRightRegular, ChevronFullCircleRightRegular as ChevronFullCircleRightRegularIcon, ChevronFullCircleRightRegular as SiChevronFullCircleRightRegular };
export default ChevronFullCircleRightRegular;
export type { ChevronFullCircleRightRegularProps };
