import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextSquareFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextSquareFillDuotone = memo(
  forwardRef<SVGSVGElement, TextSquareFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13.6 3.13q1.64-.01 2.7.05a5 5 0 0 1 1.91.48 5 5 0 0 1 2.13 2.13 5 5 0 0 1 .48 1.91c.06.71.05 1.6.05 2.7v3.2q.01 1.64-.05 2.7a5 5 0 0 1-.48 1.91 5 5 0 0 1-2.13 2.13 5 5 0 0 1-1.91.48c-.71.06-1.6.05-2.7.05h-3.2q-1.64.01-2.7-.05a5 5 0 0 1-1.91-.48 5 5 0 0 1-2.13-2.13 5 5 0 0 1-.48-1.91q-.07-1.06-.06-2.7v-3.2q-.02-1.64.06-2.7a5 5 0 0 1 .48-1.91 5 5 0 0 1 2.13-2.13 5 5 0 0 1 1.91-.48q1.06-.07 2.7-.06zm-4.52 4.5c-.94 0-1.7.76-1.7 1.7a.87.87 0 0 0 1.74.04h1.21c.44 0 .8.36.8.8v4.16a.8.8 0 0 1-.8.8 1 1 0 0 0-.41.1.88.88 0 0 0 .41 1.64h3.34a.87.87 0 0 0 .87-.87.9.9 0 0 0-.87-.87.8.8 0 0 1-.8-.8v-4.16c0-.44.36-.8.8-.8h1.21a.87.87 0 0 0 1.74-.04c0-.94-.76-1.7-1.7-1.7z" clipRule="evenodd" opacity={.4} />
        <path d="M14.92 7.63c.94 0 1.7.76 1.7 1.7a.88.88 0 0 1-1.74.04h-1.21a.8.8 0 0 0-.8.8v4.16c0 .44.36.8.8.8a.9.9 0 0 1 .87.87.87.87 0 0 1-.87.88h-3.34a.88.88 0 0 1 0-1.75.8.8 0 0 0 .8-.8v-4.16a.8.8 0 0 0-.8-.8h-1.2a.87.87 0 0 1-1.76-.04c0-.94.77-1.7 1.71-1.7z" />
    </IconBase>
  ))
);

TextSquareFillDuotone.displayName = 'TextSquareFillDuotone';

// Triple export pattern (lucide-react style)
export { TextSquareFillDuotone, TextSquareFillDuotone as TextSquareFillDuotoneIcon, TextSquareFillDuotone as SiTextSquareFillDuotone };
export default TextSquareFillDuotone;
export type { TextSquareFillDuotoneProps };
