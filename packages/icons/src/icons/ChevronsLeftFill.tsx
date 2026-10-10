import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronsLeftFillProps = Omit<IconBaseProps, 'children'>;

const ChevronsLeftFill = memo(
  forwardRef<SVGSVGElement, ChevronsLeftFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.12 4.12c.48-.5 1.28-.5 1.76 0 .5.48.5 1.28 0 1.76L5.77 12l6.11 6.12c.5.48.5 1.28 0 1.76-.48.5-1.28.5-1.76 0l-7-7c-.24-.23-.37-.55-.37-.88s.13-.65.37-.88z" />
        <path d="M18.12 4.12c.48-.5 1.28-.5 1.76 0 .5.48.5 1.28 0 1.76L13.77 12l6.11 6.12c.5.48.5 1.28 0 1.76-.48.5-1.28.5-1.76 0l-7-7c-.24-.23-.37-.55-.37-.88s.13-.65.37-.88z" />
    </IconBase>
  ))
);

ChevronsLeftFill.displayName = 'ChevronsLeftFill';

// Triple export pattern
export { ChevronsLeftFill, ChevronsLeftFill as ChevronsLeftFillIcon, ChevronsLeftFill as SiChevronsLeftFill };
export default ChevronsLeftFill;
export type { ChevronsLeftFillProps };
