import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsCurlyCircleFillProps = Omit<IconBaseProps, 'children'>;

const BracketsCurlyCircleFill = memo(
  forwardRef<SVGSVGElement, BracketsCurlyCircleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="brackets-curly-circle-fill" {...props}>
      <path fillRule="evenodd" d="M12 2.13a9.88 9.88 0 1 1 0 19.75 9.88 9.88 0 0 1 0-19.75m-3.1 5c-.98 0-1.77.79-1.78 1.76V10c0 .54-.35 1.02-.87 1.17a.88.88 0 0 0 0 1.68c.52.15.87.63.88 1.17v1.1c0 .97.79 1.76 1.76 1.77h.61a.88.88 0 0 0 0-1.75h-.61l-.01-.01V14c0-.77-.3-1.47-.79-2.01.5-.54.78-1.24.79-2V8.87h.62a.87.87 0 1 0 0-1.76zm5.6 0a.88.88 0 0 0 0 1.75h.62V10c0 .77.3 1.47.79 2.01-.5.54-.79 1.24-.79 2v1.12h-.62a.88.88 0 0 0 0 1.76h.6c.98 0 1.77-.8 1.78-1.77V14c0-.54.35-1.02.87-1.17a.88.88 0 0 0 0-1.68 1.2 1.2 0 0 1-.87-1.17V8.9c0-.97-.8-1.76-1.77-1.77z" clipRule="evenodd" />
    </IconBase>
  ))
);

BracketsCurlyCircleFill.displayName = 'BracketsCurlyCircleFill';

// Triple export pattern (lucide-react style)
export { BracketsCurlyCircleFill, BracketsCurlyCircleFill as BracketsCurlyCircleFillIcon, BracketsCurlyCircleFill as SiBracketsCurlyCircleFill };
export default BracketsCurlyCircleFill;
export type { BracketsCurlyCircleFillProps };
