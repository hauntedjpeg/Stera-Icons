import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CheckCircleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CheckCircleFillDuotone = memo(
  forwardRef<SVGSVGElement, CheckCircleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2.13c5.45 0 9.88 4.42 9.88 9.87s-4.43 9.88-9.88 9.88S2.13 17.45 2.13 12 6.55 2.13 12 2.13m4.6 6.48c-.37-.33-.92-.3-1.24.05l-4.83 5.26-1.86-2.23c-.3-.37-.86-.42-1.23-.11-.37.3-.42.86-.11 1.23l1.91 2.3.3.33c.1.1.26.25.49.34q.46.16.92.02c.23-.08.4-.21.5-.31l.31-.32 4.88-5.33c.33-.35.3-.9-.05-1.23" clipRule="evenodd" opacity={.4} />
        <path d="M15.36 8.66c.32-.36.87-.38 1.23-.05.36.32.38.88.05 1.23l-4.88 5.33-.3.32c-.11.1-.28.23-.51.3q-.47.15-.92-.01-.34-.16-.5-.34l-.29-.33-1.91-2.3c-.31-.37-.26-.92.11-1.23s.92-.26 1.23.11l1.86 2.23z" />
    </IconBase>
  ))
);

CheckCircleFillDuotone.displayName = 'CheckCircleFillDuotone';

// Triple export pattern
export { CheckCircleFillDuotone, CheckCircleFillDuotone as CheckCircleFillDuotoneIcon, CheckCircleFillDuotone as SiCheckCircleFillDuotone };
export default CheckCircleFillDuotone;
export type { CheckCircleFillDuotoneProps };
