import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EyeOffFillProps = Omit<IconBaseProps, 'children'>;

const EyeOffFill = memo(
  forwardRef<SVGSVGElement, EyeOffFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.38 3.38c.34-.34.9-.34 1.24 0l16 16c.34.34.34.9 0 1.24s-.9.34-1.24 0l-16-16c-.34-.34-.34-.9 0-1.24M15.7 19.24q-1.75.62-3.7.63c-4.87 0-9-3.13-10.8-7.54q-.15-.33 0-.66c.64-1.59 1.59-3 2.76-4.17zM12 4.12c4.87 0 9 3.14 10.81 7.55q.13.33 0 .66c-.65 1.58-1.6 3-2.77 4.17L8.29 4.76q1.76-.63 3.71-.64" />
    </IconBase>
  ))
);

EyeOffFill.displayName = 'EyeOffFill';

// Triple export pattern
export { EyeOffFill, EyeOffFill as EyeOffFillIcon, EyeOffFill as SiEyeOffFill };
export default EyeOffFill;
export type { EyeOffFillProps };
