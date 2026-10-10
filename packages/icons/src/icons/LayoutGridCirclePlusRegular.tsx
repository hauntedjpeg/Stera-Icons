import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type LayoutGridCirclePlusRegularProps = Omit<IconBaseProps, 'children'>;

const LayoutGridCirclePlusRegular = memo(
  forwardRef<SVGSVGElement, LayoutGridCirclePlusRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M6.88 13C9.15 13 11 14.85 11 17.13s-1.85 4.12-4.12 4.12-4.13-1.85-4.13-4.12S4.6 13 6.88 13m0 1.5c-1.45 0-2.63 1.18-2.63 2.63 0 1.44 1.18 2.62 2.63 2.62 1.44 0 2.62-1.18 2.62-2.62S8.32 14.5 6.88 14.5" clipRule="evenodd" />
        <path d="M17.13 13c.4 0 .75.34.75.75v2.63h2.62c.41 0 .75.33.75.75 0 .4-.34.75-.75.75h-2.62v2.62c0 .41-.34.75-.75.75-.42 0-.75-.34-.75-.75v-2.62h-2.63c-.41 0-.75-.34-.75-.75 0-.42.34-.75.75-.75h2.63v-2.63c0-.41.33-.75.75-.75" />
        <path fillRule="evenodd" d="M6.88 2.75C9.15 2.75 11 4.6 11 6.88S9.15 11 6.88 11 2.75 9.15 2.75 6.88 4.6 2.75 6.88 2.75m0 1.5c-1.45 0-2.63 1.18-2.63 2.63 0 1.44 1.18 2.62 2.63 2.62 1.44 0 2.62-1.18 2.62-2.62S8.32 4.25 6.88 4.25M17.13 2.75c2.27 0 4.12 1.85 4.12 4.13S19.4 11 17.13 11 13 9.15 13 6.88s1.85-4.13 4.13-4.13m0 1.5c-1.45 0-2.63 1.18-2.63 2.63 0 1.44 1.18 2.62 2.63 2.62 1.44 0 2.62-1.18 2.62-2.62s-1.18-2.63-2.62-2.63" clipRule="evenodd" />
    </IconBase>
  ))
);

LayoutGridCirclePlusRegular.displayName = 'LayoutGridCirclePlusRegular';

// Triple export pattern
export { LayoutGridCirclePlusRegular, LayoutGridCirclePlusRegular as LayoutGridCirclePlusRegularIcon, LayoutGridCirclePlusRegular as SiLayoutGridCirclePlusRegular };
export default LayoutGridCirclePlusRegular;
export type { LayoutGridCirclePlusRegularProps };
