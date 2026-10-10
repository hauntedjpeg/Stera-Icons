import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ActivityFillProps = Omit<IconBaseProps, 'children'>;

const ActivityFill = memo(
  forwardRef<SVGSVGElement, ActivityFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.54 2.5c.64.02 1.2.44 1.4 1.05l3.69 11.83 1.16-3.1c.4-1.07 1.43-1.78 2.58-1.78H21c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-2.46l-2.64 7.03c-.22.6-.8.99-1.44.97s-1.2-.44-1.4-1.05L9.38 8.62l-1.16 3.1c-.4 1.07-1.43 1.78-2.58 1.78H3c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5h2.46L8.1 3.47l.04-.1c.25-.54.8-.89 1.4-.87" />
    </IconBase>
  ))
);

ActivityFill.displayName = 'ActivityFill';

// Triple export pattern
export { ActivityFill, ActivityFill as ActivityFillIcon, ActivityFill as SiActivityFill };
export default ActivityFill;
export type { ActivityFillProps };
