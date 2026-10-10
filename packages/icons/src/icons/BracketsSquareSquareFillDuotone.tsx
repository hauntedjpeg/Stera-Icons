import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsSquareSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BracketsSquareSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, BracketsSquareSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.1 2.63q1.64-.01 2.7.05c.72.06 1.34.19 1.91.48.92.46 1.67 1.21 2.13 2.13.3.57.42 1.19.48 1.91.06.71.05 1.6.05 2.7v4.2q.01 1.64-.05 2.7c-.06.72-.19 1.34-.48 1.91-.46.92-1.21 1.67-2.13 2.13-.57.3-1.19.42-1.91.48-.71.06-1.6.05-2.7.05H9.9q-1.64.01-2.7-.05c-.72-.06-1.34-.19-1.91-.48-.92-.46-1.67-1.21-2.13-2.13-.3-.57-.42-1.19-.48-1.91q-.07-1.06-.06-2.7V9.9q-.02-1.64.06-2.7c.06-.72.19-1.34.48-1.91.46-.92 1.21-1.67 2.13-2.13.57-.3 1.19-.42 1.91-.48q1.06-.07 2.7-.06zm-5.2 5c-.98 0-1.78.8-1.78 1.78v5.18c0 .99.8 1.79 1.79 1.79h.59c.48 0 .88-.4.88-.88s-.4-.87-.88-.87h-.6q-.02 0-.03-.04V9.41q0-.04.04-.04h.59c.48 0 .88-.39.88-.87s-.4-.87-.88-.87zm5.6 0c-.48 0-.87.39-.87.87s.39.88.87.88h.6q.02 0 .03.03v5.18q0 .03-.04.04h-.59c-.48 0-.87.39-.87.87s.39.88.87.88h.6c.98 0 1.78-.8 1.78-1.79V9.41c0-.99-.8-1.78-1.79-1.78z" clipRule="evenodd" opacity={.4} />
        <path d="M9.5 7.63c.48 0 .88.39.88.87s-.4.88-.88.88h-.6q-.02 0-.03.03v5.18q0 .03.04.04h.59c.48 0 .88.39.88.87s-.4.88-.88.88h-.6c-.98 0-1.78-.8-1.78-1.79V9.41c0-.99.8-1.78 1.79-1.78zM15.1 7.63c.98 0 1.78.8 1.78 1.78v5.18c0 .99-.8 1.79-1.79 1.79h-.59c-.48 0-.87-.4-.87-.88s.39-.87.87-.87h.6q.02 0 .03-.04V9.41q0-.04-.04-.04h-.59c-.48 0-.87-.39-.87-.87s.39-.87.87-.87z" />
    </IconBase>
  ))
);

BracketsSquareSquareFillDuotone.displayName = 'BracketsSquareSquareFillDuotone';

// Triple export pattern
export { BracketsSquareSquareFillDuotone, BracketsSquareSquareFillDuotone as BracketsSquareSquareFillDuotoneIcon, BracketsSquareSquareFillDuotone as SiBracketsSquareSquareFillDuotone };
export default BracketsSquareSquareFillDuotone;
export type { BracketsSquareSquareFillDuotoneProps };
