import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PillRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const PillRegularDuotone = memo(
  forwardRef<SVGSVGElement, PillRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.97 3.97c1.95-1.95 5.11-1.95 7.06 0s1.95 5.11 0 7.06L16.06 15 15 13.94l3.97-3.97c1.36-1.36 1.36-3.58 0-4.94s-3.58-1.36-4.94 0L10.06 9 9 7.94z" opacity={.4} />
        <path fillRule="evenodd" d="m16.06 15-5.03 5.03c-1.95 1.95-5.11 1.95-7.06 0s-1.95-5.11 0-7.06L9 7.94zm-11.03-.97c-1.36 1.36-1.36 3.58 0 4.94s3.58 1.36 4.94 0L13.94 15 9 10.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

PillRegularDuotone.displayName = 'PillRegularDuotone';

// Triple export pattern
export { PillRegularDuotone, PillRegularDuotone as PillRegularDuotoneIcon, PillRegularDuotone as SiPillRegularDuotone };
export default PillRegularDuotone;
export type { PillRegularDuotoneProps };
