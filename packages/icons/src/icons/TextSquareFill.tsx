import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextSquareFillProps = Omit<IconBaseProps, 'children'>;

const TextSquareFill = memo(
  forwardRef<SVGSVGElement, TextSquareFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13.6 3.13q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v3.2q.01 1.64-.05 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05h-3.2q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7v-3.2q-.02-1.64.06-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zm-4.52 4.5c-.94 0-1.7.76-1.7 1.7a.87.87 0 0 0 1.74.04h1.21c.44 0 .8.36.8.8v4.16a.8.8 0 0 1-.8.8.87.87 0 0 0-.72 1.36c.15.23.42.39.72.39h3.34a.9.9 0 0 0 .72-.4.87.87 0 0 0-.63-1.35h-.1a.8.8 0 0 1-.79-.8v-4.16c0-.44.36-.8.8-.8h1.21a.87.87 0 0 0 1.74-.04c0-.94-.76-1.7-1.7-1.7z" clipRule="evenodd" />
    </IconBase>
  ))
);

TextSquareFill.displayName = 'TextSquareFill';

// Triple export pattern (lucide-react style)
export { TextSquareFill, TextSquareFill as TextSquareFillIcon, TextSquareFill as SiTextSquareFill };
export default TextSquareFill;
export type { TextSquareFillProps };
