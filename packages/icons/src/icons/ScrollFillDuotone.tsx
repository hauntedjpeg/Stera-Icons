import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScrollFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScrollFillDuotone = memo(
  forwardRef<SVGSVGElement, ScrollFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scroll-fill-duotone" {...props}>
      <path d="M16.5 4.88c.62 0 1.13.5 1.13 1.12v9.13h-6.38c-.9 0-1.62.72-1.62 1.62V18a1.13 1.13 0 0 1-2.26 0V6q0-.6-.22-1.12z" opacity={0.4} />
        <path d="M20.63 16.88V18c0 .62-.5 1.13-1.13 1.13h-8.35q.21-.53.22-1.13v-1.12zM4.5 4.88c.62 0 1.13.5 1.13 1.12v2.63H3.38V6c0-.62.5-1.12 1.12-1.12" opacity={0.4} />
        <path fillRule="evenodd" d="M16.5 3.13A2.9 2.9 0 0 1 19.38 6v9.13h1.37c.9 0 1.63.72 1.63 1.62V18a2.9 2.9 0 0 1-2.88 2.88h-11A2.9 2.9 0 0 1 5.63 18v-7.62H3.25c-.9 0-1.62-.73-1.62-1.63V6A2.87 2.87 0 0 1 4.5 3.13zM11.38 18q-.01.6-.23 1.13h8.35c.62 0 1.13-.5 1.13-1.13v-1.12h-9.25zM7.15 4.88q.21.51.22 1.12v12a1.13 1.13 0 0 0 2.26 0v-1.25c0-.9.72-1.62 1.62-1.62h6.38V6c0-.62-.5-1.12-1.13-1.12zm-2.65 0c-.62 0-1.12.5-1.12 1.12v2.63h2.25V6c0-.62-.5-1.12-1.13-1.12" clipRule="evenodd" />
    </IconBase>
  ))
);

ScrollFillDuotone.displayName = 'ScrollFillDuotone';

// Triple export pattern (lucide-react style)
export { ScrollFillDuotone, ScrollFillDuotone as ScrollFillDuotoneIcon, ScrollFillDuotone as SiScrollFillDuotone };
export default ScrollFillDuotone;
export type { ScrollFillDuotoneProps };
