import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ActivityBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ActivityBoldDuotone = memo(
  forwardRef<SVGSVGElement, ActivityBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 11c.55 0 1 .45 1 1s-.45 1-1 1h-2.63q-.16 0-.24.16l-2.7 7.2c-.14.4-.53.65-.96.64s-.8-.3-.92-.7l-2.5-8 1.9-.6 1.64 5.22 1.67-4.46c.33-.88 1.17-1.46 2.1-1.46z" opacity={.4} />
        <path d="M9.53 3c.43.01.8.3.92.7l2.5 8-1.9.6L9.4 7.08l-1.67 4.46c-.33.88-1.17 1.46-2.1 1.46H3c-.55 0-1-.45-1-1s.45-1 1-1h2.63q.17 0 .24-.16l2.7-7.2.06-.13c.18-.32.52-.52.9-.51" />
    </IconBase>
  ))
);

ActivityBoldDuotone.displayName = 'ActivityBoldDuotone';

// Triple export pattern
export { ActivityBoldDuotone, ActivityBoldDuotone as ActivityBoldDuotoneIcon, ActivityBoldDuotone as SiActivityBoldDuotone };
export default ActivityBoldDuotone;
export type { ActivityBoldDuotoneProps };
