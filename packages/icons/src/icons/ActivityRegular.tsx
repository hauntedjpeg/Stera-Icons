import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ActivityRegularProps = Omit<IconBaseProps, 'children'>;

const ActivityRegular = memo(
  forwardRef<SVGSVGElement, ActivityRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.52 3.25c.32 0 .6.22.7.53l4.34 13.91 1.93-5.14c.3-.78 1.04-1.3 1.88-1.3H21c.41 0 .75.34.75.75s-.34.75-.75.75h-2.63c-.21 0-.4.13-.47.32l-2.7 7.2c-.11.3-.4.49-.72.48-.32 0-.6-.22-.7-.53L9.44 6.31 7.5 11.45c-.3.78-1.04 1.3-1.88 1.3H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.63c.21 0 .4-.13.47-.32l2.7-7.2.05-.1c.13-.24.4-.39.67-.38" />
    </IconBase>
  ))
);

ActivityRegular.displayName = 'ActivityRegular';

// Triple export pattern
export { ActivityRegular, ActivityRegular as ActivityRegularIcon, ActivityRegular as SiActivityRegular };
export default ActivityRegular;
export type { ActivityRegularProps };
