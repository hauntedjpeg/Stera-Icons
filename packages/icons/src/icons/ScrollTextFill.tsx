import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScrollTextFillProps = Omit<IconBaseProps, 'children'>;

const ScrollTextFill = memo(
  forwardRef<SVGSVGElement, ScrollTextFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.5 10.63c.48 0 .88.39.88.87s-.4.88-.88.88H10c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM15 7.13c.48 0 .88.39.88.87s-.4.88-.88.88h-5c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" />
        <path fillRule="evenodd" d="M16.5 3.13c1.59 0 2.88 1.28 2.88 2.87v9.13h1.37c.9 0 1.63.72 1.63 1.62V18c0 1.59-1.3 2.88-2.88 2.88h-11c-1.59 0-2.87-1.3-2.87-2.88v-7.62H3.25c-.9 0-1.62-.73-1.62-1.63V6c0-1.59 1.28-2.87 2.87-2.87zM7.15 4.88q.21.51.22 1.12v12c0 .62.5 1.13 1.13 1.13s1.13-.5 1.13-1.13v-1.25c0-.9.72-1.62 1.62-1.62h6.38V6c0-.62-.5-1.12-1.13-1.12z" clipRule="evenodd" />
    </IconBase>
  ))
);

ScrollTextFill.displayName = 'ScrollTextFill';

// Triple export pattern
export { ScrollTextFill, ScrollTextFill as ScrollTextFillIcon, ScrollTextFill as SiScrollTextFill };
export default ScrollTextFill;
export type { ScrollTextFillProps };
