import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PillFillProps = Omit<IconBaseProps, 'children'>;

const PillFill = memo(
  forwardRef<SVGSVGElement, PillFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.88 3.88c2-2 5.24-2 7.24 0s2 5.24 0 7.24l-9 9c-2 2-5.24 2-7.24 0s-2-5.24 0-7.24zm6 1.24c-1.31-1.32-3.45-1.32-4.76 0L10.24 9 15 13.76l3.88-3.88c1.32-1.31 1.32-3.45 0-4.76" clipRule="evenodd" />
    </IconBase>
  ))
);

PillFill.displayName = 'PillFill';

// Triple export pattern
export { PillFill, PillFill as PillFillIcon, PillFill as SiPillFill };
export default PillFill;
export type { PillFillProps };
