import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type EyeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const EyeFillDuotone = memo(
  forwardRef<SVGSVGElement, EyeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="eye-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M12 4.13c4.87 0 9 3.13 10.81 7.54q.14.33 0 .66c-1.8 4.41-5.94 7.54-10.8 7.55-4.88 0-9.02-3.14-10.82-7.55a1 1 0 0 1 0-.66C3 7.26 7.13 4.13 12 4.13m0 4.37a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7" clipRule="evenodd" opacity={.4} />
        <path d="M12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7" />
    </IconBase>
  ))
);

EyeFillDuotone.displayName = 'EyeFillDuotone';

// Triple export pattern (lucide-react style)
export { EyeFillDuotone, EyeFillDuotone as EyeFillDuotoneIcon, EyeFillDuotone as SiEyeFillDuotone };
export default EyeFillDuotone;
export type { EyeFillDuotoneProps };
