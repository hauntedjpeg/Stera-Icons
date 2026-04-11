import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScrollTextFillProps = Omit<IconBaseProps, 'children'>;

const ScrollTextFill = memo(
  forwardRef<SVGSVGElement, ScrollTextFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.5 10.63a.88.88 0 0 1 0 1.74H10a.88.88 0 0 1 0-1.74zM15 7.13a.88.88 0 0 1 0 1.75h-5a.87.87 0 1 1 0-1.76z" />
        <path fillRule="evenodd" d="M16.5 3.13A2.9 2.9 0 0 1 19.38 6v9.13h1.37c.9 0 1.63.72 1.63 1.62V18a2.9 2.9 0 0 1-2.88 2.88h-11A2.9 2.9 0 0 1 5.63 18v-7.62H3.25c-.9 0-1.62-.73-1.62-1.63V6A2.87 2.87 0 0 1 4.5 3.13zM7.15 4.88q.21.51.22 1.12v12a1.13 1.13 0 0 0 2.26 0v-1.25c0-.9.72-1.62 1.62-1.62h6.38V6c0-.62-.5-1.12-1.13-1.12z" clipRule="evenodd" />
    </IconBase>
  ))
);

ScrollTextFill.displayName = 'ScrollTextFill';

// Triple export pattern (lucide-react style)
export { ScrollTextFill, ScrollTextFill as ScrollTextFillIcon, ScrollTextFill as SiScrollTextFill };
export default ScrollTextFill;
export type { ScrollTextFillProps };
