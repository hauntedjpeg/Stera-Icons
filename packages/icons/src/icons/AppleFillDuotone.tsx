import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AppleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const AppleFillDuotone = memo(
  forwardRef<SVGSVGElement, AppleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.64 6.37c2.21-1.15 4.33-.1 5.74 1.32q.26.25.62.25t.62-.25c1.4-1.42 3.53-2.47 5.74-1.32q1.33.72 1.64 2.4c.23 1.13.13 2.51-.19 3.96-.31 1.43-.83 2.86-1.4 4.06-.58 1.22-1.17 2.13-1.59 2.55-1.03 1.05-2.3.94-3.27.3-.47-.32-1.03-.46-1.55-.46s-1.08.14-1.55.45c-.97.65-2.24.76-3.27-.29-.42-.42-1-1.33-1.59-2.55-.57-1.2-1.09-2.63-1.4-4.06-.32-1.45-.42-2.83-.19-3.96q.31-1.68 1.64-2.4" opacity={.4} />
        <path fillRule="evenodd" d="M13.68 1.19c.44-.18.95.04 1.13.48.18.45-.04.96-.48 1.14-.63.25-1.06.89-1.3 1.78q-.08.32-.13.64c1.66-1.06 3.89-1.65 6.27-.4 1.48.77 2.25 2.1 2.54 3.6.3 1.45.16 3.1-.19 4.68s-.91 3.13-1.53 4.43c-.61 1.29-1.3 2.4-1.92 3.03-1.76 1.78-4 1.52-5.5.52q-.2-.14-.57-.15t-.57.15c-1.5 1-3.74 1.26-5.5-.52-.62-.63-1.31-1.74-1.92-3.03-.62-1.3-1.19-2.86-1.53-4.43s-.49-3.23-.2-4.69c.3-1.48 1.07-2.82 2.55-3.6 2.4-1.25 4.64-.64 6.3.43q.07-.55.21-1.12c.3-1.11.96-2.4 2.34-2.94m4.68 5.18c-2.21-1.15-4.33-.1-5.74 1.32q-.26.24-.62.25-.36 0-.62-.25c-1.4-1.42-3.53-2.47-5.74-1.32-.9.47-1.42 1.29-1.64 2.4-.23 1.13-.13 2.51.19 3.96.31 1.43.83 2.86 1.4 4.06.58 1.22 1.17 2.13 1.6 2.55 1.02 1.05 2.3.94 3.26.3.47-.32 1.03-.45 1.55-.45s1.08.13 1.55.44c.97.65 2.24.76 3.27-.29.42-.42 1-1.33 1.59-2.55.57-1.2 1.09-2.63 1.4-4.06.32-1.45.42-2.83.19-3.96q-.31-1.67-1.64-2.4" clipRule="evenodd" />
    </IconBase>
  ))
);

AppleFillDuotone.displayName = 'AppleFillDuotone';

// Triple export pattern
export { AppleFillDuotone, AppleFillDuotone as AppleFillDuotoneIcon, AppleFillDuotone as SiAppleFillDuotone };
export default AppleFillDuotone;
export type { AppleFillDuotoneProps };
