import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type RulersBoldProps = Omit<IconBaseProps, 'children'>;

const RulersBold = memo(
  forwardRef<SVGSVGElement, RulersBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M19.75 2C20.99 2 22 3 22 4.25v3.5C22 8.99 21 10 19.75 10H10v9.75C10 20.99 9 22 7.75 22h-3.5C3.01 22 2 21 2 19.75V4.25C2 3.01 3 2 4.25 2zM4 19.75c0 .14.11.25.25.25h3.5c.14 0 .25-.11.25-.25V18H7c-.55 0-1-.45-1-1s.45-1 1-1h1v-2H7c-.55 0-1-.45-1-1s.45-1 1-1h1v-2H4zM4.2 4l-.09.04-.07.07L4 4.2V8h4V4H4.2M10 8h2V7c0-.55.45-1 1-1s1 .45 1 1v1h2V7c0-.55.45-1 1-1s1 .45 1 1v1h1.75c.14 0 .25-.11.25-.25v-3.5c0-.14-.11-.25-.25-.25H10z" clipRule="evenodd" />
    </IconBase>
  ))
);

RulersBold.displayName = 'RulersBold';

// Triple export pattern
export { RulersBold, RulersBold as RulersBoldIcon, RulersBold as SiRulersBold };
export default RulersBold;
export type { RulersBoldProps };
