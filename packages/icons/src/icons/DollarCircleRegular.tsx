import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type DollarCircleRegularProps = Omit<IconBaseProps, 'children'>;

const DollarCircleRegular = memo(
  forwardRef<SVGSVGElement, DollarCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.75 5.5c.41 0 .75.34.75.75v1.5h2c.41 0 .75.34.75.75s-.34.75-.75.75h-3.75c-.55 0-1 .45-1 1s.45 1 1 1h3c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5H13v1.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.5H9c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.75c.55 0 1-.45 1-1s-.45-1-1-1h-3c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5H11v-1.5c0-.41.34-.75.75-.75" />
        <path fillRule="evenodd" d="M12 1.75c5.66 0 10.25 4.59 10.25 10.25S17.66 22.25 12 22.25 1.75 17.66 1.75 12 6.34 1.75 12 1.75m0 1.5c-4.83 0-8.75 3.92-8.75 8.75s3.92 8.75 8.75 8.75 8.75-3.92 8.75-8.75S16.83 3.25 12 3.25" clipRule="evenodd" />
    </IconBase>
  ))
);

DollarCircleRegular.displayName = 'DollarCircleRegular';

// Triple export pattern
export { DollarCircleRegular, DollarCircleRegular as DollarCircleRegularIcon, DollarCircleRegular as SiDollarCircleRegular };
export default DollarCircleRegular;
export type { DollarCircleRegularProps };
