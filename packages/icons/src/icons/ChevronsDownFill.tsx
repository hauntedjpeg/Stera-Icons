import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronsDownFillProps = Omit<IconBaseProps, 'children'>;

const ChevronsDownFill = memo(
  forwardRef<SVGSVGElement, ChevronsDownFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.12 12.12c.48-.5 1.28-.5 1.76 0 .5.48.5 1.28 0 1.76l-7 7c-.23.24-.55.37-.88.37s-.65-.13-.88-.37l-7-7c-.5-.48-.5-1.28 0-1.76.48-.5 1.28-.5 1.76 0L12 18.23z" />
        <path d="M18.12 4.12c.48-.5 1.28-.5 1.76 0 .5.48.5 1.28 0 1.76l-7 7c-.23.24-.55.37-.88.37s-.65-.13-.88-.37l-7-7c-.5-.48-.5-1.28 0-1.76.48-.5 1.28-.5 1.76 0L12 10.23z" />
    </IconBase>
  ))
);

ChevronsDownFill.displayName = 'ChevronsDownFill';

// Triple export pattern
export { ChevronsDownFill, ChevronsDownFill as ChevronsDownFillIcon, ChevronsDownFill as SiChevronsDownFill };
export default ChevronsDownFill;
export type { ChevronsDownFillProps };
