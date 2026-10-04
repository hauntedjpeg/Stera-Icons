import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HamburgerBoldProps = Omit<IconBaseProps, 'children'>;

const HamburgerBold = memo(
  forwardRef<SVGSVGElement, HamburgerBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.88 2.5a6.6 6.6 0 0 1 6.62 6.63q0 .61-.24 1.15a3 3 0 0 1-.04 5.46 3 3 0 0 1 .22.67q.08.47.06 1.09v.7q.02.65-.13 1.17a3 3 0 0 1-3.17 2.13H5.8q-.65.02-1.17-.13A3 3 0 0 1 2.5 18.2v-.7q-.02-.62.06-1.09a3 3 0 0 1 .22-.67 3 3 0 0 1-.04-5.46 3 3 0 0 1-.24-1.15A6.6 6.6 0 0 1 9.13 2.5zM6 16c-.51 0-.62 0-.7.02a1 1 0 0 0-.78.78c-.01.08-.02.19-.02.7v.25c0 .77.01.93.04 1.04a1 1 0 0 0 .67.67c.1.03.27.04 1.04.04h11.5c.77 0 .93-.01 1.04-.04a1 1 0 0 0 .67-.67c.03-.1.04-.27.04-1.04v-.25c0-.51 0-.62-.02-.7a1 1 0 0 0-.78-.78A5 5 0 0 0 18 16zm-2-4a1 1 0 1 0 0 2h7.09l-1.7-1.7q-.31-.3-.74-.3zm14.09 0a.2.2 0 0 0-.16.08L16.43 14H20a1 1 0 1 0 0-2zM9.13 4.5A4.6 4.6 0 0 0 4.5 9.13c0 .48.4.87.88.87h3.27c.81 0 1.59.32 2.16.9l3.1 3.1 2.44-3.15a2.2 2.2 0 0 1 1.74-.85h.54c.48 0 .87-.4.87-.87a4.63 4.63 0 0 0-4.62-4.63z" clipRule="evenodd" />
    </IconBase>
  ))
);

HamburgerBold.displayName = 'HamburgerBold';

// Triple export pattern (lucide-react style)
export { HamburgerBold, HamburgerBold as HamburgerBoldIcon, HamburgerBold as SiHamburgerBold };
export default HamburgerBold;
export type { HamburgerBoldProps };
