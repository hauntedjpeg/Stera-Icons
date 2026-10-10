import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CentRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CentRegularDuotone = memo(
  forwardRef<SVGSVGElement, CentRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.25 19.14q.75.13 1.5.1V22c0 .41-.34.75-.75.75s-.75-.34-.75-.75zM11.25 6.39q.75-.17 1.5-.13v11.48q-.75.04-1.5-.13zM12 1.25c.41 0 .75.34.75.75v2.75q-.75-.02-1.5.1V2c0-.41.34-.75.75-.75" opacity={0.4} />
        <path d="M9.46 5.42c1.32-.61 2.8-.8 4.22-.57 1.44.24 2.77.9 3.82 1.9.3.29.31.76.03 1.06s-.77.31-1.06.03c-.84-.8-1.9-1.32-3.03-1.51-1.14-.2-2.3-.03-3.35.45S8.17 8.05 7.57 9.04s-.88 2.13-.81 3.28.47 2.26 1.17 3.17 1.66 1.6 2.75 1.97c1.1.36 2.28.39 3.39.07 1.1-.31 2.1-.95 2.83-1.83.27-.32.74-.36 1.06-.1.32.27.36.74.1 1.06-.94 1.11-2.19 1.92-3.59 2.32s-2.88.36-4.26-.1-2.59-1.32-3.47-2.48c-.88-1.15-1.4-2.54-1.48-4-.08-1.45.28-2.89 1.03-4.13.74-1.25 1.85-2.24 3.17-2.85" />
    </IconBase>
  ))
);

CentRegularDuotone.displayName = 'CentRegularDuotone';

// Triple export pattern
export { CentRegularDuotone, CentRegularDuotone as CentRegularDuotoneIcon, CentRegularDuotone as SiCentRegularDuotone };
export default CentRegularDuotone;
export type { CentRegularDuotoneProps };
