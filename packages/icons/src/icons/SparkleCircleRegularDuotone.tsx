import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SparkleCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SparkleCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, SparkleCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" opacity={.4} />
        <path d="M11.38 7.57c.18-.61 1.06-.61 1.24 0l.26.87c.39 1.28 1.4 2.3 2.68 2.68l.86.26c.62.18.62 1.06 0 1.24l-.86.26c-1.28.39-2.3 1.4-2.68 2.68l-.26.86c-.18.62-1.06.62-1.24 0l-.26-.86c-.39-1.28-1.4-2.3-2.68-2.68l-.86-.26c-.62-.18-.62-1.06 0-1.24l.86-.26c1.29-.39 2.3-1.4 2.68-2.68z" />
    </IconBase>
  ))
);

SparkleCircleRegularDuotone.displayName = 'SparkleCircleRegularDuotone';

// Triple export pattern
export { SparkleCircleRegularDuotone, SparkleCircleRegularDuotone as SparkleCircleRegularDuotoneIcon, SparkleCircleRegularDuotone as SiSparkleCircleRegularDuotone };
export default SparkleCircleRegularDuotone;
export type { SparkleCircleRegularDuotoneProps };
