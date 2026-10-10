import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleSlashBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleSlashBoldDuotone = memo(
  forwardRef<SVGSVGElement, CircleSlashBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.32 16.9q-.3.4-.66.76t-.76.66L5.68 7.1q.3-.4.66-.76t.76-.66z" opacity={.4} />
        <path fillRule="evenodd" d="M4.93 4.93c3.9-3.9 10.24-3.9 14.14 0s3.9 10.24 0 14.14-10.24 3.9-14.14 0-3.9-10.24 0-14.14m12.73 1.41c-3.13-3.12-8.2-3.12-11.32 0s-3.12 8.2 0 11.32 8.2 3.12 11.32 0 3.12-8.2 0-11.32" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleSlashBoldDuotone.displayName = 'CircleSlashBoldDuotone';

// Triple export pattern
export { CircleSlashBoldDuotone, CircleSlashBoldDuotone as CircleSlashBoldDuotoneIcon, CircleSlashBoldDuotone as SiCircleSlashBoldDuotone };
export default CircleSlashBoldDuotone;
export type { CircleSlashBoldDuotoneProps };
