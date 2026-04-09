import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SparklesFillProps = Omit<IconBaseProps, 'children'>;

const SparklesFill = memo(
  forwardRef<SVGSVGElement, SparklesFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="sparkles-fill" {...props}>
      <path d="M10.5 4.12c.38 0 .72.26.84.62l.74 2.44a7.1 7.1 0 0 0 4.74 4.74l2.43.74a.88.88 0 0 1 0 1.68l-2.43.74a7.1 7.1 0 0 0-4.74 4.74l-.74 2.43a.87.87 0 0 1-1.68 0l-.74-2.43a7.1 7.1 0 0 0-4.74-4.74l-2.43-.74a.87.87 0 0 1 0-1.68l2.43-.74a7.1 7.1 0 0 0 4.74-4.74l.74-2.44.05-.13c.15-.3.45-.49.79-.49M18.88 1.4c.04-.12.2-.12.24 0l.2.63a4 4 0 0 0 2.65 2.66l.64.2c.12.03.12.2 0 .23l-.64.2a4 4 0 0 0-2.66 2.65l-.2.64a.12.12 0 0 1-.23 0l-.2-.64a4 4 0 0 0-2.65-2.66l-.64-.19c-.12-.04-.12-.2 0-.24l.64-.2a4 4 0 0 0 2.66-2.65z" />
    </IconBase>
  ))
);

SparklesFill.displayName = 'SparklesFill';

// Triple export pattern (lucide-react style)
export { SparklesFill, SparklesFill as SparklesFillIcon, SparklesFill as SiSparklesFill };
export default SparklesFill;
export type { SparklesFillProps };
