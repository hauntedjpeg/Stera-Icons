import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EyeFillProps = Omit<IconBaseProps, 'children'>;

const EyeFill = memo(
  forwardRef<SVGSVGElement, EyeFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 4.13c4.87 0 9 3.13 10.8 7.54q.15.33 0 .66c-1.8 4.41-5.93 7.55-10.8 7.55s-9-3.14-10.81-7.55q-.14-.33 0-.66c1.8-4.41 5.94-7.54 10.8-7.54m0 4.37c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5" clipRule="evenodd" />
    </IconBase>
  ))
);

EyeFill.displayName = 'EyeFill';

// Triple export pattern
export { EyeFill, EyeFill as EyeFillIcon, EyeFill as SiEyeFill };
export default EyeFill;
export type { EyeFillProps };
