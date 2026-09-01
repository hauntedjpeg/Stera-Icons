import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsSquareSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BracketsSquareSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, BracketsSquareSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.1 2.63q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v4.2q.01 1.64-.05 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05H9.9q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7V9.9q-.02-1.64.06-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zm-5.2 5c-.98 0-1.78.8-1.78 1.78v5.18c0 .99.8 1.79 1.79 1.79h.59a.88.88 0 0 0 0-1.75h-.6a.03.03 0 0 1-.03-.04V9.41q0-.04.04-.04h.59a.87.87 0 1 0 0-1.74zm5.6 0a.88.88 0 0 0 0 1.75h.6q.02 0 .03.03v5.18q0 .03-.04.04h-.59a.88.88 0 0 0 0 1.74h.6c.98 0 1.78-.8 1.78-1.78V9.41c0-.99-.8-1.78-1.79-1.78z" clipRule="evenodd" opacity={.4} />
        <path d="M9.5 7.63a.87.87 0 1 1 0 1.75h-.6l-.03.03v5.18q0 .03.04.04h.59a.88.88 0 0 1 0 1.74h-.6c-.98 0-1.78-.8-1.78-1.78V9.41c0-.99.8-1.78 1.79-1.78zM15.1 7.63c.98 0 1.78.8 1.78 1.78v5.18c0 .99-.8 1.79-1.79 1.79h-.59a.88.88 0 0 1 0-1.75h.6q.02 0 .03-.04V9.41a.03.03 0 0 0-.04-.04h-.59a.88.88 0 0 1 0-1.74z" />
    </IconBase>
  ))
);

BracketsSquareSquareFillDuotone.displayName = 'BracketsSquareSquareFillDuotone';

// Triple export pattern (lucide-react style)
export { BracketsSquareSquareFillDuotone, BracketsSquareSquareFillDuotone as BracketsSquareSquareFillDuotoneIcon, BracketsSquareSquareFillDuotone as SiBracketsSquareSquareFillDuotone };
export default BracketsSquareSquareFillDuotone;
export type { BracketsSquareSquareFillDuotoneProps };
