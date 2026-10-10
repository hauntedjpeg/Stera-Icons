import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronFullCircleDownRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronFullCircleDownRegularDuotone = memo(
  forwardRef<SVGSVGElement, ChevronFullCircleDownRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" opacity={.4} />
        <path d="M14.99 9.75c.83 0 1.3.96.79 1.61l-2.99 3.85c-.4.51-1.18.51-1.58 0l-2.99-3.85c-.5-.65-.04-1.61.8-1.61z" />
    </IconBase>
  ))
);

ChevronFullCircleDownRegularDuotone.displayName = 'ChevronFullCircleDownRegularDuotone';

// Triple export pattern
export { ChevronFullCircleDownRegularDuotone, ChevronFullCircleDownRegularDuotone as ChevronFullCircleDownRegularDuotoneIcon, ChevronFullCircleDownRegularDuotone as SiChevronFullCircleDownRegularDuotone };
export default ChevronFullCircleDownRegularDuotone;
export type { ChevronFullCircleDownRegularDuotoneProps };
