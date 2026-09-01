import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PillFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PillFillDuotone = memo(
  forwardRef<SVGSVGElement, PillFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M14.12 5.12a3.37 3.37 0 0 1 4.76 4.76L15 13.76 10.24 9z" opacity={.4} />
        <path fillRule="evenodd" d="M12.88 3.88a5.12 5.12 0 1 1 7.24 7.24l-9 9a5.12 5.12 0 0 1-7.24-7.24zm6 1.24a3.37 3.37 0 0 0-4.76 0L10.24 9 15 13.76l3.88-3.88a3.37 3.37 0 0 0 0-4.76" clipRule="evenodd" />
    </IconBase>
  ))
);

PillFillDuotone.displayName = 'PillFillDuotone';

// Triple export pattern (lucide-react style)
export { PillFillDuotone, PillFillDuotone as PillFillDuotoneIcon, PillFillDuotone as SiPillFillDuotone };
export default PillFillDuotone;
export type { PillFillDuotoneProps };
