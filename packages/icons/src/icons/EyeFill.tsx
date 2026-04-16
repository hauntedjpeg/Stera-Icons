import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EyeFillProps = Omit<IconBaseProps, 'children'>;

const EyeFill = memo(
  forwardRef<SVGSVGElement, EyeFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 4.13c4.87 0 9 3.13 10.81 7.54q.14.33 0 .66c-1.8 4.41-5.94 7.55-10.81 7.55s-9-3.14-10.81-7.55a1 1 0 0 1 0-.66C2.99 7.26 7.13 4.13 12 4.13m0 4.37a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7" clipRule="evenodd" />
    </IconBase>
  ))
);

EyeFill.displayName = 'EyeFill';

// Triple export pattern (lucide-react style)
export { EyeFill, EyeFill as EyeFillIcon, EyeFill as SiEyeFill };
export default EyeFill;
export type { EyeFillProps };
