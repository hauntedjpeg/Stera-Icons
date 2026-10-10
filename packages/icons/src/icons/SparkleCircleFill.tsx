import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SparkleCircleFillProps = Omit<IconBaseProps, 'children'>;

const SparkleCircleFill = memo(
  forwardRef<SVGSVGElement, SparkleCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m.62 5.45c-.18-.62-1.06-.62-1.24 0l-.26.86c-.39 1.28-1.4 2.3-2.68 2.68l-.86.26c-.62.18-.62 1.06 0 1.24l.86.26c1.28.39 2.3 1.4 2.68 2.68l.26.86c.18.62 1.06.62 1.24 0l.26-.86c.39-1.28 1.4-2.3 2.68-2.68l.86-.26c.62-.18.62-1.06 0-1.24l-.86-.26c-1.28-.39-2.3-1.4-2.68-2.68z" clipRule="evenodd" />
    </IconBase>
  ))
);

SparkleCircleFill.displayName = 'SparkleCircleFill';

// Triple export pattern
export { SparkleCircleFill, SparkleCircleFill as SparkleCircleFillIcon, SparkleCircleFill as SiSparkleCircleFill };
export default SparkleCircleFill;
export type { SparkleCircleFillProps };
