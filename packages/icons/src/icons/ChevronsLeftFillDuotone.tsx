import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronsLeftFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronsLeftFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronsLeftFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.12 4.12c.48-.5 1.28-.5 1.76 0 .5.48.5 1.28 0 1.76L5.77 12l6.11 6.12c.5.48.5 1.28 0 1.76-.48.5-1.28.5-1.76 0l-7-7c-.24-.23-.37-.55-.37-.88s.13-.65.37-.88z" />
        <path d="M18.12 4.12c.48-.5 1.28-.5 1.76 0 .5.48.5 1.28 0 1.76L13.77 12l6.11 6.12c.5.48.5 1.28 0 1.76-.48.5-1.28.5-1.76 0l-7-7c-.24-.23-.37-.55-.37-.88s.13-.65.37-.88z" opacity={.4} />
    </IconBase>
  ))
);

ChevronsLeftFillDuotone.displayName = 'ChevronsLeftFillDuotone';

// Triple export pattern
export { ChevronsLeftFillDuotone, ChevronsLeftFillDuotone as ChevronsLeftFillDuotoneIcon, ChevronsLeftFillDuotone as SiChevronsLeftFillDuotone };
export default ChevronsLeftFillDuotone;
export type { ChevronsLeftFillDuotoneProps };
