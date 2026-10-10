import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowSquareRightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowSquareRightFill = memo(
  forwardRef<SVGSVGElement, ArrowSquareRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M2.63 14.1q-.01 1.64.05 2.7c.06.72.19 1.34.48 1.91.46.92 1.21 1.67 2.13 2.13.57.3 1.19.42 1.91.48.71.06 1.6.05 2.7.05h4.2q1.64.01 2.7-.05c.72-.06 1.34-.19 1.91-.48.92-.46 1.67-1.21 2.13-2.13.3-.57.42-1.19.48-1.91.06-.71.05-1.6.05-2.7V9.9q.01-1.64-.05-2.7c-.06-.72-.19-1.34-.48-1.91-.46-.92-1.21-1.67-2.13-2.13-.57-.3-1.19-.42-1.91-.48q-1.06-.07-2.7-.06H9.9q-1.64-.02-2.7.06c-.72.06-1.34.19-1.91.48-.92.46-1.67 1.21-2.13 2.13-.3.57-.42 1.19-.48 1.91q-.07 1.06-.06 2.7zm4.5-2.1c0-.48.39-.87.87-.87h5.89l-2.5-2.51c-.35-.34-.35-.9 0-1.24.33-.34.89-.34 1.23 0l4 4q.24.26.25.62 0 .36-.25.62l-4 4c-.34.34-.9.34-1.24 0s-.34-.9 0-1.24l2.5-2.5H8c-.48 0-.87-.4-.87-.88" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowSquareRightFill.displayName = 'ArrowSquareRightFill';

// Triple export pattern
export { ArrowSquareRightFill, ArrowSquareRightFill as ArrowSquareRightFillIcon, ArrowSquareRightFill as SiArrowSquareRightFill };
export default ArrowSquareRightFill;
export type { ArrowSquareRightFillProps };
