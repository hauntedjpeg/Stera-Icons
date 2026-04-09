import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsSquareFillProps = Omit<IconBaseProps, 'children'>;

const BracketsSquareFill = memo(
  forwardRef<SVGSVGElement, BracketsSquareFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="brackets-square-fill" {...props}>
      <path d="M7.5 2.75a1.25 1.25 0 1 1 0 2.5H6a.75.75 0 0 0-.75.75v12c0 .41.34.75.75.75h1.5a1.25 1.25 0 1 1 0 2.5H6A3.25 3.25 0 0 1 2.75 18V6c0-1.8 1.46-3.25 3.25-3.25zM18 2.75c1.8 0 3.25 1.46 3.25 3.25v12c0 1.8-1.46 3.25-3.25 3.25h-1.5a1.25 1.25 0 1 1 0-2.5H18c.41 0 .75-.34.75-.75V6a.75.75 0 0 0-.75-.75h-1.5a1.25 1.25 0 1 1 0-2.5z" />
    </IconBase>
  ))
);

BracketsSquareFill.displayName = 'BracketsSquareFill';

// Triple export pattern (lucide-react style)
export { BracketsSquareFill, BracketsSquareFill as BracketsSquareFillIcon, BracketsSquareFill as SiBracketsSquareFill };
export default BracketsSquareFill;
export type { BracketsSquareFillProps };
