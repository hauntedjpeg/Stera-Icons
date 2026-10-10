import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleSlashFillProps = Omit<IconBaseProps, 'children'>;

const CircleSlashFill = memo(
  forwardRef<SVGSVGElement, CircleSlashFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.66 4.43c3.88-3.26 9.67-3.06 13.32.59s3.85 9.44.6 13.31zM18.34 19.57c-3.88 3.26-9.68 3.06-13.32-.59s-3.85-9.44-.6-13.32z" />
    </IconBase>
  ))
);

CircleSlashFill.displayName = 'CircleSlashFill';

// Triple export pattern
export { CircleSlashFill, CircleSlashFill as CircleSlashFillIcon, CircleSlashFill as SiCircleSlashFill };
export default CircleSlashFill;
export type { CircleSlashFillProps };
