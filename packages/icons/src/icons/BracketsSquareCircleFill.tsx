import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsSquareCircleFillProps = Omit<IconBaseProps, 'children'>;

const BracketsSquareCircleFill = memo(
  forwardRef<SVGSVGElement, BracketsSquareCircleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m-3.1 5.5c-.98 0-1.78.8-1.78 1.78v5.18c0 .99.8 1.79 1.79 1.79h.59a.88.88 0 0 0 0-1.75h-.6a.03.03 0 0 1-.03-.04V9.41q0-.04.04-.04h.59a.87.87 0 1 0 0-1.74zm5.6 0a.88.88 0 0 0 0 1.75h.6q.02 0 .03.03v5.18q0 .03-.04.04h-.59a.88.88 0 0 0 0 1.74h.6c.98 0 1.78-.8 1.78-1.78V9.41c0-.99-.8-1.78-1.79-1.78z" clipRule="evenodd" />
    </IconBase>
  ))
);

BracketsSquareCircleFill.displayName = 'BracketsSquareCircleFill';

// Triple export pattern (lucide-react style)
export { BracketsSquareCircleFill, BracketsSquareCircleFill as BracketsSquareCircleFillIcon, BracketsSquareCircleFill as SiBracketsSquareCircleFill };
export default BracketsSquareCircleFill;
export type { BracketsSquareCircleFillProps };
