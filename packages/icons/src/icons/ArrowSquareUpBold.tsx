import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowSquareUpBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowSquareUpBold = memo(
  forwardRef<SVGSVGElement, ArrowSquareUpBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 7q.42 0 .7.3l4 4c.4.38.4 1.02 0 1.4-.38.4-1.02.4-1.4 0L13 10.42V16c0 .55-.45 1-1 1s-1-.45-1-1v-5.59l-2.3 2.3c-.38.39-1.02.39-1.4 0-.4-.4-.4-1.03 0-1.42l4-4q.28-.28.7-.29" />
        <path fillRule="evenodd" d="M14.1 2.5q1.65-.02 2.7.06c.74.06 1.38.18 1.97.48.94.48 1.7 1.25 2.19 2.19.3.6.42 1.23.48 1.96q.08 1.06.06 2.71v4.2q.02 1.65-.06 2.7c-.06.74-.18 1.38-.48 1.97-.48.94-1.25 1.7-2.19 2.19-.6.3-1.23.42-1.96.48q-1.06.08-2.71.06H9.9q-1.65.02-2.7-.06c-.74-.06-1.38-.18-1.97-.48-.94-.48-1.7-1.25-2.19-2.19-.3-.6-.42-1.23-.48-1.96q-.07-1.06-.06-2.71V9.9q-.02-1.65.06-2.7c.06-.74.18-1.38.48-1.97.48-.94 1.25-1.7 2.19-2.19.6-.3 1.23-.42 1.96-.48q1.06-.07 2.71-.06zm-4.2 2c-1.14 0-1.93 0-2.55.05-.6.05-.95.14-1.21.28-.57.28-1.03.74-1.31 1.3-.14.27-.23.62-.28 1.22-.05.62-.05 1.41-.05 2.55v4.2c0 1.14 0 1.93.05 2.55.05.6.14.95.28 1.21.28.57.74 1.03 1.3 1.31.27.14.62.23 1.22.28.62.05 1.41.05 2.55.05h4.2c1.14 0 1.93 0 2.55-.05.6-.05.95-.14 1.21-.28q.87-.44 1.31-1.3c.14-.27.23-.62.28-1.22.05-.62.05-1.41.05-2.55V9.9c0-1.14 0-1.93-.05-2.55-.05-.6-.14-.95-.28-1.21q-.44-.87-1.3-1.31c-.27-.14-.62-.23-1.22-.28-.62-.05-1.41-.05-2.55-.05z" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowSquareUpBold.displayName = 'ArrowSquareUpBold';

// Triple export pattern
export { ArrowSquareUpBold, ArrowSquareUpBold as ArrowSquareUpBoldIcon, ArrowSquareUpBold as SiArrowSquareUpBold };
export default ArrowSquareUpBold;
export type { ArrowSquareUpBoldProps };
