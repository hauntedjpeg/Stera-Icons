import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ChevronsDownFillProps = Omit<IconBaseProps, 'children'>;

const ChevronsDownFill = memo(
  forwardRef<SVGSVGElement, ChevronsDownFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.12 12.12a1.25 1.25 0 1 1 1.76 1.76l-7 7a1.25 1.25 0 0 1-1.76 0l-7-7a1.25 1.25 0 1 1 1.76-1.76L12 18.23z" />
        <path d="M18.12 4.12a1.25 1.25 0 1 1 1.76 1.76l-7 7a1.25 1.25 0 0 1-1.76 0l-7-7a1.25 1.25 0 1 1 1.76-1.76L12 10.23z" />
    </IconBase>
  ))
);

ChevronsDownFill.displayName = 'ChevronsDownFill';

// Triple export pattern (lucide-react style)
export { ChevronsDownFill, ChevronsDownFill as ChevronsDownFillIcon, ChevronsDownFill as SiChevronsDownFill };
export default ChevronsDownFill;
export type { ChevronsDownFillProps };
