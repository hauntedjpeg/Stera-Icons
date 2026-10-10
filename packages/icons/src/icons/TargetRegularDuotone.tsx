import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TargetRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TargetRegularDuotone = memo(
  forwardRef<SVGSVGElement, TargetRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 5.75c3.45 0 6.25 2.8 6.25 6.25s-2.8 6.25-6.25 6.25-6.25-2.8-6.25-6.25S8.55 5.75 12 5.75m0 1.5c-2.62 0-4.75 2.13-4.75 4.75s2.13 4.75 4.75 4.75 4.75-2.13 4.75-4.75S14.62 7.25 12 7.25" clipRule="evenodd" opacity={.4} />
        <path d="M12 9.63c1.31 0 2.38 1.06 2.38 2.37S13.3 14.38 12 14.38 9.63 13.3 9.63 12 10.69 9.63 12 9.63" />
        <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" />
    </IconBase>
  ))
);

TargetRegularDuotone.displayName = 'TargetRegularDuotone';

// Triple export pattern
export { TargetRegularDuotone, TargetRegularDuotone as TargetRegularDuotoneIcon, TargetRegularDuotone as SiTargetRegularDuotone };
export default TargetRegularDuotone;
export type { TargetRegularDuotoneProps };
