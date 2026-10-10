import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HamburgerBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const HamburgerBoldDuotone = memo(
  forwardRef<SVGSVGElement, HamburgerBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M2.74 10.28C3.2 11.29 4.2 12 5.38 12H4c-.55 0-1 .45-1 1s.45 1 1 1h1.8q-.65-.02-1.17.13c-.83.25-1.5.84-1.85 1.6C1.73 15.28 1 14.24 1 13c0-1.2.71-2.25 1.74-2.72M21.26 10.28C22.29 10.75 23 11.79 23 13s-.73 2.27-1.78 2.74c-.36-.77-1.02-1.36-1.85-1.61q-.52-.14-1.17-.13H20c.55 0 1-.45 1-1s-.45-1-1-1h-1.37c1.17 0 2.18-.7 2.63-1.72" opacity={0.4} />
        <path fillRule="evenodd" d="M14.88 2.5c3.65 0 6.62 2.97 6.62 6.63 0 1.58-1.29 2.87-2.87 2.87h-.16c-.3 0-.59.14-.77.38l-.02.02-1.25 1.6h1.77q.65-.02 1.17.13c.96.29 1.71 1.04 2 2q.14.52.13 1.17v.9q.02.65-.13 1.17c-.29.96-1.04 1.71-2 2q-.52.14-1.17.13H5.8q-.65.02-1.17-.13c-.96-.29-1.71-1.04-2-2q-.14-.52-.13-1.17v-.9q-.02-.65.13-1.17c.29-.96 1.04-1.71 2-2q.52-.14 1.17-.13h5.29l-1.36-1.36c-.38-.37-.46-.45-.54-.5q-.13-.08-.28-.11C8.8 12 8.7 12 8.17 12h-2.8C3.8 12 2.5 10.71 2.5 9.13c0-3.66 2.97-6.63 6.63-6.63zM6.24 16c-.77 0-.93.01-1.04.04-.32.1-.57.35-.67.67-.03.1-.04.27-.04 1.04s.01.93.04 1.04c.1.32.35.57.67.67.1.03.27.04 1.04.04h11.5c.77 0 .93-.01 1.04-.04q.5-.17.67-.67c.03-.1.04-.27.04-1.04s-.01-.93-.04-1.04q-.17-.5-.67-.67c-.1-.03-.27-.04-1.04-.04zM9.13 4.5C6.57 4.5 4.5 6.57 4.5 9.13c0 .48.4.87.88.87h2.8q.64-.02 1.2.08.46.12.86.36c.33.2.6.48.9.79l2.77 2.76 2.19-2.81q0-.02.03-.05c.56-.7 1.41-1.12 2.32-1.13h.18c.48 0 .87-.4.87-.87 0-2.56-2.07-4.63-4.62-4.63z" clipRule="evenodd" />
    </IconBase>
  ))
);

HamburgerBoldDuotone.displayName = 'HamburgerBoldDuotone';

// Triple export pattern
export { HamburgerBoldDuotone, HamburgerBoldDuotone as HamburgerBoldDuotoneIcon, HamburgerBoldDuotone as SiHamburgerBoldDuotone };
export default HamburgerBoldDuotone;
export type { HamburgerBoldDuotoneProps };
