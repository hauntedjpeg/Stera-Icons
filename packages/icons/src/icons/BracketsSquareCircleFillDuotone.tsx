import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsSquareCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BracketsSquareCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, BracketsSquareCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="brackets-square-circle-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m-3.1 5.5c-.98 0-1.78.8-1.78 1.78v5.18c0 .99.8 1.79 1.79 1.79h.59a.88.88 0 0 0 0-1.75h-.6a.03.03 0 0 1-.03-.04V9.41q0-.04.04-.04h.59a.87.87 0 1 0 0-1.74zm5.6 0a.88.88 0 0 0 0 1.75h.6q.02 0 .03.03v5.18q0 .03-.04.04h-.59a.88.88 0 0 0 0 1.74h.6c.98 0 1.78-.8 1.78-1.78V9.41c0-.99-.8-1.78-1.79-1.78z" clipRule="evenodd" opacity={.4} />
        <path d="M9.5 7.63a.87.87 0 1 1 0 1.75h-.6l-.03.03v5.18q0 .03.04.04h.59a.88.88 0 0 1 0 1.74h-.6c-.98 0-1.78-.8-1.78-1.78V9.41c0-.99.8-1.78 1.79-1.78zM15.1 7.63c.98 0 1.78.8 1.78 1.78v5.18c0 .99-.8 1.79-1.79 1.79h-.59a.88.88 0 0 1 0-1.75h.6q.02 0 .03-.04V9.41a.03.03 0 0 0-.04-.04h-.59a.88.88 0 0 1 0-1.74z" />
    </IconBase>
  ))
);

BracketsSquareCircleFillDuotone.displayName = 'BracketsSquareCircleFillDuotone';

// Triple export pattern (lucide-react style)
export { BracketsSquareCircleFillDuotone, BracketsSquareCircleFillDuotone as BracketsSquareCircleFillDuotoneIcon, BracketsSquareCircleFillDuotone as SiBracketsSquareCircleFillDuotone };
export default BracketsSquareCircleFillDuotone;
export type { BracketsSquareCircleFillDuotoneProps };
