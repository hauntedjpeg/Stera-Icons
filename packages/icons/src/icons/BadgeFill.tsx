import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BadgeFillProps = Omit<IconBaseProps, 'children'>;

const BadgeFill = memo(
  forwardRef<SVGSVGElement, BadgeFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9.97 2.8a2.9 2.9 0 0 1 4.06 0l.93.92q.33.33.8.33h1.31a2.9 2.9 0 0 1 2.88 2.88v1.31q0 .47.33.8l.92.93a2.9 2.9 0 0 1 0 4.06l-.92.93q-.33.33-.33.8v1.31a2.87 2.87 0 0 1-2.88 2.88h-1.31q-.47 0-.8.33l-.93.92a2.9 2.9 0 0 1-4.06 0l-.93-.92q-.33-.33-.8-.33H6.93a2.9 2.9 0 0 1-2.88-2.88v-1.31q0-.47-.33-.8l-.92-.93a2.9 2.9 0 0 1 0-4.06l.92-.93q.33-.33.33-.8V6.93a2.9 2.9 0 0 1 2.88-2.88h1.31q.47 0 .8-.33z" />
    </IconBase>
  ))
);

BadgeFill.displayName = 'BadgeFill';

// Triple export pattern (lucide-react style)
export { BadgeFill, BadgeFill as BadgeFillIcon, BadgeFill as SiBadgeFill };
export default BadgeFill;
export type { BadgeFillProps };
