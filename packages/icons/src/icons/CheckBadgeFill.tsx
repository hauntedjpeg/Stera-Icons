import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CheckBadgeFillProps = Omit<IconBaseProps, 'children'>;

const CheckBadgeFill = memo(
  forwardRef<SVGSVGElement, CheckBadgeFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.97 2.8a2.9 2.9 0 0 1 4.06 0l.93.93q.33.31.8.32h1.31a2.9 2.9 0 0 1 2.88 2.88v1.31q0 .47.33.8l.92.93a2.9 2.9 0 0 1 0 4.06l-.92.93q-.32.33-.33.8v1.31a2.9 2.9 0 0 1-2.88 2.88h-1.31q-.47 0-.8.33l-.93.92a2.9 2.9 0 0 1-4.06 0l-.93-.92q-.33-.32-.8-.33H6.93a2.9 2.9 0 0 1-2.88-2.88v-1.31q0-.47-.33-.8l-.92-.93a2.9 2.9 0 0 1 0-4.06l.92-.93q.33-.33.33-.8V6.93a2.87 2.87 0 0 1 2.88-2.88h1.31q.47 0 .8-.32zm6.14 6.33a.9.9 0 0 0-1.23 0l-4.22 4.29-1.46-1.93a.88.88 0 0 0-1.4 1.06l1.52 2 .28.35c.1.1.26.26.48.35q.46.2.93.06c.23-.07.4-.2.52-.3q.16-.13.32-.3l4.27-4.35a.9.9 0 0 0 0-1.23" clipRule="evenodd" />
    </IconBase>
  ))
);

CheckBadgeFill.displayName = 'CheckBadgeFill';

// Triple export pattern (lucide-react style)
export { CheckBadgeFill, CheckBadgeFill as CheckBadgeFillIcon, CheckBadgeFill as SiCheckBadgeFill };
export default CheckBadgeFill;
export type { CheckBadgeFillProps };
