import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EyeOffFillProps = Omit<IconBaseProps, 'children'>;

const EyeOffFill = memo(
  forwardRef<SVGSVGElement, EyeOffFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.38 3.38a.9.9 0 0 1 1.24 0l16 16a.88.88 0 0 1-1.24 1.24l-16-16a.9.9 0 0 1 0-1.24M15.7 19.24q-1.75.62-3.7.63c-4.87 0-9-3.13-10.8-7.54a1 1 0 0 1 0-.66c.64-1.59 1.59-3 2.76-4.17zM12 4.12c4.87 0 9 3.14 10.81 7.55q.13.33 0 .66c-.65 1.58-1.6 3-2.77 4.17L8.29 4.76q1.76-.63 3.71-.64" />
    </IconBase>
  ))
);

EyeOffFill.displayName = 'EyeOffFill';

// Triple export pattern (lucide-react style)
export { EyeOffFill, EyeOffFill as EyeOffFillIcon, EyeOffFill as SiEyeOffFill };
export default EyeOffFill;
export type { EyeOffFillProps };
