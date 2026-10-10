import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HamburgerBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const HamburgerBoldDuotone = memo(
  forwardRef<SVGSVGElement, HamburgerBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M2.74 10.28A2.9 2.9 0 0 0 5.38 12H4a1 1 0 1 0 0 2h1.8q-.65-.02-1.17.13a3 3 0 0 0-1.85 1.6 3 3 0 0 1-.04-5.45M21.26 10.28a3 3 0 0 1-.04 5.46A3 3 0 0 0 18.2 14H20a1 1 0 1 0 0-2h-1.37c1.17 0 2.18-.7 2.63-1.72" opacity={0.4} />
        <path fillRule="evenodd" d="M14.88 2.5a6.6 6.6 0 0 1 6.62 6.63A2.9 2.9 0 0 1 18.63 12h-.16a1 1 0 0 0-.77.38l-.02.02-1.25 1.6h1.77q.65-.02 1.17.13a3 3 0 0 1 2.13 3.17v.9q.02.65-.13 1.17a3 3 0 0 1-3.17 2.13H5.8q-.65.02-1.17-.13A3 3 0 0 1 2.5 18.2v-.9q-.02-.65.13-1.17A3 3 0 0 1 5.8 14h5.29l-1.36-1.36a4 4 0 0 0-.54-.5 1 1 0 0 0-.28-.11C8.8 12 8.7 12 8.17 12h-2.8A2.9 2.9 0 0 1 2.5 9.13 6.6 6.6 0 0 1 9.13 2.5zM6.24 16c-.77 0-.93.01-1.04.04a1 1 0 0 0-.67.67c-.03.1-.04.27-.04 1.04s.01.93.04 1.04a1 1 0 0 0 .67.67c.1.03.27.04 1.04.04h11.5c.77 0 .93-.01 1.04-.04a1 1 0 0 0 .67-.67c.03-.1.04-.27.04-1.04s-.01-.93-.04-1.04a1 1 0 0 0-.67-.67 5 5 0 0 0-1.04-.04zM9.13 4.5A4.6 4.6 0 0 0 4.5 9.13c0 .48.4.87.88.87h2.8q.64-.02 1.2.08.46.12.86.36c.33.2.6.48.9.79l2.77 2.76 2.19-2.81q0-.02.03-.05A3 3 0 0 1 18.45 10h.18c.48 0 .87-.4.87-.87a4.63 4.63 0 0 0-4.62-4.63z" clipRule="evenodd" />
    </IconBase>
  ))
);

HamburgerBoldDuotone.displayName = 'HamburgerBoldDuotone';

// Triple export pattern
export { HamburgerBoldDuotone, HamburgerBoldDuotone as HamburgerBoldDuotoneIcon, HamburgerBoldDuotone as SiHamburgerBoldDuotone };
export default HamburgerBoldDuotone;
export type { HamburgerBoldDuotoneProps };
