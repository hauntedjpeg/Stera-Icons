import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HamburgerRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const HamburgerRegularDuotone = memo(
  forwardRef<SVGSVGElement, HamburgerRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3.09 10.4c.45.8 1.3 1.35 2.29 1.35H4c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25h2.25c-.64 0-1.13 0-1.55.12-.67.2-1.22.65-1.57 1.24-1.1-.37-1.88-1.4-1.88-2.61 0-1.2.77-2.21 1.84-2.6M20.91 10.4c1.07.38 1.84 1.4 1.84 2.6s-.79 2.24-1.88 2.6c-.35-.58-.9-1.03-1.57-1.23-.42-.13-.9-.12-1.55-.12H20c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25h-1.37c.98 0 1.83-.54 2.28-1.34" opacity={0.4} />
        <path fillRule="evenodd" d="M14.87 2.75c3.53 0 6.38 2.85 6.38 6.38 0 1.44-1.18 2.62-2.63 2.62h-.15c-.38 0-.74.18-.97.47l-.02.03-1.56 2h1.83c.64 0 1.13 0 1.55.12.88.26 1.57.95 1.83 1.83.13.42.12.9.12 1.55 0 .64 0 1.13-.12 1.55-.26.88-.95 1.57-1.83 1.83-.42.13-.9.12-1.55.12H6.25c-.64 0-1.13 0-1.55-.12-.88-.26-1.57-.95-1.83-1.83-.13-.42-.12-.9-.12-1.55 0-.64 0-1.13.12-1.55.26-.88.95-1.57 1.83-1.83.42-.13.9-.12 1.55-.12h5.44L9.9 12.47c-.37-.37-.48-.47-.59-.54q-.16-.1-.36-.15c-.12-.03-.26-.03-.79-.03h-2.8c-1.44 0-2.62-1.18-2.62-2.62 0-3.53 2.85-6.38 6.37-6.38zm-8.62 13c-.75 0-.96 0-1.11.05-.4.13-.72.44-.84.84-.04.15-.05.36-.05 1.11s0 .96.05 1.11c.12.4.44.71.84.84.15.04.36.05 1.11.05h11.5c.75 0 .96 0 1.11-.05.4-.12.71-.44.84-.84.04-.15.05-.36.05-1.11s0-.96-.05-1.11c-.13-.4-.44-.72-.84-.84-.15-.04-.36-.05-1.11-.05zm2.87-11.5c-2.69 0-4.87 2.18-4.87 4.88 0 .62.5 1.12 1.12 1.12h2.8c.46 0 .8 0 1.14.08q.42.09.8.33c.3.18.54.43.86.75l2.77 2.77q.07.07.17.07t.18-.1l2.2-2.82.03-.04c.52-.65 1.3-1.03 2.13-1.04h.17c.63 0 1.13-.5 1.13-1.12 0-2.7-2.18-4.88-4.88-4.88z" clipRule="evenodd" />
    </IconBase>
  ))
);

HamburgerRegularDuotone.displayName = 'HamburgerRegularDuotone';

// Triple export pattern
export { HamburgerRegularDuotone, HamburgerRegularDuotone as HamburgerRegularDuotoneIcon, HamburgerRegularDuotone as SiHamburgerRegularDuotone };
export default HamburgerRegularDuotone;
export type { HamburgerRegularDuotoneProps };
