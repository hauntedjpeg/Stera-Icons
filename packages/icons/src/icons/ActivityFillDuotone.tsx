import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ActivityFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ActivityFillDuotone = memo(
  forwardRef<SVGSVGElement, ActivityFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 10.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-2.46l-2.64 7.03c-.22.6-.8.99-1.44.97s-1.2-.44-1.4-1.05l-2.5-8 2.87-.9 1.2 3.83 1.16-3.1c.4-1.07 1.43-1.78 2.58-1.78z" opacity={.4} />
        <path d="M9.54 2.5c.64.02 1.2.44 1.4 1.05l2.5 8-2.87.9-1.2-3.83-1.16 3.1c-.4 1.07-1.43 1.78-2.58 1.78H3c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h2.46L8.1 3.47l.04-.1c.25-.54.8-.89 1.4-.87" />
    </IconBase>
  ))
);

ActivityFillDuotone.displayName = 'ActivityFillDuotone';

// Triple export pattern
export { ActivityFillDuotone, ActivityFillDuotone as ActivityFillDuotoneIcon, ActivityFillDuotone as SiActivityFillDuotone };
export default ActivityFillDuotone;
export type { ActivityFillDuotoneProps };
