import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EyeOffFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const EyeOffFillDuotone = memo(
  forwardRef<SVGSVGElement, EyeOffFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17.3 18.54a11 11 0 0 1-5.3 1.34c-4.87 0-9-3.14-10.8-7.55a1 1 0 0 1 0-.66c.85-2.1 2.24-3.92 4-5.24zM12 4.13c4.87 0 9 3.13 10.81 7.54q.13.33 0 .66a12.5 12.5 0 0 1-4 5.24L6.7 5.47A11 11 0 0 1 12 4.12" opacity={0.4} />
        <path d="M3.38 3.38a.9.9 0 0 1 1.24 0l16 16a.88.88 0 0 1-1.24 1.24l-16-16a.9.9 0 0 1 0-1.24" />
    </IconBase>
  ))
);

EyeOffFillDuotone.displayName = 'EyeOffFillDuotone';

// Triple export pattern (lucide-react style)
export { EyeOffFillDuotone, EyeOffFillDuotone as EyeOffFillDuotoneIcon, EyeOffFillDuotone as SiEyeOffFillDuotone };
export default EyeOffFillDuotone;
export type { EyeOffFillDuotoneProps };
