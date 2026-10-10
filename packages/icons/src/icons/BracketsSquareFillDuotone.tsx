import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BracketsSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, BracketsSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18 2.75c1.8 0 3.25 1.46 3.25 3.25v12c0 1.8-1.46 3.25-3.25 3.25h-1.5c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25H18c.41 0 .75-.34.75-.75V6c0-.41-.34-.75-.75-.75h-1.5c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25z" opacity={.4} />
        <path d="M7.5 2.75c.69 0 1.25.56 1.25 1.25S8.19 5.25 7.5 5.25H6c-.41 0-.75.34-.75.75v12c0 .41.34.75.75.75h1.5c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H6c-1.8 0-3.25-1.46-3.25-3.25V6c0-1.8 1.46-3.25 3.25-3.25z" />
    </IconBase>
  ))
);

BracketsSquareFillDuotone.displayName = 'BracketsSquareFillDuotone';

// Triple export pattern
export { BracketsSquareFillDuotone, BracketsSquareFillDuotone as BracketsSquareFillDuotoneIcon, BracketsSquareFillDuotone as SiBracketsSquareFillDuotone };
export default BracketsSquareFillDuotone;
export type { BracketsSquareFillDuotoneProps };
