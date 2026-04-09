import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsSquareSquareFillProps = Omit<IconBaseProps, 'children'>;

const BracketsSquareSquareFill = memo(
  forwardRef<SVGSVGElement, BracketsSquareSquareFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="brackets-square-square-fill" {...props}>
      <path fillRule="evenodd" d="M12.5 2.63c1.39 0 2.48 0 3.36.07s1.63.22 2.3.57c1.11.56 2.01 1.46 2.57 2.56.35.68.5 1.43.57 2.31.08.88.07 1.97.07 3.36v1c0 1.39 0 2.48-.07 3.36a6 6 0 0 1-.57 2.3c-.56 1.11-1.46 2.01-2.56 2.57-.68.35-1.43.5-2.31.57-.88.08-1.97.07-3.36.07h-1c-1.39 0-2.48 0-3.36-.07a6 6 0 0 1-2.3-.57c-1.11-.56-2.01-1.46-2.57-2.56a6 6 0 0 1-.57-2.31c-.08-.88-.08-1.97-.08-3.36v-1c0-1.39 0-2.48.08-3.36s.22-1.63.57-2.3c.56-1.11 1.46-2.01 2.56-2.57.68-.35 1.43-.5 2.31-.57.88-.08 1.97-.08 3.36-.08zm-3.6 5c-.98 0-1.78.8-1.78 1.78v5.18c0 .99.8 1.79 1.79 1.79h.59a.88.88 0 0 0 0-1.75h-.6a.03.03 0 0 1-.03-.04V9.41q0-.04.04-.04h.59a.87.87 0 1 0 0-1.74zm5.6 0a.88.88 0 0 0 0 1.75h.6q.02 0 .03.03v5.18q0 .03-.04.04h-.59a.88.88 0 0 0 0 1.74h.6c.98 0 1.78-.8 1.78-1.78V9.41c0-.99-.8-1.78-1.79-1.78z" clipRule="evenodd" />
    </IconBase>
  ))
);

BracketsSquareSquareFill.displayName = 'BracketsSquareSquareFill';

// Triple export pattern (lucide-react style)
export { BracketsSquareSquareFill, BracketsSquareSquareFill as BracketsSquareSquareFillIcon, BracketsSquareSquareFill as SiBracketsSquareSquareFill };
export default BracketsSquareSquareFill;
export type { BracketsSquareSquareFillProps };
