import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronsLeftRightEllipsisFillProps = Omit<IconBaseProps, 'children'>;

const ChevronsLeftRightEllipsisFill = memo(
  forwardRef<SVGSVGElement, ChevronsLeftRightEllipsisFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.12 6.12c.48-.5 1.28-.5 1.76 0 .5.48.5 1.28 0 1.76L3.77 12l4.11 4.12c.5.48.5 1.28 0 1.76-.48.5-1.28.5-1.76 0l-5-5c-.24-.23-.37-.55-.37-.88s.13-.65.37-.88zM16.12 6.12c.48-.5 1.28-.5 1.76 0l5 5q.37.37.37.88c0 .33-.13.65-.37.88l-5 5c-.48.5-1.28.5-1.76 0-.5-.48-.5-1.28 0-1.76L20.23 12l-4.11-4.12c-.5-.48-.5-1.28 0-1.76" />
        <path d="M8 10.75c.69 0 1.25.56 1.25 1.25 0 .7-.56 1.25-1.25 1.25S6.75 12.69 6.75 12s.56-1.25 1.25-1.25M12 10.75c.69 0 1.25.56 1.25 1.25 0 .7-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25M16 10.75c.69 0 1.25.56 1.25 1.25 0 .7-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25" />
    </IconBase>
  ))
);

ChevronsLeftRightEllipsisFill.displayName = 'ChevronsLeftRightEllipsisFill';

// Triple export pattern
export { ChevronsLeftRightEllipsisFill, ChevronsLeftRightEllipsisFill as ChevronsLeftRightEllipsisFillIcon, ChevronsLeftRightEllipsisFill as SiChevronsLeftRightEllipsisFill };
export default ChevronsLeftRightEllipsisFill;
export type { ChevronsLeftRightEllipsisFillProps };
