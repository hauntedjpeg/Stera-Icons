import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleSlashBoldProps = Omit<IconBaseProps, 'children'>;

const CircleSlashBold = memo(
  forwardRef<SVGSVGElement, CircleSlashBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M4.93 4.93c3.9-3.9 10.24-3.9 14.14 0s3.9 10.24 0 14.14-10.24 3.9-14.14 0-3.9-10.24 0-14.14m.75 2.17c-2.44 3.13-2.22 7.67.66 10.56 2.89 2.88 7.43 3.1 10.57.66zm11.98-.76c-2.89-2.88-7.43-3.1-10.56-.66l11.22 11.23c2.44-3.14 2.22-7.68-.66-10.57" clipRule="evenodd" />
    </IconBase>
  ))
);

CircleSlashBold.displayName = 'CircleSlashBold';

// Triple export pattern
export { CircleSlashBold, CircleSlashBold as CircleSlashBoldIcon, CircleSlashBold as SiCircleSlashBold };
export default CircleSlashBold;
export type { CircleSlashBoldProps };
