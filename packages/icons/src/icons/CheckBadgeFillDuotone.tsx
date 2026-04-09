import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CheckBadgeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CheckBadgeFillDuotone = memo(
  forwardRef<SVGSVGElement, CheckBadgeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="check-badge-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M9.97 2.8a2.9 2.9 0 0 1 4.06 0l.93.92q.33.32.8.33h1.31a2.9 2.9 0 0 1 2.88 2.88v1.31q0 .47.32.8l.93.93a2.9 2.9 0 0 1 0 4.06l-.93.93q-.31.33-.32.8v1.31a2.87 2.87 0 0 1-2.88 2.88h-1.31q-.47 0-.8.33l-.93.92a2.9 2.9 0 0 1-4.06 0l-.93-.92q-.33-.33-.8-.33H6.93a2.9 2.9 0 0 1-2.88-2.88v-1.31q0-.47-.33-.8l-.92-.93a2.9 2.9 0 0 1 0-4.06l.92-.93q.32-.33.33-.8V6.93a2.9 2.9 0 0 1 2.88-2.88h1.31q.47 0 .8-.33zm6.14 6.33a.9.9 0 0 0-1.23 0l-4.22 4.29-1.46-1.93a.88.88 0 0 0-1.4 1.06l1.52 2 .28.35c.1.1.26.25.48.35a1.4 1.4 0 0 0 1.45-.23l.32-.31 4.27-4.35a.9.9 0 0 0 0-1.23" clipRule="evenodd" opacity={.4} />
        <path d="M14.88 9.14a.88.88 0 0 1 1.24 1.22l-4.27 4.35q-.16.16-.32.3c-.12.1-.29.23-.52.3q-.47.14-.93-.06a1.4 1.4 0 0 1-.48-.35q-.15-.17-.28-.35l-1.52-2a.87.87 0 0 1 1.4-1.06l1.46 1.93z" />
    </IconBase>
  ))
);

CheckBadgeFillDuotone.displayName = 'CheckBadgeFillDuotone';

// Triple export pattern (lucide-react style)
export { CheckBadgeFillDuotone, CheckBadgeFillDuotone as CheckBadgeFillDuotoneIcon, CheckBadgeFillDuotone as SiCheckBadgeFillDuotone };
export default CheckBadgeFillDuotone;
export type { CheckBadgeFillDuotoneProps };
