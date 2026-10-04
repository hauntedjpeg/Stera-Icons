import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HamburgerRegularProps = Omit<IconBaseProps, 'children'>;

const HamburgerRegular = memo(
  forwardRef<SVGSVGElement, HamburgerRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.88 2.75a6.4 6.4 0 0 1 6.37 6.38q0 .7-.34 1.28a2.75 2.75 0 0 1-.04 5.2q.23.4.33.85.06.41.05 1.04v.25c0 .64 0 1.13-.12 1.55a2.8 2.8 0 0 1-1.83 1.83c-.42.13-.9.12-1.55.12H6.25c-.64 0-1.13 0-1.55-.12a2.8 2.8 0 0 1-1.83-1.83c-.13-.42-.12-.9-.12-1.55v-.25q-.01-.62.05-1.04.1-.46.33-.85a2.75 2.75 0 0 1-.04-5.2 2.6 2.6 0 0 1-.34-1.28 6.4 6.4 0 0 1 6.38-6.38zM6 15.75c-.5 0-.64 0-.74.02-.5.1-.89.49-.99.99-.02.1-.02.24-.02.74v.25c0 .75 0 .96.05 1.11.12.4.44.72.84.84.15.04.36.05 1.11.05h11.5c.75 0 .96 0 1.11-.05.4-.12.72-.44.84-.84.04-.15.05-.36.05-1.11v-.25c0-.5 0-.64-.02-.74-.1-.5-.49-.89-.99-.99-.1-.02-.24-.02-.74-.02zm-2-4a1.25 1.25 0 1 0 0 2.5h7.69l-2.12-2.12a1.3 1.3 0 0 0-.92-.38zm14.09 0a.5.5 0 0 0-.36.17l-1.8 2.33H20a1.25 1.25 0 1 0 0-2.5zm-8.96-7.5a4.87 4.87 0 0 0-4.88 4.88c0 .62.5 1.12 1.13 1.12h3.27c.74 0 1.46.3 1.98.82l3.1 3.1c.1.1.28.1.37-.02L16.55 11c.37-.47.94-.75 1.54-.75h.54c.62 0 1.12-.5 1.12-1.12 0-2.7-2.18-4.88-4.87-4.88z" clipRule="evenodd" />
    </IconBase>
  ))
);

HamburgerRegular.displayName = 'HamburgerRegular';

// Triple export pattern (lucide-react style)
export { HamburgerRegular, HamburgerRegular as HamburgerRegularIcon, HamburgerRegular as SiHamburgerRegular };
export default HamburgerRegular;
export type { HamburgerRegularProps };
