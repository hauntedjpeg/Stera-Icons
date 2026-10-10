import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ScrollTextRegularProps = Omit<IconBaseProps, 'children'>;

const ScrollTextRegular = memo(
  forwardRef<SVGSVGElement, ScrollTextRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.5 10.75c.41 0 .75.34.75.75s-.34.75-.75.75H10c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM15 7.25c.41 0 .75.34.75.75s-.34.75-.75.75h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
        <path fillRule="evenodd" d="M16.5 3.25c1.52 0 2.75 1.23 2.75 2.75v9.25h1c1.1 0 2 .9 2 2V18c0 1.52-1.23 2.75-2.75 2.75H8.42C6.94 20.7 5.75 19.49 5.75 18v-7.75h-2c-1.1 0-2-.9-2-2V6c0-1.52 1.23-2.75 2.75-2.75zm-9.55 1.5q.3.57.3 1.25v12c0 .69.56 1.25 1.25 1.25s1.25-.56 1.25-1.25v-.75c0-1.1.9-2 2-2h6V6c0-.69-.56-1.25-1.25-1.25zm4.8 12c-.28 0-.5.22-.5.5V18q0 .68-.3 1.25h8.55c.69 0 1.25-.56 1.25-1.25v-.75c0-.28-.22-.5-.5-.5zm-7.25-12c-.69 0-1.25.56-1.25 1.25v2.25c0 .28.22.5.5.5h2V6c0-.69-.56-1.25-1.25-1.25" clipRule="evenodd" />
    </IconBase>
  ))
);

ScrollTextRegular.displayName = 'ScrollTextRegular';

// Triple export pattern
export { ScrollTextRegular, ScrollTextRegular as ScrollTextRegularIcon, ScrollTextRegular as SiScrollTextRegular };
export default ScrollTextRegular;
export type { ScrollTextRegularProps };
