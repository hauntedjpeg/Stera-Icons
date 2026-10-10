import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowSquareDownRightFillProps = Omit<IconBaseProps, 'children'>;

const ArrowSquareDownRightFill = memo(
  forwardRef<SVGSVGElement, ArrowSquareDownRightFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.9 2.63q-1.64-.01-2.7.05c-.72.06-1.34.19-1.91.48-.92.46-1.67 1.21-2.13 2.13-.3.57-.42 1.19-.48 1.91q-.07 1.06-.06 2.7v4.2q-.02 1.64.06 2.7c.06.72.19 1.34.48 1.91.46.92 1.21 1.67 2.13 2.13.57.3 1.19.42 1.91.48.71.06 1.6.05 2.7.05h4.2q1.64.01 2.7-.05c.72-.06 1.34-.19 1.91-.48.92-.46 1.67-1.21 2.13-2.13.3-.57.42-1.19.48-1.91.06-.71.05-1.6.05-2.7V9.9q.01-1.64-.05-2.7c-.06-.72-.19-1.34-.48-1.91-.46-.92-1.21-1.67-2.13-2.13-.57-.3-1.19-.42-1.91-.48q-1.06-.07-2.7-.06zm4.93 5.67c.48 0 .87.39.87.87v5.66q0 .36-.25.62-.26.25-.62.25H9.17c-.48 0-.87-.39-.87-.87s.39-.88.87-.88h3.55L8.55 9.8c-.34-.34-.34-.9 0-1.24s.9-.34 1.24 0l4.16 4.17V9.17c0-.48.4-.87.88-.87" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowSquareDownRightFill.displayName = 'ArrowSquareDownRightFill';

// Triple export pattern
export { ArrowSquareDownRightFill, ArrowSquareDownRightFill as ArrowSquareDownRightFillIcon, ArrowSquareDownRightFill as SiArrowSquareDownRightFill };
export default ArrowSquareDownRightFill;
export type { ArrowSquareDownRightFillProps };
