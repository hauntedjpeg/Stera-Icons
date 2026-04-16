import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BadgeFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BadgeFillDuotone = memo(
  forwardRef<SVGSVGElement, BadgeFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M11.2 4.03a1.13 1.13 0 0 1 1.6 0l.92.93c.54.54 1.27.84 2.04.84h1.31c.62 0 1.13.5 1.13 1.13v1.31c0 .77.3 1.5.84 2.04l.93.92c.44.44.44 1.16 0 1.6l-.93.92a3 3 0 0 0-.84 2.04v1.31c0 .62-.5 1.13-1.13 1.13h-1.31c-.77 0-1.5.3-2.04.84l-.92.93c-.44.44-1.16.44-1.6 0l-.92-.93a3 3 0 0 0-2.04-.84H6.93c-.62 0-1.13-.5-1.13-1.13v-1.31c0-.77-.3-1.5-.84-2.04l-.93-.92a1.13 1.13 0 0 1 0-1.6l.93-.92c.54-.54.84-1.27.84-2.04V6.93c0-.62.5-1.13 1.13-1.13h1.31c.77 0 1.5-.3 2.04-.84z" opacity={.4} />
        <path fillRule="evenodd" d="M9.97 2.8a2.9 2.9 0 0 1 4.06 0l.93.92q.33.32.8.33h1.31a2.9 2.9 0 0 1 2.88 2.88v1.31q0 .47.32.8l.93.93a2.9 2.9 0 0 1 0 4.06l-.93.93q-.31.33-.32.8v1.31a2.87 2.87 0 0 1-2.88 2.88h-1.31q-.47 0-.8.33l-.93.92a2.9 2.9 0 0 1-4.06 0l-.93-.92q-.33-.33-.8-.33H6.93a2.9 2.9 0 0 1-2.88-2.88v-1.31q0-.47-.33-.8l-.92-.93a2.9 2.9 0 0 1 0-4.06l.92-.93q.32-.33.33-.8V6.93a2.9 2.9 0 0 1 2.88-2.88h1.31q.47 0 .8-.33zm2.83 1.23a1.13 1.13 0 0 0-1.6 0l-.92.93c-.54.54-1.27.84-2.04.84H6.93c-.62 0-1.13.5-1.13 1.13v1.31c0 .77-.3 1.5-.84 2.04l-.93.92a1.13 1.13 0 0 0 0 1.6l.93.92c.54.54.84 1.27.84 2.04v1.31c0 .62.5 1.13 1.13 1.13h1.31c.76 0 1.5.3 2.04.84l.92.93c.44.44 1.16.44 1.6 0l.92-.93a3 3 0 0 1 2.04-.84h1.31c.62 0 1.13-.5 1.13-1.13v-1.31c0-.77.3-1.5.84-2.04l.93-.92c.44-.44.44-1.16 0-1.6l-.93-.92a3 3 0 0 1-.84-2.04V6.93c0-.62-.5-1.13-1.13-1.13h-1.31c-.77 0-1.5-.3-2.04-.84z" clipRule="evenodd" />
    </IconBase>
  ))
);

BadgeFillDuotone.displayName = 'BadgeFillDuotone';

// Triple export pattern (lucide-react style)
export { BadgeFillDuotone, BadgeFillDuotone as BadgeFillDuotoneIcon, BadgeFillDuotone as SiBadgeFillDuotone };
export default BadgeFillDuotone;
export type { BadgeFillDuotoneProps };
