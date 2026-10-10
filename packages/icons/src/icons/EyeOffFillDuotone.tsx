import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EyeOffFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const EyeOffFillDuotone = memo(
  forwardRef<SVGSVGElement, EyeOffFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.3 18.54c-1.6.85-3.39 1.33-5.3 1.34-4.87 0-9-3.14-10.8-7.55q-.15-.33 0-.66c.85-2.1 2.24-3.92 4-5.24zM12 4.13c4.87 0 9 3.13 10.81 7.54q.14.33 0 .66c-.86 2.1-2.25 3.92-4 5.24L6.7 5.47c1.58-.86 3.38-1.34 5.3-1.34" opacity={0.4} />
        <path d="M3.38 3.38c.34-.34.9-.34 1.24 0l16 16c.34.34.34.9 0 1.24s-.9.34-1.24 0l-16-16c-.34-.34-.34-.9 0-1.24" />
    </IconBase>
  ))
);

EyeOffFillDuotone.displayName = 'EyeOffFillDuotone';

// Triple export pattern
export { EyeOffFillDuotone, EyeOffFillDuotone as EyeOffFillDuotoneIcon, EyeOffFillDuotone as SiEyeOffFillDuotone };
export default EyeOffFillDuotone;
export type { EyeOffFillDuotoneProps };
