import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HandLeftBoldProps = Omit<IconBaseProps, 'children'>;

const HandLeftBold = memo(
  forwardRef<SVGSVGElement, HandLeftBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.27 2c.96 0 1.8.48 2.3 1.22q.6-.31 1.3-.32c1.55 0 2.8 1.25 2.8 2.8v3.67c.43-.46 1-.75 1.6-.85s1.26 0 1.84.34c1.3.76 1.77 2.4 1.08 3.73l-1.05 2.68C19.44 19.1 16.1 22 12.07 22c-4.53 0-8.2-3.67-8.2-8.2V7.5c0-1.55 1.25-2.8 2.8-2.8q.42 0 .8.12V4.8c0-1.55 1.25-2.8 2.8-2.8m0 2c-.44 0-.8.36-.8.8v6.75c0 .55-.45 1-1 1s-1-.45-1-1V7.5c0-.44-.36-.8-.8-.8s-.8.36-.8.8v6.3c0 3.42 2.78 6.2 6.2 6.2 3.07 0 5.63-2.24 6.12-5.17q0-.06.02-.1l.03-.1 1.1-2.8.07-.14c.22-.39.08-.88-.3-1.1q-.25-.14-.53-.1-.36.06-.56.4l-1.49 2.52c-.23.39-.69.57-1.12.45s-.74-.5-.74-.96V5.7c0-.44-.36-.8-.8-.8-.41 0-.76.31-.8.72v5.48c0 .55-.45 1-1 1s-1-.45-1-1V4.8c0-.44-.36-.8-.8-.8" clipRule="evenodd" />
    </IconBase>
  ))
);

HandLeftBold.displayName = 'HandLeftBold';

// Triple export pattern
export { HandLeftBold, HandLeftBold as HandLeftBoldIcon, HandLeftBold as SiHandLeftBold };
export default HandLeftBold;
export type { HandLeftBoldProps };
