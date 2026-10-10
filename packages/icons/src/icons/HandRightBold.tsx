import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HandRightBoldProps = Omit<IconBaseProps, 'children'>;

const HandRightBold = memo(
  forwardRef<SVGSVGElement, HandRightBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13.74 2c1.55 0 2.8 1.25 2.8 2.8v.02q.39-.12.8-.12c1.55 0 2.8 1.25 2.8 2.8v6.3c0 4.53-3.67 8.2-8.2 8.2-4.02 0-7.37-2.9-8.06-6.73l-1.05-2.68c-.7-1.33-.24-2.97 1.07-3.73.58-.33 1.24-.44 1.85-.34.6.1 1.16.4 1.6.85V5.7c0-1.55 1.25-2.8 2.8-2.8q.7.01 1.28.32c.5-.74 1.35-1.22 2.31-1.22m0 2c-.44 0-.8.36-.8.8v6.3c0 .55-.44 1-1 1-.55 0-1-.45-1-1V5.62c-.04-.4-.38-.72-.8-.72-.44 0-.8.36-.8.8v7.2c0 .45-.3.85-.73.96-.44.12-.9-.06-1.13-.45L6 10.89q-.21-.34-.57-.4-.27-.04-.53.1c-.38.22-.51.71-.3 1.1l.07.13 1.1 2.8.03.1.03.1C6.32 17.77 8.87 20 11.94 20c3.43 0 6.2-2.78 6.2-6.2V7.5c0-.44-.36-.8-.8-.8s-.8.36-.8.8v4.05c0 .55-.44 1-1 1-.55 0-1-.45-1-1V4.8c0-.44-.36-.8-.8-.8" clipRule="evenodd" />
    </IconBase>
  ))
);

HandRightBold.displayName = 'HandRightBold';

// Triple export pattern
export { HandRightBold, HandRightBold as HandRightBoldIcon, HandRightBold as SiHandRightBold };
export default HandRightBold;
export type { HandRightBoldProps };
