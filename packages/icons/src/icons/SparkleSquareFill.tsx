import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SparkleSquareFillProps = Omit<IconBaseProps, 'children'>;

const SparkleSquareFill = memo(
  forwardRef<SVGSVGElement, SparkleSquareFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.1 2.63q1.64-.01 2.7.05c.72.06 1.34.19 1.91.48.92.46 1.67 1.21 2.13 2.13.3.57.42 1.19.48 1.91.06.71.05 1.6.05 2.7v4.2q.01 1.64-.05 2.7c-.06.72-.19 1.34-.48 1.91-.46.92-1.21 1.67-2.13 2.13-.57.3-1.19.42-1.91.48-.71.06-1.6.05-2.7.05H9.9q-1.64.01-2.7-.05c-.72-.06-1.34-.19-1.91-.48-.92-.46-1.67-1.21-2.13-2.13-.3-.57-.42-1.19-.48-1.91q-.07-1.06-.06-2.7V9.9q-.02-1.64.06-2.7c.06-.72.19-1.34.48-1.91.46-.92 1.21-1.67 2.13-2.13.57-.3 1.19-.42 1.91-.48q1.06-.07 2.7-.06zM12.48 7.1c-.14-.48-.82-.48-.96 0l-.4 1.34c-.39 1.28-1.4 2.3-2.68 2.68l-1.34.4c-.48.14-.48.82 0 .96l1.34.4c1.28.39 2.3 1.4 2.68 2.68l.4 1.34c.14.48.82.48.96 0l.4-1.34c.39-1.29 1.4-2.3 2.68-2.68l1.34-.4c.48-.14.48-.82 0-.96l-1.34-.4c-1.29-.39-2.3-1.4-2.68-2.68z" clipRule="evenodd" />
    </IconBase>
  ))
);

SparkleSquareFill.displayName = 'SparkleSquareFill';

// Triple export pattern
export { SparkleSquareFill, SparkleSquareFill as SparkleSquareFillIcon, SparkleSquareFill as SiSparkleSquareFill };
export default SparkleSquareFill;
export type { SparkleSquareFillProps };
