import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BadgeRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BadgeRegularDuotone = memo(
  forwardRef<SVGSVGElement, BadgeRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.83v.75c-.32 0-.64.12-.88.36l-.93.93c-.52.52-1.22.8-1.95.8H6.93c-.7 0-1.25.57-1.25 1.26v1.31c0 .73-.3 1.43-.8 1.95l-.94.93a1.25 1.25 0 0 0 0 1.76l.93.93c.52.52.8 1.22.8 1.95v1.31c0 .7.57 1.25 1.26 1.25h1.31c.73 0 1.43.3 1.95.8l.93.93q.38.37.88.37v1.5c-.7 0-1.4-.27-1.95-.8l-.92-.93a1.3 1.3 0 0 0-.89-.37H6.93a2.75 2.75 0 0 1-2.75-2.75v-1.31q0-.51-.37-.89l-.93-.93a2.75 2.75 0 0 1 0-3.89l.93-.92q.37-.38.37-.89V6.93a2.75 2.75 0 0 1 2.75-2.75h1.31q.51 0 .89-.37l.92-.93c.54-.53 1.25-.8 1.95-.8z" opacity={.4} />
        <path d="M12 2.08c.7 0 1.4.27 1.94.8l.93.93q.38.37.89.37h1.31a2.75 2.75 0 0 1 2.75 2.75v1.31q0 .51.37.89l.93.92a2.75 2.75 0 0 1 0 3.9l-.93.92q-.36.38-.37.89v1.31a2.75 2.75 0 0 1-2.75 2.75h-1.31q-.51 0-.89.37l-.93.93c-.53.53-1.24.8-1.94.8v-1.5q.5 0 .88-.37l.93-.92c.52-.52 1.22-.8 1.95-.8h1.31c.7 0 1.25-.57 1.25-1.26v-1.31c0-.73.3-1.43.8-1.95l.94-.93c.48-.48.48-1.28 0-1.76l-.93-.93a2.8 2.8 0 0 1-.8-1.95V6.93c0-.7-.57-1.25-1.26-1.25h-1.31c-.73 0-1.43-.3-1.95-.8l-.93-.94a1.2 1.2 0 0 0-.88-.36z" />
    </IconBase>
  ))
);

BadgeRegularDuotone.displayName = 'BadgeRegularDuotone';

// Triple export pattern (lucide-react style)
export { BadgeRegularDuotone, BadgeRegularDuotone as BadgeRegularDuotoneIcon, BadgeRegularDuotone as SiBadgeRegularDuotone };
export default BadgeRegularDuotone;
export type { BadgeRegularDuotoneProps };
