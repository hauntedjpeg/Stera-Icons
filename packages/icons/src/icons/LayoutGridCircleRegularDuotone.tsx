import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayoutGridCircleRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const LayoutGridCircleRegularDuotone = memo(
  forwardRef<SVGSVGElement, LayoutGridCircleRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M6.88 13C9.15 13 11 14.85 11 17.13s-1.85 4.12-4.12 4.12-4.13-1.85-4.13-4.12S4.6 13 6.88 13m0 1.5c-1.45 0-2.63 1.18-2.63 2.63 0 1.44 1.18 2.62 2.63 2.62 1.44 0 2.62-1.18 2.62-2.62S8.32 14.5 6.88 14.5M17.13 2.75c2.27 0 4.12 1.85 4.12 4.13S19.4 11 17.13 11 13 9.15 13 6.88s1.85-4.13 4.13-4.13m0 1.5c-1.45 0-2.63 1.18-2.63 2.63 0 1.44 1.18 2.62 2.63 2.62 1.44 0 2.62-1.18 2.62-2.62s-1.18-2.63-2.62-2.63" opacity={0.4} />
        <path fillRule="evenodd" d="M17.13 13c2.27 0 4.12 1.85 4.12 4.13s-1.85 4.12-4.12 4.12S13 19.4 13 17.13 14.85 13 17.13 13m0 1.5c-1.45 0-2.63 1.18-2.63 2.63 0 1.44 1.18 2.62 2.63 2.62 1.44 0 2.62-1.18 2.62-2.62s-1.18-2.63-2.62-2.63M6.88 2.75C9.15 2.75 11 4.6 11 6.88S9.15 11 6.88 11 2.75 9.15 2.75 6.88 4.6 2.75 6.88 2.75m0 1.5c-1.45 0-2.63 1.18-2.63 2.63 0 1.44 1.18 2.62 2.63 2.62 1.44 0 2.62-1.18 2.62-2.62S8.32 4.25 6.88 4.25" clipRule="evenodd" />
    </IconBase>
  ))
);

LayoutGridCircleRegularDuotone.displayName = 'LayoutGridCircleRegularDuotone';

// Triple export pattern
export { LayoutGridCircleRegularDuotone, LayoutGridCircleRegularDuotone as LayoutGridCircleRegularDuotoneIcon, LayoutGridCircleRegularDuotone as SiLayoutGridCircleRegularDuotone };
export default LayoutGridCircleRegularDuotone;
export type { LayoutGridCircleRegularDuotoneProps };
