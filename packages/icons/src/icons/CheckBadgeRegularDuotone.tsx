import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CheckBadgeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CheckBadgeRegularDuotone = memo(
  forwardRef<SVGSVGElement, CheckBadgeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.06 2.88c1.07-1.07 2.81-1.07 3.89 0l.92.93q.38.37.89.37h1.31c1.52 0 2.75 1.23 2.75 2.75v1.31q0 .51.37.89l.93.93c1.07 1.07 1.07 2.81 0 3.88l-.93.93q-.37.38-.37.89v1.31c0 1.52-1.23 2.75-2.75 2.75h-1.31q-.51 0-.89.37l-.92.93c-1.08 1.07-2.82 1.07-3.9 0l-.92-.93q-.37-.36-.89-.37H6.93c-1.52 0-2.75-1.23-2.75-2.75v-1.31q0-.51-.37-.89l-.93-.93c-1.07-1.07-1.07-2.81 0-3.88l.93-.93q.36-.38.37-.89V6.93c0-1.52 1.23-2.75 2.75-2.75h1.31q.52 0 .89-.37zm2.82 1.06c-.48-.48-1.28-.48-1.76 0l-.93.93c-.52.52-1.22.8-1.95.8H6.93c-.7 0-1.25.57-1.25 1.26v1.31c0 .73-.3 1.43-.8 1.95l-.94.93c-.48.48-.48 1.28 0 1.76l.93.93c.52.52.8 1.22.8 1.95v1.31c.01.7.57 1.25 1.26 1.25h1.31c.73 0 1.43.3 1.95.8l.93.94c.49.48 1.28.48 1.76 0l.93-.93c.52-.52 1.22-.8 1.95-.8h1.31c.7 0 1.25-.57 1.25-1.26v-1.31c0-.73.3-1.43.8-1.95l.94-.93c.48-.48.48-1.28 0-1.76l-.93-.93c-.52-.52-.8-1.22-.8-1.95V6.93c0-.7-.57-1.25-1.26-1.25h-1.31c-.73 0-1.43-.3-1.95-.8z" clipRule="evenodd" opacity={.4} />
        <path d="M14.97 9.22c.29-.3.76-.3 1.06 0 .3.29.3.76 0 1.06l-4.27 4.34q-.16.16-.31.3-.16.16-.48.27-.43.12-.84-.05-.3-.15-.43-.33-.15-.16-.28-.34l-1.52-2c-.25-.32-.18-.8.15-1.04.33-.25.8-.2 1.05.14l1.52 2 .03.04.04-.04z" />
    </IconBase>
  ))
);

CheckBadgeRegularDuotone.displayName = 'CheckBadgeRegularDuotone';

// Triple export pattern
export { CheckBadgeRegularDuotone, CheckBadgeRegularDuotone as CheckBadgeRegularDuotoneIcon, CheckBadgeRegularDuotone as SiCheckBadgeRegularDuotone };
export default CheckBadgeRegularDuotone;
export type { CheckBadgeRegularDuotoneProps };
