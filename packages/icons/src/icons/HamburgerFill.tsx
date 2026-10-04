import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HamburgerFillProps = Omit<IconBaseProps, 'children'>;

const HamburgerFill = memo(
  forwardRef<SVGSVGElement, HamburgerFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.88 2.63a6.5 6.5 0 0 1 6.5 6.5q0 .65-.3 1.2a2.88 2.88 0 0 1-.03 5.34q.12.24.2.5c.13.43.13.95.13 1.58s0 1.15-.13 1.59c-.28.91-1 1.63-1.91 1.91-.44.13-.96.13-1.59.13H6.25c-.63 0-1.15 0-1.58-.13-.92-.28-1.64-1-1.92-1.91-.13-.44-.12-.96-.12-1.59s-.01-1.15.12-1.59q.08-.25.2-.49a2.87 2.87 0 0 1-.04-5.33 3 3 0 0 1-.29-1.21 6.5 6.5 0 0 1 6.5-6.5zM6.24 15.88c-.76 0-.95 0-1.08.04-.36.11-.64.4-.75.75-.04.13-.04.32-.04 1.08s0 .95.04 1.08c.11.36.4.64.75.75.13.04.32.05 1.08.05h11.5c.76 0 .95-.01 1.08-.05.36-.11.64-.4.75-.75.04-.13.05-.32.05-1.08s-.01-.95-.05-1.08c-.11-.36-.4-.64-.75-.75a5 5 0 0 0-1.08-.04zm2.88-11.5a4.75 4.75 0 0 0-4.76 4.75 1 1 0 0 0 1 1h3.28a3 3 0 0 1 1.78.6l.29.25 3.1 3.1c.05.05.14.05.18-.01l2.2-2.82.03-.04.22-.28c.4-.5 1-.8 1.64-.8h.54a1 1 0 0 0 1-1 4.75 4.75 0 0 0-4.75-4.76z" clipRule="evenodd" />
    </IconBase>
  ))
);

HamburgerFill.displayName = 'HamburgerFill';

// Triple export pattern (lucide-react style)
export { HamburgerFill, HamburgerFill as HamburgerFillIcon, HamburgerFill as SiHamburgerFill };
export default HamburgerFill;
export type { HamburgerFillProps };
