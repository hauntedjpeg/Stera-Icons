import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CheckBadgeFillProps = Omit<IconBaseProps, 'children'>;

const CheckBadgeFill = memo(
  forwardRef<SVGSVGElement, CheckBadgeFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.97 2.8c1.12-1.13 2.94-1.13 4.06 0l.93.93q.33.31.8.32h1.31c1.59 0 2.88 1.3 2.88 2.88v1.31q0 .47.33.8l.92.93c1.13 1.12 1.13 2.94 0 4.06l-.92.93q-.32.33-.33.8v1.31c0 1.59-1.3 2.88-2.88 2.88h-1.31q-.47 0-.8.33l-.93.92c-1.12 1.13-2.94 1.13-4.06 0l-.93-.92q-.33-.32-.8-.33H6.93c-1.59 0-2.88-1.29-2.88-2.88v-1.31q0-.47-.33-.8l-.92-.93c-1.13-1.12-1.13-2.94 0-4.06l.92-.93q.33-.33.33-.8V6.93c0-1.59 1.3-2.88 2.88-2.88h1.31q.47 0 .8-.32zm6.14 6.33c-.34-.34-.9-.34-1.23 0l-4.22 4.29-1.46-1.93c-.3-.38-.85-.46-1.23-.16-.38.29-.46.84-.17 1.22l1.52 2 .28.35c.1.1.26.26.48.35q.46.2.93.06c.23-.07.4-.2.52-.3q.16-.13.32-.3l4.27-4.35c.34-.34.34-.9 0-1.23" clipRule="evenodd" />
    </IconBase>
  ))
);

CheckBadgeFill.displayName = 'CheckBadgeFill';

// Triple export pattern
export { CheckBadgeFill, CheckBadgeFill as CheckBadgeFillIcon, CheckBadgeFill as SiCheckBadgeFill };
export default CheckBadgeFill;
export type { CheckBadgeFillProps };
