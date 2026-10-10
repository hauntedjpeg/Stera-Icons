import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AppleFillProps = Omit<IconBaseProps, 'children'>;

const AppleFill = memo(
  forwardRef<SVGSVGElement, AppleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.68 1.19c.44-.18.95.04 1.13.48.18.45-.04.96-.48 1.14-.63.25-1.06.89-1.3 1.78q-.08.32-.13.64c1.66-1.06 3.89-1.65 6.27-.4 1.48.77 2.25 2.1 2.54 3.6.3 1.45.16 3.1-.19 4.68s-.91 3.13-1.53 4.43c-.61 1.29-1.3 2.4-1.92 3.03-1.76 1.78-4 1.52-5.5.52q-.2-.14-.57-.15t-.57.15c-1.5 1-3.74 1.26-5.5-.52-.62-.63-1.31-1.74-1.92-3.03-.62-1.3-1.19-2.86-1.53-4.43s-.49-3.23-.2-4.69c.3-1.48 1.07-2.82 2.55-3.6 2.4-1.25 4.64-.64 6.3.43q.07-.55.21-1.12c.3-1.11.96-2.4 2.34-2.94" />
    </IconBase>
  ))
);

AppleFill.displayName = 'AppleFill';

// Triple export pattern
export { AppleFill, AppleFill as AppleFillIcon, AppleFill as SiAppleFill };
export default AppleFill;
export type { AppleFillProps };
