import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsCurlySquareFillProps = Omit<IconBaseProps, 'children'>;

const BracketsCurlySquareFill = memo(
  forwardRef<SVGSVGElement, BracketsCurlySquareFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.1 2.63q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v4.2q.01 1.64-.05 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05H9.9q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7V9.9q-.02-1.64.06-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zm-5.2 4.5c-.98 0-1.77.79-1.78 1.76V10c0 .54-.35 1.02-.87 1.17a.88.88 0 0 0 0 1.68c.52.15.87.63.88 1.17v1.1c0 .97.79 1.76 1.76 1.77h.61a.88.88 0 0 0 0-1.75h-.61l-.01-.01V14c0-.77-.3-1.47-.79-2.01.5-.54.78-1.24.79-2V8.87h.62a.87.87 0 1 0 0-1.76zm5.6 0a.88.88 0 0 0 0 1.75h.62V10c0 .77.3 1.47.79 2.01-.5.54-.79 1.24-.79 2v1.12h-.62a.88.88 0 0 0 0 1.76h.6c.98 0 1.77-.8 1.78-1.77V14c0-.54.35-1.02.87-1.17a.88.88 0 0 0 0-1.68 1.2 1.2 0 0 1-.87-1.17V8.9c0-.97-.8-1.76-1.77-1.77z" clipRule="evenodd" />
    </IconBase>
  ))
);

BracketsCurlySquareFill.displayName = 'BracketsCurlySquareFill';

// Triple export pattern (lucide-react style)
export { BracketsCurlySquareFill, BracketsCurlySquareFill as BracketsCurlySquareFillIcon, BracketsCurlySquareFill as SiBracketsCurlySquareFill };
export default BracketsCurlySquareFill;
export type { BracketsCurlySquareFillProps };
