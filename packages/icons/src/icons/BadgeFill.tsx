import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BadgeFillProps = Omit<IconBaseProps, 'children'>;

const BadgeFill = memo(
  forwardRef<SVGSVGElement, BadgeFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.97 2.8c1.12-1.13 2.94-1.13 4.06 0l.93.92q.33.33.8.33h1.31c1.59 0 2.88 1.3 2.88 2.88v1.31q0 .47.33.8l.92.93c1.13 1.12 1.13 2.94 0 4.06l-.92.93q-.33.33-.33.8v1.31c0 1.59-1.3 2.88-2.88 2.88h-1.31q-.47 0-.8.33l-.93.92c-1.12 1.13-2.94 1.13-4.06 0l-.93-.92q-.33-.33-.8-.33H6.93c-1.59 0-2.88-1.3-2.88-2.88v-1.31q0-.47-.33-.8l-.92-.93c-1.13-1.12-1.13-2.94 0-4.06l.92-.93q.33-.33.33-.8V6.93c0-1.59 1.3-2.88 2.88-2.88h1.31q.47 0 .8-.33z" />
    </IconBase>
  ))
);

BadgeFill.displayName = 'BadgeFill';

// Triple export pattern
export { BadgeFill, BadgeFill as BadgeFillIcon, BadgeFill as SiBadgeFill };
export default BadgeFill;
export type { BadgeFillProps };
