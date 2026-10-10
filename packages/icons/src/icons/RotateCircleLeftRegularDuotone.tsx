import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RotateCircleLeftRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const RotateCircleLeftRegularDuotone = memo(
  forwardRef<SVGSVGElement, RotateCircleLeftRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" opacity={.4} />
        <path d="M9.97 6.47c.3-.3.77-.3 1.06 0s.3.77 0 1.06L9.81 8.75h2.44c2.49 0 4.5 2.01 4.5 4.5 0 2.48-2.01 4.5-4.5 4.5-1.52 0-2.86-.75-3.68-1.9-.23-.34-.15-.8.18-1.05.34-.24.81-.16 1.05.18.54.77 1.44 1.27 2.45 1.27 1.66 0 3-1.34 3-3s-1.34-3-3-3H9.81l1.22 1.22c.3.3.3.77 0 1.06s-.77.3-1.06 0L7.54 10.1c-.33-.33-.33-.87 0-1.2z" />
    </IconBase>
  ))
);

RotateCircleLeftRegularDuotone.displayName = 'RotateCircleLeftRegularDuotone';

// Triple export pattern
export { RotateCircleLeftRegularDuotone, RotateCircleLeftRegularDuotone as RotateCircleLeftRegularDuotoneIcon, RotateCircleLeftRegularDuotone as SiRotateCircleLeftRegularDuotone };
export default RotateCircleLeftRegularDuotone;
export type { RotateCircleLeftRegularDuotoneProps };
