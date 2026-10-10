import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HandRightBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const HandRightBoldDuotone = memo(
  forwardRef<SVGSVGElement, HandRightBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M5.9 14.82C6.4 17.77 8.96 20 12.03 20c3.32 0 6.03-2.6 6.2-5.88v-.32c0 .55.45 1 1 1 .56 0 1-.45 1-1 0 4.53-3.67 8.2-8.2 8.2-4.02 0-7.37-2.9-8.06-6.73l.03.09c.2.51.78.76 1.3.56.45-.17.7-.64.62-1.1" opacity={.4} />
        <path d="M13.82 2c1.55 0 2.8 1.25 2.8 2.8v.02q.39-.12.8-.12c1.55 0 2.8 1.25 2.8 2.8v6.3c0 .55-.44 1-1 1-.55 0-1-.45-1-1V7.5c0-.44-.36-.8-.8-.8s-.8.36-.8.8v4.05c0 .55-.44 1-1 1-.55 0-1-.45-1-1V4.8c0-.44-.36-.8-.8-.8s-.8.36-.8.8v6.3c0 .55-.44 1-1 1-.55 0-1-.45-1-1V5.62c-.04-.4-.38-.72-.8-.72-.44 0-.8.36-.8.8v7.2c0 .45-.3.85-.73.96-.44.12-.9-.06-1.13-.45l-1.48-2.52q-.21-.34-.57-.4-.27-.04-.53.1c-.38.22-.51.71-.3 1.1l.07.13 1.1 2.8c.2.52-.05 1.1-.56 1.3-.52.2-1.1-.05-1.3-.56l-1.08-2.77c-.7-1.33-.24-2.97 1.07-3.73.58-.33 1.24-.44 1.85-.34.6.1 1.16.4 1.6.85V5.7c0-1.55 1.25-2.8 2.8-2.8q.7.01 1.28.32c.5-.74 1.35-1.22 2.31-1.22" />
    </IconBase>
  ))
);

HandRightBoldDuotone.displayName = 'HandRightBoldDuotone';

// Triple export pattern
export { HandRightBoldDuotone, HandRightBoldDuotone as HandRightBoldDuotoneIcon, HandRightBoldDuotone as SiHandRightBoldDuotone };
export default HandRightBoldDuotone;
export type { HandRightBoldDuotoneProps };
