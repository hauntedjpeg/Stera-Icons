import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleSlashFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const CircleSlashFillDuotone = memo(
  forwardRef<SVGSVGElement, CircleSlashFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-slash-fill-duotone" {...props}>
      <path d="M18.33 19.57a9.87 9.87 0 0 1-13.9-13.9zM5.66 4.43a9.88 9.88 0 0 1 13.91 13.9z" opacity={0.4} />
        <path d="M19.57 18.34a10 10 0 0 1-1.23 1.23L4.43 5.67a10 10 0 0 1 1.23-1.24z" />
    </IconBase>
  ))
);

CircleSlashFillDuotone.displayName = 'CircleSlashFillDuotone';

// Triple export pattern (lucide-react style)
export { CircleSlashFillDuotone, CircleSlashFillDuotone as CircleSlashFillDuotoneIcon, CircleSlashFillDuotone as SiCircleSlashFillDuotone };
export default CircleSlashFillDuotone;
export type { CircleSlashFillDuotoneProps };
