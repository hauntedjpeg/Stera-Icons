import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleSlashFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleSlashFillDuotone = memo(
  forwardRef<SVGSVGElement, CircleSlashFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M18.33 19.57c-3.88 3.26-9.67 3.06-13.31-.59s-3.85-9.44-.6-13.32zM5.66 4.43c3.88-3.26 9.67-3.06 13.32.59s3.85 9.43.6 13.31z" opacity={0.4} />
        <path d="M19.57 18.34q-.27.33-.59.64-.3.3-.64.6L4.43 5.65q.27-.33.59-.64.3-.3.64-.6z" />
    </IconBase>
  ))
);

CircleSlashFillDuotone.displayName = 'CircleSlashFillDuotone';

// Triple export pattern
export { CircleSlashFillDuotone, CircleSlashFillDuotone as CircleSlashFillDuotoneIcon, CircleSlashFillDuotone as SiCircleSlashFillDuotone };
export default CircleSlashFillDuotone;
export type { CircleSlashFillDuotoneProps };
