import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScrollFillProps = Omit<IconBaseProps, 'children'>;

const ScrollFill = memo(
  forwardRef<SVGSVGElement, ScrollFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.5 3.13c1.59 0 2.88 1.28 2.88 2.87v9.13h1.37c.9 0 1.63.72 1.63 1.62V18c0 1.59-1.3 2.88-2.88 2.88h-11c-1.59 0-2.87-1.3-2.87-2.88v-7.62H3.25c-.9 0-1.62-.73-1.62-1.63V6c0-1.59 1.28-2.87 2.87-2.87zM7.15 4.88q.21.51.22 1.12v12c0 .62.5 1.13 1.13 1.13s1.13-.5 1.13-1.13v-1.25c0-.9.72-1.62 1.62-1.62h6.38V6c0-.62-.5-1.12-1.13-1.12z" clipRule="evenodd" />
    </IconBase>
  ))
);

ScrollFill.displayName = 'ScrollFill';

// Triple export pattern
export { ScrollFill, ScrollFill as ScrollFillIcon, ScrollFill as SiScrollFill };
export default ScrollFill;
export type { ScrollFillProps };
