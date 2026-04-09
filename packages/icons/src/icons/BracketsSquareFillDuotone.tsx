import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BracketsSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, BracketsSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="brackets-square-fill-duotone" {...props}>
      <path d="M18 2.75c1.8 0 3.25 1.46 3.25 3.25v12c0 1.8-1.46 3.25-3.25 3.25h-1.5a1.25 1.25 0 1 1 0-2.5H18c.41 0 .75-.34.75-.75V6a.75.75 0 0 0-.75-.75h-1.5a1.25 1.25 0 1 1 0-2.5z" opacity={.4} />
        <path d="M7.5 2.75a1.25 1.25 0 1 1 0 2.5H6a.75.75 0 0 0-.75.75v12c0 .41.34.75.75.75h1.5a1.25 1.25 0 1 1 0 2.5H6A3.25 3.25 0 0 1 2.75 18V6c0-1.8 1.46-3.25 3.25-3.25z" />
    </IconBase>
  ))
);

BracketsSquareFillDuotone.displayName = 'BracketsSquareFillDuotone';

// Triple export pattern (lucide-react style)
export { BracketsSquareFillDuotone, BracketsSquareFillDuotone as BracketsSquareFillDuotoneIcon, BracketsSquareFillDuotone as SiBracketsSquareFillDuotone };
export default BracketsSquareFillDuotone;
export type { BracketsSquareFillDuotoneProps };
