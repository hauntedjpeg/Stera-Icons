import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BadgeRegularProps = Omit<IconBaseProps, 'children'>;

const BadgeRegular = memo(
  forwardRef<SVGSVGElement, BadgeRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.06 2.88c1.07-1.07 2.81-1.07 3.88 0l.93.93q.38.37.89.37h1.31c1.52 0 2.75 1.23 2.75 2.75v1.31q0 .51.37.89l.93.93c1.07 1.07 1.07 2.81 0 3.88l-.93.93q-.36.38-.37.89v1.31c0 1.52-1.23 2.75-2.75 2.75h-1.31q-.51 0-.89.37l-.93.93c-1.07 1.07-2.81 1.07-3.88 0l-.93-.93q-.38-.36-.89-.37H6.93c-1.52 0-2.75-1.23-2.75-2.75v-1.31q0-.51-.37-.89l-.93-.93c-1.07-1.07-1.07-2.81 0-3.88l.93-.93q.37-.38.37-.89V6.93c0-1.52 1.23-2.75 2.75-2.75h1.31q.51 0 .89-.37zm2.82 1.06c-.48-.48-1.28-.48-1.76 0l-.93.93c-.52.52-1.22.8-1.95.8H6.93c-.7 0-1.25.57-1.25 1.26v1.31c0 .73-.3 1.43-.8 1.95l-.94.93c-.48.48-.48 1.28 0 1.76l.93.93c.52.52.8 1.22.8 1.95v1.31c0 .7.57 1.25 1.26 1.25h1.31c.73 0 1.43.3 1.95.8l.93.94c.48.48 1.28.48 1.76 0l.93-.93c.52-.52 1.22-.8 1.95-.8h1.31c.7 0 1.25-.57 1.25-1.26v-1.31c0-.73.3-1.43.8-1.95l.94-.93c.48-.48.48-1.28 0-1.76l-.93-.93c-.52-.52-.8-1.22-.8-1.95V6.93c0-.7-.57-1.25-1.26-1.25h-1.31c-.73 0-1.43-.3-1.95-.8z" clipRule="evenodd" />
    </IconBase>
  ))
);

BadgeRegular.displayName = 'BadgeRegular';

// Triple export pattern
export { BadgeRegular, BadgeRegular as BadgeRegularIcon, BadgeRegular as SiBadgeRegular };
export default BadgeRegular;
export type { BadgeRegularProps };
