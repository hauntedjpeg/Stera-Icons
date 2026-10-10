import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TargetBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TargetBoldDuotone = memo(
  forwardRef<SVGSVGElement, TargetBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 5.5c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5-6.5-2.91-6.5-6.5S8.41 5.5 12 5.5m0 2c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5" clipRule="evenodd" opacity={.4} />
        <path d="M12 9.38c1.45 0 2.63 1.17 2.63 2.62s-1.18 2.63-2.63 2.63S9.38 13.45 9.38 12 10.55 9.38 12 9.38" />
        <path fillRule="evenodd" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8" clipRule="evenodd" />
    </IconBase>
  ))
);

TargetBoldDuotone.displayName = 'TargetBoldDuotone';

// Triple export pattern
export { TargetBoldDuotone, TargetBoldDuotone as TargetBoldDuotoneIcon, TargetBoldDuotone as SiTargetBoldDuotone };
export default TargetBoldDuotone;
export type { TargetBoldDuotoneProps };
