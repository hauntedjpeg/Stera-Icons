import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullCircleDownRegularProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleDownRegular = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleDownRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.99 9.75c.83 0 1.3.96.79 1.61l-3 3.85c-.4.51-1.17.51-1.57 0l-2.99-3.85c-.5-.65-.04-1.61.8-1.61z" />
        <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" />
    </IconBase>
  ))
);

ChevronFullCircleDownRegular.displayName = 'ChevronFullCircleDownRegular';

// Triple export pattern
export { ChevronFullCircleDownRegular, ChevronFullCircleDownRegular as ChevronFullCircleDownRegularIcon, ChevronFullCircleDownRegular as SiChevronFullCircleDownRegular };
export default ChevronFullCircleDownRegular;
export type { ChevronFullCircleDownRegularProps };
