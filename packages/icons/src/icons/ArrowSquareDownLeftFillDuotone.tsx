import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowSquareDownLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowSquareDownLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ArrowSquareDownLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.1 2.63q1.64-.01 2.7.05c.72.06 1.34.19 1.91.48.92.46 1.67 1.21 2.13 2.13.3.57.42 1.19.48 1.91.06.71.05 1.6.05 2.7v4.2q.01 1.64-.05 2.7c-.06.72-.19 1.34-.48 1.91-.46.92-1.21 1.67-2.13 2.13-.57.3-1.19.42-1.91.48-.71.06-1.6.05-2.7.05H9.9q-1.64.01-2.7-.05c-.72-.06-1.34-.19-1.91-.48-.92-.46-1.67-1.21-2.13-2.13-.3-.57-.42-1.19-.48-1.91q-.07-1.06-.06-2.7V9.9q-.02-1.64.06-2.7c.06-.72.19-1.34.48-1.91.46-.92 1.21-1.67 2.13-2.13.57-.3 1.19-.42 1.91-.48q1.06-.07 2.7-.06zM9.17 8.3c-.48 0-.87.39-.87.87v5.66q0 .36.25.62.27.25.62.25h5.66c.48 0 .87-.39.87-.87s-.39-.88-.87-.88h-3.55l4.17-4.16c.34-.34.34-.9 0-1.24s-.9-.34-1.24 0l-4.16 4.17V9.17c0-.48-.4-.87-.88-.87" clipRule="evenodd" opacity={.4} />
        <path d="M9.17 8.3c.48 0 .88.39.88.87v3.55l4.16-4.17c.34-.34.9-.34 1.24 0s.34.9 0 1.24l-4.17 4.16h3.55c.48 0 .87.4.87.88s-.39.87-.87.87H9.17q-.35 0-.62-.25-.25-.26-.25-.62V9.17c0-.48.39-.87.87-.87" />
    </IconBase>
  ))
);

ArrowSquareDownLeftFillDuotone.displayName = 'ArrowSquareDownLeftFillDuotone';

// Triple export pattern
export { ArrowSquareDownLeftFillDuotone, ArrowSquareDownLeftFillDuotone as ArrowSquareDownLeftFillDuotoneIcon, ArrowSquareDownLeftFillDuotone as SiArrowSquareDownLeftFillDuotone };
export default ArrowSquareDownLeftFillDuotone;
export type { ArrowSquareDownLeftFillDuotoneProps };
