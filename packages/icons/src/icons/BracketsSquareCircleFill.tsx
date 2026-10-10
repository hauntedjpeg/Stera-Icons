import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsSquareCircleFillProps = Omit<IconBaseProps, 'children'>;

const BracketsSquareCircleFill = memo(
  forwardRef<SVGSVGElement, BracketsSquareCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m-3.1 5.5c-.98 0-1.78.8-1.78 1.78v5.18c0 .99.8 1.79 1.79 1.79h.59c.48 0 .88-.4.88-.88s-.4-.87-.88-.87h-.6q-.02 0-.03-.04V9.41q0-.04.04-.04h.59c.48 0 .88-.39.88-.87s-.4-.87-.88-.87zm5.6 0c-.48 0-.87.39-.87.87s.39.88.87.88h.6q.02 0 .03.03v5.18q0 .03-.04.04h-.59c-.48 0-.87.39-.87.87s.39.88.87.88h.6c.98 0 1.78-.8 1.78-1.79V9.41c0-.99-.8-1.78-1.79-1.78z" clipRule="evenodd" />
    </IconBase>
  ))
);

BracketsSquareCircleFill.displayName = 'BracketsSquareCircleFill';

// Triple export pattern
export { BracketsSquareCircleFill, BracketsSquareCircleFill as BracketsSquareCircleFillIcon, BracketsSquareCircleFill as SiBracketsSquareCircleFill };
export default BracketsSquareCircleFill;
export type { BracketsSquareCircleFillProps };
