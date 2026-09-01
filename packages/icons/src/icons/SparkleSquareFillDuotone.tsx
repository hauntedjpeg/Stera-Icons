import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SparkleSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SparkleSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, SparkleSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.1 2.63q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v4.2q.01 1.64-.05 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05H9.9q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7V9.9q-.02-1.64.06-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zM12.48 7.1a.5.5 0 0 0-.96 0l-.4 1.34a4 4 0 0 1-2.68 2.68l-1.34.4a.5.5 0 0 0 0 .96l1.34.4a4 4 0 0 1 2.68 2.68l.4 1.34c.14.48.82.48.96 0l.4-1.34a4 4 0 0 1 2.68-2.68l1.34-.4c.48-.14.48-.82 0-.96l-1.34-.4a4 4 0 0 1-2.68-2.68z" clipRule="evenodd" opacity={.4} />
        <path d="M11.52 7.1a.5.5 0 0 1 .96 0l.4 1.34a4 4 0 0 0 2.68 2.68l1.34.4a.5.5 0 0 1 0 .96l-1.34.4a4 4 0 0 0-2.68 2.68l-.4 1.34a.5.5 0 0 1-.96 0l-.4-1.34a4 4 0 0 0-2.68-2.68l-1.34-.4a.5.5 0 0 1 0-.96l1.34-.4a4 4 0 0 0 2.68-2.68z" />
    </IconBase>
  ))
);

SparkleSquareFillDuotone.displayName = 'SparkleSquareFillDuotone';

// Triple export pattern (lucide-react style)
export { SparkleSquareFillDuotone, SparkleSquareFillDuotone as SparkleSquareFillDuotoneIcon, SparkleSquareFillDuotone as SiSparkleSquareFillDuotone };
export default SparkleSquareFillDuotone;
export type { SparkleSquareFillDuotoneProps };
