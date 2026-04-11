import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronsLeftRightEllipsisFillProps = Omit<IconBaseProps, 'children'>;

const ChevronsLeftRightEllipsisFill = memo(
  forwardRef<SVGSVGElement, ChevronsLeftRightEllipsisFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.12 6.12a1.25 1.25 0 1 1 1.76 1.76L3.77 12l4.11 4.12a1.25 1.25 0 1 1-1.76 1.76l-5-5a1.25 1.25 0 0 1 0-1.76zM16.12 6.12a1.25 1.25 0 0 1 1.76 0l5 5a1.25 1.25 0 0 1 0 1.76l-5 5a1.25 1.25 0 0 1-1.76-1.76L20.23 12l-4.11-4.12a1.25 1.25 0 0 1 0-1.76" />
        <path d="M8 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M12 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5M16 10.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5" />
    </IconBase>
  ))
);

ChevronsLeftRightEllipsisFill.displayName = 'ChevronsLeftRightEllipsisFill';

// Triple export pattern (lucide-react style)
export { ChevronsLeftRightEllipsisFill, ChevronsLeftRightEllipsisFill as ChevronsLeftRightEllipsisFillIcon, ChevronsLeftRightEllipsisFill as SiChevronsLeftRightEllipsisFill };
export default ChevronsLeftRightEllipsisFill;
export type { ChevronsLeftRightEllipsisFillProps };
