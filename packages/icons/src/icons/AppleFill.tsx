import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AppleFillProps = Omit<IconBaseProps, 'children'>;

const AppleFill = memo(
  forwardRef<SVGSVGElement, AppleFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.68 1.19a.88.88 0 0 1 .65 1.62c-.63.25-1.06.89-1.3 1.78q-.08.32-.13.64a6 6 0 0 1 6.27-.4 5 5 0 0 1 2.54 3.6c.3 1.45.16 3.1-.19 4.68A21 21 0 0 1 20 17.54c-.61 1.29-1.3 2.4-1.92 3.03a4.2 4.2 0 0 1-5.5.52 1 1 0 0 0-.57-.15q-.37 0-.57.15a4.2 4.2 0 0 1-5.5-.52 12 12 0 0 1-1.92-3.03 21 21 0 0 1-1.53-4.43 12 12 0 0 1-.2-4.69 5 5 0 0 1 2.55-3.6c2.4-1.25 4.64-.64 6.3.43q.07-.55.21-1.12c.3-1.11.96-2.4 2.34-2.94" />
    </IconBase>
  ))
);

AppleFill.displayName = 'AppleFill';

// Triple export pattern (lucide-react style)
export { AppleFill, AppleFill as AppleFillIcon, AppleFill as SiAppleFill };
export default AppleFill;
export type { AppleFillProps };
