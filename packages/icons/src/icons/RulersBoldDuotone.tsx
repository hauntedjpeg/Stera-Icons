import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RulersBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const RulersBoldDuotone = memo(
  forwardRef<SVGSVGElement, RulersBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.75 2C20.99 2 22 3 22 4.25v3.5C22 8.99 21 10 19.75 10H10v9.75C10 20.99 9 22 7.75 22h-3.5C3.01 22 2 21 2 19.75V10h2v9.75c0 .14.11.25.25.25h3.5c.14 0 .25-.11.25-.25V10h2V8h9.75c.14 0 .25-.11.25-.25v-3.5c0-.14-.11-.25-.25-.25H10V2z" opacity={.4} />
        <path d="M8 18H7c-.55 0-1-.45-1-1s.45-1 1-1h1zM8 14H7c-.55 0-1-.45-1-1s.45-1 1-1h1z" />
        <path fillRule="evenodd" d="M10 10H2V4c0-1.1.9-2 2-2h6zM4 8h4V4H4z" clipRule="evenodd" />
        <path d="M13 6c.55 0 1 .45 1 1v1h-2V7c0-.55.45-1 1-1M17 6c.55 0 1 .45 1 1v1h-2V7c0-.55.45-1 1-1" />
    </IconBase>
  ))
);

RulersBoldDuotone.displayName = 'RulersBoldDuotone';

// Triple export pattern
export { RulersBoldDuotone, RulersBoldDuotone as RulersBoldDuotoneIcon, RulersBoldDuotone as SiRulersBoldDuotone };
export default RulersBoldDuotone;
export type { RulersBoldDuotoneProps };
