import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CircleSlashFillProps = Omit<IconBaseProps, 'children'>;

const CircleSlashFill = memo(
  forwardRef<SVGSVGElement, CircleSlashFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="circle-slash-fill" {...props}>
      <path d="M5.66 4.43a9.87 9.87 0 0 1 13.91 13.9zM18.34 19.57A9.87 9.87 0 0 1 4.43 5.67z" />
    </IconBase>
  ))
);

CircleSlashFill.displayName = 'CircleSlashFill';

// Triple export pattern (lucide-react style)
export { CircleSlashFill, CircleSlashFill as CircleSlashFillIcon, CircleSlashFill as SiCircleSlashFill };
export default CircleSlashFill;
export type { CircleSlashFillProps };
