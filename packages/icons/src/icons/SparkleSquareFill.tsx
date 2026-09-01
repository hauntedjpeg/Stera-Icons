import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SparkleSquareFillProps = Omit<IconBaseProps, 'children'>;

const SparkleSquareFill = memo(
  forwardRef<SVGSVGElement, SparkleSquareFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.1 2.63q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v4.2q.01 1.64-.05 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05H9.9q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7V9.9q-.02-1.64.06-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zM12.48 7.1a.5.5 0 0 0-.96 0l-.4 1.34a4 4 0 0 1-2.68 2.68l-1.34.4a.5.5 0 0 0 0 .96l1.34.4a4 4 0 0 1 2.68 2.68l.4 1.34a.5.5 0 0 0 .96 0l.4-1.34a4 4 0 0 1 2.68-2.68l1.34-.4a.5.5 0 0 0 0-.96l-1.34-.4a4 4 0 0 1-2.68-2.68z" clipRule="evenodd" />
    </IconBase>
  ))
);

SparkleSquareFill.displayName = 'SparkleSquareFill';

// Triple export pattern (lucide-react style)
export { SparkleSquareFill, SparkleSquareFill as SparkleSquareFillIcon, SparkleSquareFill as SiSparkleSquareFill };
export default SparkleSquareFill;
export type { SparkleSquareFillProps };
