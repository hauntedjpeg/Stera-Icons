import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScrollTextFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScrollTextFillDuotone = memo(
  forwardRef<SVGSVGElement, ScrollTextFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.5 4.88c.62 0 1.13.5 1.13 1.12v9.13h-6.38c-.9 0-1.62.72-1.62 1.62V18c0 .62-.5 1.13-1.13 1.13s-1.12-.5-1.12-1.13V6q-.01-.6-.23-1.12zM10 10.63c-.48 0-.87.39-.87.87s.39.88.87.88h3.5c.48 0 .88-.4.88-.88s-.4-.87-.88-.87zm0-3.5c-.48 0-.87.39-.87.87s.39.88.87.88h5c.48 0 .88-.4.88-.88s-.4-.87-.88-.87z" clipRule="evenodd" opacity={0.4} />
        <path d="M20.63 16.88V18c0 .62-.5 1.13-1.13 1.13h-8.35q.21-.53.22-1.13v-1.12zM4.5 4.88c.62 0 1.13.5 1.13 1.12v2.63H3.38V6c0-.62.5-1.12 1.12-1.12" opacity={0.4} />
        <path d="M13.5 10.63c.48 0 .88.39.88.87s-.4.88-.88.88H10c-.48 0-.87-.4-.87-.88s.39-.87.87-.87zM15 7.13c.48 0 .88.39.88.87s-.4.88-.88.88h-5c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" />
        <path fillRule="evenodd" d="M16.5 3.13c1.59 0 2.88 1.28 2.88 2.87v9.13h1.37c.9 0 1.63.72 1.63 1.62V18c0 1.59-1.3 2.88-2.88 2.88h-11c-1.59 0-2.87-1.3-2.87-2.88v-7.62H3.25c-.9 0-1.62-.73-1.62-1.63V6c0-1.59 1.28-2.87 2.87-2.87zM11.38 18q-.01.6-.23 1.13h8.35c.62 0 1.13-.5 1.13-1.13v-1.12h-9.25zM7.15 4.88q.21.51.22 1.12v12c0 .62.5 1.13 1.13 1.13s1.13-.5 1.13-1.13v-1.25c0-.9.72-1.62 1.62-1.62h6.38V6c0-.62-.5-1.12-1.13-1.12zm-2.65 0c-.62 0-1.12.5-1.12 1.12v2.63h2.25V6c0-.62-.5-1.12-1.13-1.12" clipRule="evenodd" />
    </IconBase>
  ))
);

ScrollTextFillDuotone.displayName = 'ScrollTextFillDuotone';

// Triple export pattern
export { ScrollTextFillDuotone, ScrollTextFillDuotone as ScrollTextFillDuotoneIcon, ScrollTextFillDuotone as SiScrollTextFillDuotone };
export default ScrollTextFillDuotone;
export type { ScrollTextFillDuotoneProps };
