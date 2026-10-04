import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AppleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AppleFillDuotone = memo(
  forwardRef<SVGSVGElement, AppleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.64 6.37c2.21-1.15 4.33-.1 5.74 1.32a.9.9 0 0 0 1.24 0c1.4-1.42 3.53-2.47 5.74-1.32q1.33.72 1.64 2.4a10 10 0 0 1-.19 3.96 20 20 0 0 1-1.4 4.06 10 10 0 0 1-1.59 2.55c-1.03 1.05-2.3.94-3.27.3a3 3 0 0 0-1.55-.46 3 3 0 0 0-1.55.45c-.97.65-2.24.76-3.27-.29A10 10 0 0 1 5.6 16.8a20 20 0 0 1-1.4-4.06A10 10 0 0 1 4 8.77q.31-1.68 1.64-2.4" opacity={.4} />
        <path fillRule="evenodd" d="M13.68 1.19a.88.88 0 0 1 .65 1.62c-.63.25-1.06.89-1.3 1.78q-.08.32-.13.64a6 6 0 0 1 6.27-.4 5 5 0 0 1 2.54 3.6c.3 1.45.16 3.1-.19 4.68A21 21 0 0 1 20 17.54c-.61 1.29-1.3 2.4-1.92 3.03a4.2 4.2 0 0 1-5.5.52 1 1 0 0 0-.57-.15q-.37 0-.57.15a4.2 4.2 0 0 1-5.5-.52 12 12 0 0 1-1.92-3.03 21 21 0 0 1-1.53-4.43 12 12 0 0 1-.2-4.69 5 5 0 0 1 2.55-3.6c2.4-1.25 4.64-.64 6.3.43q.07-.55.21-1.12c.3-1.11.96-2.4 2.34-2.94m4.68 5.18c-2.21-1.15-4.33-.1-5.74 1.32a.9.9 0 0 1-1.24 0c-1.4-1.42-3.53-2.47-5.74-1.32-.9.47-1.42 1.29-1.64 2.4a10 10 0 0 0 .19 3.96 20 20 0 0 0 1.4 4.06 10 10 0 0 0 1.6 2.55c1.02 1.05 2.3.94 3.26.3a3 3 0 0 1 1.55-.45c.52 0 1.08.13 1.55.44.97.65 2.24.76 3.27-.29.42-.42 1-1.33 1.59-2.55a20 20 0 0 0 1.4-4.06c.32-1.45.42-2.83.19-3.96q-.31-1.67-1.64-2.4" clipRule="evenodd" />
    </IconBase>
  ))
);

AppleFillDuotone.displayName = 'AppleFillDuotone';

// Triple export pattern (lucide-react style)
export { AppleFillDuotone, AppleFillDuotone as AppleFillDuotoneIcon, AppleFillDuotone as SiAppleFillDuotone };
export default AppleFillDuotone;
export type { AppleFillDuotoneProps };
