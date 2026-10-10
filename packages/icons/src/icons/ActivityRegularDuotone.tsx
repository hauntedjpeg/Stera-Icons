import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ActivityRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const ActivityRegularDuotone = memo(
  forwardRef<SVGSVGElement, ActivityRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 11.25c.41 0 .75.34.75.75s-.34.75-.75.75h-2.63c-.21 0-.4.13-.47.32l-2.7 7.2c-.11.3-.4.49-.72.48-.32 0-.6-.22-.7-.53l-2.5-8 1.44-.44 1.84 5.91 1.93-5.14c.3-.78 1.04-1.3 1.88-1.3z" opacity={.4} />
        <path d="M9.52 3.25c.32 0 .6.22.7.53l2.5 8-1.44.44-1.84-5.91-1.93 5.14c-.3.78-1.04 1.3-1.88 1.3H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.63c.21 0 .4-.13.47-.32l2.7-7.2.05-.1c.13-.24.4-.39.67-.38" />
    </IconBase>
  ))
);

ActivityRegularDuotone.displayName = 'ActivityRegularDuotone';

// Triple export pattern
export { ActivityRegularDuotone, ActivityRegularDuotone as ActivityRegularDuotoneIcon, ActivityRegularDuotone as SiActivityRegularDuotone };
export default ActivityRegularDuotone;
export type { ActivityRegularDuotoneProps };
