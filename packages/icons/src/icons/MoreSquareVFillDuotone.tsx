import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoreSquareVFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MoreSquareVFillDuotone = memo(
  forwardRef<SVGSVGElement, MoreSquareVFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.1 2.63q1.64-.01 2.7.05c.72.06 1.34.19 1.91.48.92.46 1.67 1.21 2.13 2.13.3.57.42 1.19.48 1.91.06.71.05 1.6.05 2.7v4.2q.01 1.64-.05 2.7c-.06.72-.19 1.34-.48 1.91-.46.92-1.21 1.67-2.13 2.13-.57.3-1.19.42-1.91.48-.71.06-1.6.05-2.7.05H9.9q-1.64.01-2.7-.05c-.72-.06-1.34-.19-1.91-.48-.92-.46-1.67-1.21-2.13-2.13-.3-.57-.42-1.19-.48-1.91q-.07-1.06-.06-2.7V9.9q-.02-1.64.06-2.7c.06-.72.19-1.34.48-1.91.46-.92 1.21-1.67 2.13-2.13.57-.3 1.19-.42 1.91-.48q1.06-.07 2.7-.06zm-2.1 12c-.76 0-1.37.61-1.37 1.37s.61 1.38 1.37 1.38 1.38-.62 1.38-1.38-.62-1.37-1.38-1.37m0-4c-.76 0-1.37.61-1.37 1.37s.61 1.38 1.37 1.38 1.38-.62 1.38-1.38-.62-1.37-1.38-1.37m0-4c-.76 0-1.37.61-1.37 1.37s.61 1.38 1.37 1.38 1.38-.62 1.38-1.38-.62-1.37-1.38-1.37" clipRule="evenodd" opacity={.4} />
        <path d="M12 14.63c.76 0 1.38.61 1.38 1.37s-.62 1.38-1.38 1.38-1.37-.62-1.37-1.38.61-1.37 1.37-1.37M12 10.63c.76 0 1.38.61 1.38 1.37s-.62 1.38-1.38 1.38-1.37-.62-1.37-1.38.61-1.37 1.37-1.37M12 6.63c.76 0 1.38.61 1.38 1.37S12.76 9.38 12 9.38 10.63 8.76 10.63 8s.61-1.37 1.37-1.37" />
    </IconBase>
  ))
);

MoreSquareVFillDuotone.displayName = 'MoreSquareVFillDuotone';

// Triple export pattern
export { MoreSquareVFillDuotone, MoreSquareVFillDuotone as MoreSquareVFillDuotoneIcon, MoreSquareVFillDuotone as SiMoreSquareVFillDuotone };
export default MoreSquareVFillDuotone;
export type { MoreSquareVFillDuotoneProps };
