import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronsDownFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ChevronsDownFillDuotone = memo(
  forwardRef<SVGSVGElement, ChevronsDownFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.12 4.12c.48-.5 1.28-.5 1.76 0 .5.48.5 1.28 0 1.76l-7 7c-.23.24-.55.37-.88.37s-.65-.13-.88-.37l-7-7c-.5-.48-.5-1.28 0-1.76.48-.5 1.28-.5 1.76 0L12 10.23z" opacity={.4} />
        <path d="M18.12 12.12c.48-.5 1.28-.5 1.76 0 .5.48.5 1.28 0 1.76l-7 7c-.23.24-.55.37-.88.37s-.65-.13-.88-.37l-7-7c-.5-.48-.5-1.28 0-1.76.48-.5 1.28-.5 1.76 0L12 18.23z" />
    </IconBase>
  ))
);

ChevronsDownFillDuotone.displayName = 'ChevronsDownFillDuotone';

// Triple export pattern
export { ChevronsDownFillDuotone, ChevronsDownFillDuotone as ChevronsDownFillDuotoneIcon, ChevronsDownFillDuotone as SiChevronsDownFillDuotone };
export default ChevronsDownFillDuotone;
export type { ChevronsDownFillDuotoneProps };
