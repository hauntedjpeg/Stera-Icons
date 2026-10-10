import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SparkleSquareBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SparkleSquareBoldDuotone = memo(
  forwardRef<SVGSVGElement, SparkleSquareBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.1 2.5q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48.94.48 1.7 1.25 2.19 2.19.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v4.2q.02 1.65-.06 2.7c-.06.74-.18 1.38-.48 1.97-.48.94-1.25 1.7-2.19 2.19-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06H9.9q-1.65.02-2.7-.06c-.74-.06-1.38-.18-1.97-.48-.94-.48-1.7-1.25-2.19-2.19-.3-.6-.42-1.23-.48-1.96q-.07-1.06-.06-2.71V9.9q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97.48-.94 1.25-1.7 2.19-2.19.6-.3 1.23-.42 1.96-.48q1.06-.07 2.71-.06zm-4.2 2c-1.14 0-1.93 0-2.55.05-.6.05-.95.14-1.21.28-.57.28-1.03.74-1.31 1.3-.14.27-.23.62-.28 1.22-.05.62-.05 1.41-.05 2.55v4.2c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21.28.57.74 1.03 1.3 1.31.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05h4.2c1.14 0 1.93 0 2.55-.05.6-.05.95-.14 1.21-.28q.87-.44 1.31-1.3c.14-.27.23-.62.28-1.22.05-.62.05-1.41.05-2.55V9.9c0-1.14 0-1.93-.05-2.55-.05-.6-.14-.95-.28-1.21q-.44-.87-1.3-1.31c-.27-.14-.62-.23-1.22-.28-.62-.05-1.41-.05-2.55-.05z" clipRule="evenodd" opacity={.4} />
        <path d="M11.52 7.1c.14-.48.82-.48.96 0l.4 1.34c.39 1.28 1.4 2.3 2.68 2.68l1.34.4c.48.14.48.82 0 .96l-1.34.4c-1.29.39-2.3 1.4-2.68 2.68l-.4 1.34c-.14.48-.82.48-.96 0l-.4-1.34c-.39-1.29-1.4-2.3-2.68-2.68l-1.34-.4c-.48-.14-.48-.82 0-.96l1.34-.4c1.28-.39 2.3-1.4 2.68-2.68z" />
    </IconBase>
  ))
);

SparkleSquareBoldDuotone.displayName = 'SparkleSquareBoldDuotone';

// Triple export pattern
export { SparkleSquareBoldDuotone, SparkleSquareBoldDuotone as SparkleSquareBoldDuotoneIcon, SparkleSquareBoldDuotone as SiSparkleSquareBoldDuotone };
export default SparkleSquareBoldDuotone;
export type { SparkleSquareBoldDuotoneProps };
