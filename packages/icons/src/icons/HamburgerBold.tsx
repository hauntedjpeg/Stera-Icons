import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HamburgerBoldProps = Omit<IconBaseProps, 'children'>;

const HamburgerBold = memo(
  forwardRef<SVGSVGElement, HamburgerBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.88 2.5c3.65 0 6.62 2.97 6.62 6.63q0 .61-.24 1.15C22.29 10.75 23 11.79 23 13s-.73 2.27-1.78 2.74q.16.32.22.67.08.47.06 1.09v.7q.02.65-.13 1.17c-.29.96-1.04 1.71-2 2q-.52.14-1.17.13H5.8q-.65.02-1.17-.13c-.96-.29-1.71-1.04-2-2q-.14-.52-.13-1.17v-.7q-.02-.62.06-1.09.06-.35.22-.67C1.73 15.27 1 14.22 1 13c0-1.2.71-2.25 1.74-2.72q-.23-.53-.24-1.15c0-3.66 2.97-6.63 6.63-6.63zM6 16c-.51 0-.62 0-.7.02-.4.08-.7.39-.78.78-.01.08-.02.19-.02.7v.25c0 .77.01.93.04 1.04.1.32.35.57.67.67.1.03.27.04 1.04.04h11.5c.77 0 .93-.01 1.04-.04q.5-.17.67-.67c.03-.1.04-.27.04-1.04v-.25c0-.51 0-.62-.02-.7-.08-.4-.39-.7-.78-.78-.08-.01-.19-.02-.7-.02zm-2-4c-.55 0-1 .45-1 1s.45 1 1 1h7.09l-1.7-1.7q-.31-.3-.74-.3zm14.09 0q-.1 0-.16.08L16.43 14H20c.55 0 1-.45 1-1s-.45-1-1-1zM9.13 4.5C6.57 4.5 4.5 6.57 4.5 9.13c0 .48.4.87.88.87h3.27c.81 0 1.59.32 2.16.9l3.1 3.1 2.44-3.15c.42-.54 1.06-.85 1.74-.85h.54c.48 0 .87-.4.87-.87 0-2.56-2.07-4.63-4.62-4.63z" clipRule="evenodd" />
    </IconBase>
  ))
);

HamburgerBold.displayName = 'HamburgerBold';

// Triple export pattern
export { HamburgerBold, HamburgerBold as HamburgerBoldIcon, HamburgerBold as SiHamburgerBold };
export default HamburgerBold;
export type { HamburgerBoldProps };
