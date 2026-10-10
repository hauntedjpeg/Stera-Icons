import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ActivityCircleRegularProps = Omit<IconBaseProps, 'children'>;

const ActivityCircleRegular = memo(
  forwardRef<SVGSVGElement, ActivityCircleRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.53 6.75c.3.01.58.22.68.51l2.37 7.1.83-2.03c.27-.65.91-1.08 1.62-1.08h1.47c.41 0 .75.34.75.75s-.34.75-.75.75h-1.47q-.17 0-.23.15l-1.6 3.89c-.13.29-.41.47-.73.46-.3-.01-.58-.22-.68-.51l-2.37-7.1-.83 2.03c-.27.65-.91 1.08-1.62 1.08H6.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.47q.17 0 .23-.15L9.8 7.2l.06-.1c.14-.23.4-.37.67-.36" />
        <path fillRule="evenodd" d="M12 2.25c5.38 0 9.75 4.37 9.75 9.75s-4.37 9.75-9.75 9.75S2.25 17.38 2.25 12 6.62 2.25 12 2.25m0 1.5c-4.56 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25" clipRule="evenodd" />
    </IconBase>
  ))
);

ActivityCircleRegular.displayName = 'ActivityCircleRegular';

// Triple export pattern
export { ActivityCircleRegular, ActivityCircleRegular as ActivityCircleRegularIcon, ActivityCircleRegular as SiActivityCircleRegular };
export default ActivityCircleRegular;
export type { ActivityCircleRegularProps };
