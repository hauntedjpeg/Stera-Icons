import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DollarCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const DollarCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, DollarCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" opacity={.4} />
        <path d="M11.75 5.5c.41 0 .75.34.75.75v1.5h2c.41 0 .75.34.75.75s-.34.75-.75.75h-3.75c-.55 0-1 .45-1 1s.45 1 1 1h3c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5H13v1.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.5H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.75c.55 0 1-.45 1-1s-.45-1-1-1h-3c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5H11v-1.5c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

DollarCircleRegularDuotone.displayName = 'DollarCircleRegularDuotone';

// Triple export pattern
export { DollarCircleRegularDuotone, DollarCircleRegularDuotone as DollarCircleRegularDuotoneIcon, DollarCircleRegularDuotone as SiDollarCircleRegularDuotone };
export default DollarCircleRegularDuotone;
export type { DollarCircleRegularDuotoneProps };
