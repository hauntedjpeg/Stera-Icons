import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EyeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const EyeFillDuotone = memo(
  forwardRef<SVGSVGElement, EyeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 4.13c4.87 0 9 3.13 10.81 7.54q.14.33 0 .66c-1.8 4.41-5.94 7.54-10.8 7.55-4.88 0-9.02-3.14-10.82-7.55q-.14-.33 0-.66C3 7.26 7.13 4.13 12 4.13m0 4.37c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5" clipRule="evenodd" opacity={.4} />
        <path d="M12 8.5c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5-3.5-1.57-3.5-3.5 1.57-3.5 3.5-3.5" />
    </IconBase>
  ))
);

EyeFillDuotone.displayName = 'EyeFillDuotone';

// Triple export pattern
export { EyeFillDuotone, EyeFillDuotone as EyeFillDuotoneIcon, EyeFillDuotone as SiEyeFillDuotone };
export default EyeFillDuotone;
export type { EyeFillDuotoneProps };
