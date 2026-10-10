import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SparkleCircleBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SparkleCircleBoldDuotone = memo(
  forwardRef<SVGSVGElement, SparkleCircleBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" opacity={.4} />
        <path d="M11.38 7.57c.18-.61 1.06-.61 1.24 0l.26.87c.39 1.28 1.4 2.3 2.68 2.68l.86.26c.62.18.62 1.06 0 1.24l-.86.26c-1.28.39-2.3 1.4-2.68 2.68l-.26.86c-.18.62-1.06.62-1.24 0l-.26-.86c-.39-1.28-1.4-2.3-2.68-2.68l-.87-.26c-.61-.18-.61-1.06 0-1.24l.87-.26c1.28-.39 2.3-1.4 2.68-2.68z" />
    </IconBase>
  ))
);

SparkleCircleBoldDuotone.displayName = 'SparkleCircleBoldDuotone';

// Triple export pattern
export { SparkleCircleBoldDuotone, SparkleCircleBoldDuotone as SparkleCircleBoldDuotoneIcon, SparkleCircleBoldDuotone as SiSparkleCircleBoldDuotone };
export default SparkleCircleBoldDuotone;
export type { SparkleCircleBoldDuotoneProps };
