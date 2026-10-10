import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsSquareCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BracketsSquareCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, BracketsSquareCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" opacity={.4} />
        <path d="M9.5 7.75c.41 0 .75.34.75.75s-.34.75-.75.75h-.6q-.14.01-.15.16v5.18q.01.15.16.16h.59c.41 0 .75.34.75.75s-.34.75-.75.75h-.6c-.9 0-1.65-.74-1.65-1.66V9.41c0-.92.74-1.66 1.66-1.66zM15.1 7.75c.9 0 1.65.74 1.65 1.66v5.18c0 .92-.74 1.66-1.66 1.66h-.59c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.6q.13-.01.15-.16V9.41q-.01-.15-.16-.16h-.59c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

BracketsSquareCircleRegularDuotone.displayName = 'BracketsSquareCircleRegularDuotone';

// Triple export pattern
export { BracketsSquareCircleRegularDuotone, BracketsSquareCircleRegularDuotone as BracketsSquareCircleRegularDuotoneIcon, BracketsSquareCircleRegularDuotone as SiBracketsSquareCircleRegularDuotone };
export default BracketsSquareCircleRegularDuotone;
export type { BracketsSquareCircleRegularDuotoneProps };
