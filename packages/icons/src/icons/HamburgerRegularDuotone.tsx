import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HamburgerRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const HamburgerRegularDuotone = memo(
  forwardRef<SVGSVGElement, HamburgerRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.09 10.4c.45.8 1.3 1.35 2.29 1.35H4a1.25 1.25 0 1 0 0 2.5h2.25c-.64 0-1.13 0-1.55.12-.67.2-1.22.65-1.57 1.24a2.75 2.75 0 0 1-.04-5.2M20.91 10.4a2.75 2.75 0 0 1-.04 5.2 2.8 2.8 0 0 0-1.57-1.23c-.42-.13-.9-.12-1.55-.12H20a1.25 1.25 0 1 0 0-2.5h-1.37c.98 0 1.83-.54 2.28-1.34" opacity={0.4} />
        <path fillRule="evenodd" d="M14.87 2.75a6.4 6.4 0 0 1 6.38 6.38 2.63 2.63 0 0 1-2.63 2.62h-.15c-.38 0-.74.18-.97.47l-.02.03-1.56 2h1.83c.64 0 1.13 0 1.55.12.88.26 1.57.95 1.83 1.83.13.42.12.9.12 1.55 0 .64 0 1.13-.12 1.55a2.8 2.8 0 0 1-1.83 1.83c-.42.13-.9.12-1.55.12H6.25c-.64 0-1.13 0-1.55-.12a2.8 2.8 0 0 1-1.83-1.83c-.13-.42-.12-.9-.12-1.55 0-.64 0-1.13.12-1.55.26-.88.95-1.57 1.83-1.83.42-.13.9-.12 1.55-.12h5.44L9.9 12.47a4 4 0 0 0-.59-.54 1 1 0 0 0-.36-.15 4 4 0 0 0-.79-.03h-2.8a2.63 2.63 0 0 1-2.62-2.62 6.4 6.4 0 0 1 6.37-6.38zm-8.62 13c-.75 0-.96 0-1.11.05-.4.13-.72.44-.84.84-.04.15-.05.36-.05 1.11s0 .96.05 1.11c.12.4.44.71.84.84.15.04.36.05 1.11.05h11.5c.75 0 .96 0 1.11-.05.4-.12.71-.44.84-.84.04-.15.05-.36.05-1.11s0-.96-.05-1.11c-.13-.4-.44-.72-.84-.84a5 5 0 0 0-1.11-.05zm2.87-11.5a4.9 4.9 0 0 0-4.87 4.88c0 .62.5 1.12 1.12 1.12h2.8c.46 0 .8 0 1.14.08q.42.09.8.33c.3.18.54.43.86.75l2.77 2.77a.23.23 0 0 0 .35-.02l2.2-2.83.03-.04a2.8 2.8 0 0 1 2.13-1.04h.17c.63 0 1.13-.5 1.13-1.12 0-2.7-2.18-4.88-4.88-4.88z" clipRule="evenodd" />
    </IconBase>
  ))
);

HamburgerRegularDuotone.displayName = 'HamburgerRegularDuotone';

// Triple export pattern
export { HamburgerRegularDuotone, HamburgerRegularDuotone as HamburgerRegularDuotoneIcon, HamburgerRegularDuotone as SiHamburgerRegularDuotone };
export default HamburgerRegularDuotone;
export type { HamburgerRegularDuotoneProps };
